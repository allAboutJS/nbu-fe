"use client";

import { useRouter } from "next/navigation";
import {
	createContext,
	useEffect,
	useState,
	type PropsWithChildren,
} from "react";
import type { Ticket, User } from "../../types";

export const DashboardCtx = createContext<{
	user: User | null;
	tickets: Ticket[] | null;
	setTickets: React.Dispatch<React.SetStateAction<Ticket[] | null>> | null;
}>({ user: null, tickets: null, setTickets: null });

export default function DashboardAuthProvider(
	props: PropsWithChildren & { user: User | null; tickets: Ticket[] | null },
) {
	const router = useRouter();
	const [tickets, setTickets] = useState(props.tickets);

	useEffect(() => {
		if (props.user === null) router.replace("/signin");
	}, [props.user, router]);

	if (props.user === null) {
		return null;
	}

	return (
		<DashboardCtx.Provider value={{ user: props.user, tickets, setTickets }}>
			{props.children}
		</DashboardCtx.Provider>
	);
}
