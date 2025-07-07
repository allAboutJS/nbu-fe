"use client";

import updateTicketStatus from "@/actions/updateTicketStatus";
import { DashboardCtx } from "@/components/dashboard-auth-provider";
import { categoriesMap } from "@/utils/categories";
import formatDate from "@/utils/formatDate";
import { statusConfig, ticketStatuses } from "@/utils/ticketHelpers";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Calendar, Clock, Filter, Tag } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import type { Ticket, TicketStatus } from "../../../../types";

export default function Dashboard() {
	const { user, tickets, setTickets } = useContext(DashboardCtx);
	const [sortedTickets, setSortedTickets] = useState(tickets);
	const [query, setQuery] = useState("");
	const [status, setStatus] = useState<TicketStatus | "all">("all");

	useEffect(() => {
		if (tickets?.length)
			setSortedTickets(
				tickets.filter((ticket) => {
					if (status === "all")
						return (
							ticket.title.toLowerCase().includes(query.toLowerCase()) ||
							ticket.description?.toLowerCase().includes(query.toLowerCase())
						);

					return (
						(ticket.title.toLowerCase().includes(query.toLowerCase()) ||
							ticket.description
								?.toLowerCase()
								.includes(query.toLowerCase())) &&
						ticket.status === status
					);
				}),
			);
	}, [query, tickets, status]);

	return (
		<div className="space-y-10">
			<h1 className="text-4xl font-bold">
				Welcome Back{" "}
				<span className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 bg-clip-text text-transparent">
					{user!.first_name} {user!.last_name}!
				</span>
			</h1>

			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				<div className="bg-blue-50 p-4 rounded-md border border-zinc-300 text-blue-800 space-y-2">
					<h3 className="font-medium">Total Tickets</h3>
					<p className="text-3xl font-bold">{tickets?.length}</p>
				</div>
				<div className="bg-red-50 p-4 rounded-md border border-zinc-300 text-red-800 space-y-2">
					<h3 className="font-medium">Open Tickets</h3>
					<p className="text-3xl font-bold">
						{tickets?.filter((ticket) => ticket.status === "open").length}
					</p>
				</div>
				<div className="bg-yellow-50 p-4 rounded-md border border-zinc-300 text-yellow-800 space-y-2">
					<h3 className="font-medium">In Progress</h3>
					<p className="text-3xl font-bold">
						{
							tickets?.filter((ticket) => ticket.status === "in_progress")
								.length
						}
					</p>
				</div>
				<div className="bg-green-50 p-4 rounded-md border border-zinc-300 text-green-800 space-y-2">
					<h3 className="font-medium">Completed Tickets</h3>
					<p className="text-3xl font-bold">
						{tickets?.filter((ticket) => ticket.status === "completed").length}
					</p>
				</div>
			</section>

			<section>
				<form className="bg-white p-4 rounded-md shadow-sm space-y-1">
					<div className="flex items-center gap-2">
						<Filter />
						<h2 className="text-2xl font-bold">Search & Filter Tickets</h2>
					</div>

					<div className="flex items-center">
						<TextField
							className="p-2 flex-1"
							size="small"
							placeholder="Search tickets, by title and description..."
							disabled={!tickets?.length}
							value={query}
							onChange={({ target }) => setQuery(target.value)}
						/>
						<FormControl disabled={!tickets?.length}>
							<InputLabel id="category-label">Category</InputLabel>
							<Select
								value={status}
								size="small"
								label="Category"
								labelId="category-label"
								onChange={({ target }) => setStatus(target.value)}
							>
								<MenuItem value="all">All Tickets</MenuItem>
								<MenuItem value="open">Open</MenuItem>
								<MenuItem value="in_progress">In Progress</MenuItem>
								<MenuItem value="completed">Completed</MenuItem>
							</Select>
						</FormControl>
					</div>
				</form>
			</section>

			<section className="space-y-2">
				{sortedTickets?.length ? (
					sortedTickets.map((ticket) => (
						<div
							key={ticket.id}
							className="p-4 bg-white rounded-md border border-zinc-200 relative"
						>
							<div
								className={`absolute top-2 right-2 py-1 px-2 rounded-full font-light text-xs ${statusConfig[ticket.status as keyof typeof statusConfig].color}`}
							>
								{statusConfig[ticket.status as keyof typeof statusConfig].label}
							</div>
							<h2 className="text-lg font-semibold">{ticket.title}</h2>
							<p className="text-zinc-500">{ticket.description}</p>

							<div className="mt-6 flex justify-between">
								<div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
									<div className="flex items-center">
										<Tag className="w-4 h-4 mr-1" />
										{categoriesMap[ticket.category]}
									</div>
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-1" />
										{formatDate(ticket.created_at)}
									</div>
									<div className="flex items-center">
										<Clock className="w-4 h-4 mr-1" />
										Updated {formatDate(ticket.updated_at)}
									</div>
								</div>

								<FormControl variant="outlined" size="small">
									<InputLabel id={ticket.title}>Status</InputLabel>
									<Select
										labelId={ticket.title}
										id={`${ticket.title}${ticket.title}`}
										value={ticket.status}
										label="Status"
										onChange={async ({ target }) => {
											toast.promise(
												new Promise((resolve, reject) => {
													updateTicketStatus(ticket.id, target.value)
														.then((done) => {
															if (done) {
																if (setTickets)
																	setTickets((prev) => {
																		if (prev) {
																			const changedTicket = prev.find(
																				(t) => t.id === ticket.id,
																			);
																			const otherTickets = prev.filter(
																				(t) => t.id !== ticket.id,
																			);
																			if (changedTicket)
																				changedTicket.status = target.value;

																			otherTickets.push(
																				changedTicket as Ticket,
																			);
																			return otherTickets.sort(
																				(a, b) =>
																					new Date(a.created_at).getTime() -
																					new Date(b.created_at).getTime(),
																			);
																		}

																		return prev;
																	});

																resolve(done);
															} else reject(done);
														})
														.catch(reject);
												}),
												{
													success: "Ticket status updated successfully",
													error: "We couldn't complete this request",
													loading: "Updating ticket status...",
												},
											);
										}}
									>
										{ticketStatuses.map(({ label, value }) => (
											<MenuItem
												defaultChecked={value === ticket.status}
												key={value}
												value={value}
											>
												{label}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>
						</div>
					))
				) : (
					<h3 className="text-2xl font-light text-zinc-400 text-center py-8">
						No tickets to show
					</h3>
				)}
			</section>
		</div>
	);
}
