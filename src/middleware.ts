import { NextResponse, type NextRequest } from "next/server";

/** Auth middleware. */
export function middleware(req: NextRequest) {
	const authToken = req.cookies.get("auth");

	if (!authToken?.value)
		return NextResponse.redirect(new URL("/signin", req.url));

	return NextResponse.next();
}

export const config = {
	matcher: "/dashboard/:path*",
};
