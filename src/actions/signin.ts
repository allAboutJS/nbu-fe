"use server";

import { cookies } from "next/headers";
import type { SigninDto } from "../../types";

const signin = async (form: SigninDto) => {
	const res = await fetch(`${process.env.SERVER_ENDPOINT}/auth/signin`, {
		method: "POST",
		body: JSON.stringify(form),
		headers: {
			"content-type": "application/json",
		},
	});
	const data = await res.json();
	const cookieStore = await cookies();

	if (res.ok)
		cookieStore.set("auth", data.data.token, {
			sameSite: "strict",
			secure: true,
			httpOnly: true,
			path: "/",
			priority: "high",
		});

	return data;
};

export default signin;
