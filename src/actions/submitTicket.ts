"use server";

import type { CreateTicketDto } from "../../types";

const submitTicket = async (form: CreateTicketDto) => {
	try {
		await fetch(`${process.env.SERVER_ENDPOINT}/ticket/new`, {
			method: "POST",
			body: JSON.stringify(form),
			headers: {
				"content-type": "application/json",
			},
		});

		return true;
	} catch {
		return false;
	}
};

export default submitTicket;
