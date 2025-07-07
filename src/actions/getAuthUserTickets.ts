"use server";

import { cookies } from "next/headers";

const getAuthUserTickets = async () => {
	try {
		const cookieStore = await cookies();
		const res = await fetch(`${process.env.SERVER_ENDPOINT}/ticket/all`, {
			headers: { authorization: `Bearer ${cookieStore.get("auth")?.value}` },
		});

		if (!res.ok) return null;
		return await res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};

export default getAuthUserTickets;
