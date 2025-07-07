import DashboardAuthProvider from "@/components/dashboard-auth-provider";
import Header from "@/components/header";
import useAuthUser from "@/hooks/useAuthUser";
import useTickets from "@/hooks/useTickets";
import { connection } from "next/server";
import type { PropsWithChildren } from "react";
import type { Ticket, User } from "../../../../types";

export default async function DashboardLayout({ children }: PropsWithChildren) {
	await connection();
	const user = (await useAuthUser()) as User | null;
	const tickets = (await useTickets()) as Ticket[] | null;

	return (
		<DashboardAuthProvider user={user} tickets={tickets}>
			<Header isDashboardHeader />
			<div className="bg-teal-50/20">
				<div className="mt-16 min-h-screen max-w-5xl mx-auto px-4 py-6 flex-1">
					{children}
				</div>
			</div>
		</DashboardAuthProvider>
	);
}
