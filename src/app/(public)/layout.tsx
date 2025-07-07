"use client";

import Header from "@/components/header";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<div className="mt-16">{children}</div>
		</>
	);
}
