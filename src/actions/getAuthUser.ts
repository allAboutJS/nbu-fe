"use server";

import { cookies } from "next/headers";

const getAuthUser = async () => {
	try {
		const cookieStore = await cookies();
		const res = await fetch(`${process.env.SERVER_ENDPOINT}/auth/user`, {
			headers: { authorization: `Bearer ${cookieStore.get("auth")?.value}` },
		});

		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
};

export default getAuthUser;
