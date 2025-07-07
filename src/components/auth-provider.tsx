"use client";

import { createContext, type PropsWithChildren } from "react";

export const AuthCtx = createContext<{
	isAuthenticated: boolean;
}>({ isAuthenticated: false });

export default function AuthProvider({
	isAuthenticated,
	children,
}: PropsWithChildren & { isAuthenticated: boolean }) {
	return (
		<AuthCtx.Provider value={{ isAuthenticated }}>{children}</AuthCtx.Provider>
	);
}
