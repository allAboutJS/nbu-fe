import AuthProvider from "@/components/auth-provider";
import Footer from "@/components/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
	title: "Ticket Management System",
	description: "Created by Onah Victor",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();

	return (
		<html lang="en">
			<body className="antialiased overflow-x-hidden">
				<AuthProvider isAuthenticated={Boolean(cookieStore.get("auth")?.value)}>
					<AppRouterCacheProvider options={{ enableCssLayer: true }}>
						{children}
						<Toaster richColors position="top-center" />
					</AppRouterCacheProvider>
				</AuthProvider>
				<Footer />
			</body>
		</html>
	);
}
