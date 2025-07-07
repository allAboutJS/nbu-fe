"use client";

import categories from "@/utils/categories";
import handleTicketFormSubmit from "@/utils/handleTicketFormSubmission";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import type { CreateTicketDto, TicketCategories } from "../../../../../types";

export default function CreateTicket() {
	const initialFormState = {
		category: "" as TicketCategories,
		description: "",
		title: "",
	};

	const [form, setForm] = useState<CreateTicketDto>(initialFormState);

	const [errors, setErrors] = useState<
		Partial<Record<keyof CreateTicketDto, string>>
	>({});

	return (
		<>
			<title>Create New Ticket</title>

			<div className="bg-gradient-to-b from-slate-50/50 to-cyan-50/50 px-4 sm:px-6 lg:px-8 py-12 space-y-12">
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-800 text-sm font-medium mb-8">
							<Send className="w-4 h-4 mr-2" />
							Quick Support Request
						</div>

						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
							Submit a{" "}
							<span className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 bg-clip-text text-transparent">
								Support Ticket.
							</span>
						</h1>

						<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
							Let us know what you're facing. The right team will get back to
							you fast.
						</p>
					</div>
				</div>

				<Box
					component="form"
					className="bg-white flex flex-col shadow rounded-2xl max-w-xl mx-auto px-4 py-12 space-y-4"
					onSubmit={async (e) => {
						e.preventDefault();
						if (await handleTicketFormSubmit(form, setErrors)) {
							toast.success("Ticket was submitted successfully");
							setForm(initialFormState);
						} else if (Object.keys(errors).length)
							toast.error(
								"We could not submit your ticket. Please try again soon.",
							);
						else toast.error("Form validation errors");
					}}
				>
					<FormControl fullWidth>
						<TextField
							error={!!errors.title}
							helperText={errors.title}
							id="title"
							label="Title"
							variant="outlined"
							name="title"
							placeholder="A brief description of the problem"
							value={form.title}
							required
							onChange={({ target }) =>
								setForm((prev) => ({ ...prev, title: target.value }))
							}
						/>
					</FormControl>

					<FormControl fullWidth error={!!errors.category}>
						<InputLabel id="category-label">Category</InputLabel>
						<Select
							MenuProps={{ disableScrollLock: true }}
							required
							label="Category"
							labelId="category-label"
							onChange={({ target }) =>
								setForm((prev) => ({
									...prev,
									category: target.value as TicketCategories,
								}))
							}
							value={form.category}
						>
							{categories.map((c) => (
								<MenuItem key={c.value} value={c.value}>
									{c.label}
								</MenuItem>
							))}
						</Select>
						{errors.category && (
							<FormHelperText>{errors.category}</FormHelperText>
						)}
					</FormControl>

					<FormControl fullWidth>
						<TextField
							error={!!errors.description}
							helperText={errors.description}
							label="Description"
							multiline
							minRows={5}
							placeholder="Please provide detailed information about your issue or request, including any relevant contexts, error messages, or steps you've already tried"
							onChange={({ target }) =>
								setForm((prev) => ({ ...prev, description: target.value }))
							}
							required
							value={form.description}
						/>
					</FormControl>

					<SubmitButton />
				</Box>
			</div>
		</>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			disabled={pending}
			className="bg-gradient-to-b from-cyan-600 to-teal-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
		>
			{pending ? <Loader2 className="animate-spin" /> : "Submit Ticket"}
		</Button>
	);
}
