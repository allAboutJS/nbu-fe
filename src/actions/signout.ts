"use server";

import { cookies } from "next/headers";

const signout = async () => {
	const cookieStore = await cookies();
	cookieStore.delete("auth");
};

export default signout;
