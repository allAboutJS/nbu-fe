"use client";

import { TicketIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { DashboardCtx } from "./dashboard-auth-provider";

export default function DahsboardSideNav() {
	const { user } = useContext(DashboardCtx);

	return (
		<aside className="md:w-60 border-r border-r-zinc-300 h-screen fixed top-0 md:left-0 -left-full bottom-0">
			<div className="p-4 bg-zinc-50 border-b border-b-zinc-300">
				<Link href="/dashboard">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center shadow-lg">
							<TicketIcon className="w-5 h-5 text-white" />
						</div>
						<div className="hidden sm:block">
							<h1 className="text-xl font-bold text-gray-900">TicketFlow</h1>
							<p className="text-xs text-gray-500 -mt-1">Management System</p>
						</div>
					</div>
				</Link>
			</div>

			<div>{user?.first_name}</div>
		</aside>
	);
}
