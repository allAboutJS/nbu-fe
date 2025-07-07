"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import type { TicketStatus } from "../../types";

const updateTicketStatus = async (id: string, status: TicketStatus) => {
	try {
		const cookieStore = await cookies();
		const res = await fetch(
			`${process.env.SERVER_ENDPOINT}/ticket/${id}/update`,
			{
				body: JSON.stringify({ status }),
				method: "PATCH",
				headers: {
					authorization: `Bearer ${cookieStore.get("auth")?.value}`,
					"content-type": "application/json",
				},
			},
		);

		if (!res.ok) return false;

		revalidatePath("/dashboard", "layout");
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export default updateTicketStatus;
