"use client";

import signout from "@/actions/signout";
import { Button } from "@mui/material";
import { Ticket } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { AuthCtx } from "./auth-provider";

export default function Header(props: { isDashboardHeader?: boolean }) {
	const { isAuthenticated } = useContext(AuthCtx);

	return (
		<nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href={props.isDashboardHeader ? "/dashboard" : "/"}>
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center shadow-lg">
								<Ticket className="w-5 h-5 text-white" />
							</div>
							<div className="hidden sm:block">
								<h1 className="text-xl font-bold text-gray-900">TicketFlow</h1>
								<p className="text-xs text-gray-500 -mt-1">Management System</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center md:space-x-2 space-x-4">
						{!props.isDashboardHeader &&
							(isAuthenticated ? (
								<Link
									href="/dashboard"
									className="text-gray-700 hover:text-blue-800 px-4 py-2 font-medium transition-colors p-2"
								>
									Dashboard
								</Link>
							) : (
								<Link
									href="/signin"
									className="text-gray-700 hover:text-blue-800 px-4 py-2 font-medium transition-colors p-2"
								>
									Sign In
								</Link>
							))}
						<Link href="/tickets/new">
							<Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
								Create Ticket
							</Button>
						</Link>
						{props.isDashboardHeader && (
							<Button
								onClick={signout}
								className="text-gray-700 hover:text-red-800 px-4 py-2 font-medium transition-colors p-2"
							>
								Sign Out
							</Button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
