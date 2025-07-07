"use client";

import handleLoginFormSubmit from "@/utils/handleLoginFormSubmission";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import type { SigninDto } from "../../../../types";

export default function CreateTicket() {
	const initialFormState = {
		email: "",
		password: "",
	};

	const [form, setForm] = useState<SigninDto>(initialFormState);

	const [errors, setErrors] = useState<
		Partial<Record<keyof SigninDto, string>>
	>({});

	const router = useRouter();

	return (
		<>
			<title>Admin Sign In</title>

			<div className="bg-gradient-to-b from-slate-50/50 to-cyan-50/50 px-4 sm:px-6 lg:px-8 py-12 space-y-12">
				<div className="max-w-7xl mx-auto">
					<div className="text-center max-w-4xl mx-auto">
						<div className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-800 text-sm font-medium mb-8">
							<Lock className="w-4 h-4 mr-2" />
							Secure Sign In
						</div>

						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
							Admin{" "}
							<span className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 bg-clip-text text-transparent">
								Sign In.
							</span>
						</h1>

						<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
							Login securely to your account to manage tickets that have been
							assigned to you.
						</p>
					</div>
				</div>

				<Box
					component="form"
					className="bg-white flex flex-col shadow rounded-2xl max-w-xl mx-auto px-4 py-12 space-y-4"
					onSubmit={async (e) => {
						e.preventDefault();
						const res = await handleLoginFormSubmit(form, setErrors);
						if (res.status === "failed") toast.error(res.message);
						else {
							toast.success(res.message);
							router.replace("/dashboard");
						}
					}}
				>
					<FormControl fullWidth>
						<TextField
							error={!!errors.email}
							helperText={errors.email}
							id="email"
							label="Email"
							variant="outlined"
							name="email"
							value={form.email}
							required
							onChange={({ target }) =>
								setForm((prev) => ({ ...prev, email: target.value }))
							}
						/>
					</FormControl>

					<FormControl fullWidth>
						<TextField
							error={!!errors.password}
							helperText={errors.password}
							id="password"
							label="Password"
							variant="outlined"
							name="password"
							value={form.password}
							required
							type='password'
							onChange={({ target }) =>
								setForm((prev) => ({ ...prev, password: target.value }))
							}
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
