"use client";

import { Button } from "@mui/material";
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
	return (
		<main>
			<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-x-hidden">
				<section className="relative">
					<div className="absolute top-20 left-10 w-50 h-50 bg-pink-100 rounded-full opacity-60 blur-xl z-0"></div>
					<div className="absolute -bottom-20 -right-10 w-100 h-100 bg-teal-100/40 rounded-full opacity-60 blur-2xl z-0"></div>
					<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
						<div className="text-center max-w-4xl mx-auto">
							<div className="inline-flex items-center px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-800 text-sm font-medium mb-8">
								<Zap className="w-4 h-4 mr-2" />
								Trusted by University Teams
							</div>

							<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
								Simplify Support.{" "}
								<span className="bg-gradient-to-r from-blue-800 via-blue-700 to-teal-600 bg-clip-text text-transparent">
									Resolve Faster.
								</span>
							</h1>

							<p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
								Our Ticket Management System helps your team categorize, assign,
								and resolve internal issues — all from one clean dashboard.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Link href="/signin">
									<Button variant="outlined">
										Sign In
										<ArrowRight className="ml-2" size={14} />
									</Button>
								</Link>
								<Link href="/tickets/new">
									<Button className="text-blue-900 bg-gradient-to-r from-blue-100 to-cyan-100">
										Create a Ticket
										<ArrowRight className="ml-2" size={14} />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="md:px-4 relative mb-20">
					<div className="max-w-6xl mx-auto px-4 lg:px-8 bg-white rounded-4xl shadow py-12">
						<div className="text-center mb-16">
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Built for{" "}
								<span className="bg-gradient-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
									Efficiency
								</span>
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Everything your team needs to manage support tickets
								effectively, all in one place.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-2 items-center">
							<div className="group">
								<div className="relative bg-blue-50/50 p-8 rounded-md hover:drop-shadow-[0_0_5px] hover:drop-shadow-blue-100 border border-blue-100/50">
									<div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 absolute top-2 right-2 border-2 border-blue-300">
										<Zap className="text-white" size={14} />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										Smart Routing
									</h3>
									<p className="text-gray-600 text-lg leading-relaxed">
										Tickets are auto-assigned to admins based on category,
										ensuring the right expertise handles each issue.
									</p>
								</div>
							</div>

							<div className="group">
								<div className="relative bg-teal-50/50 p-8 rounded-md hover:drop-shadow-[0_0_5px] hover:drop-shadow-teal-100 border border-teal-100">
									<div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-teal-300 absolute top-2 right-2">
										<Users className="text-white" size={14} />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										Category-based Dashboards
									</h3>
									<p className="text-gray-600 text-lg leading-relaxed">
										Each admin sees only what matters to them, with personalized
										views filtered by their expertise area.
									</p>
								</div>
							</div>

							<div className="group">
								<div className="relative bg-green-50/50 p-8 rounded-md hover:drop-shadow-[0_0_5px] hover:drop-shadow-green-100 border border-green-100">
									<div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-green-300 absolute top-2 right-2">
										<CheckCircle className="text-white" size={14} />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										Fast Resolutions
									</h3>
									<p className="text-gray-600 text-lg leading-relaxed">
										Track, update, and close tickets in just a few clicks with
										our streamlined workflow interface.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 bg-gradient-to-br from-blue-800 to-cyan-600">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div className="text-white">
								<div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
								<div className="text-blue-200 text-lg">Resolution Rate</div>
							</div>
							<div className="text-white">
								<div className="text-4xl lg:text-5xl font-bold mb-2">
									2.5hrs
								</div>
								<div className="text-blue-200 text-lg">Average Response</div>
							</div>
							<div className="text-white">
								<div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
								<div className="text-blue-200 text-lg">
									Universities Trust Us
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
					<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Ready to Transform Your{" "}
							<span className="bg-gradient-to-r from-teal-600 to-blue-800 bg-clip-text text-transparent">
								Support Process?
							</span>
						</h2>
						<p className="text-xl text-gray-600 mb-10 leading-relaxed">
							Join hundreds of university teams who have streamlined their
							ticket management with our platform.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link href="/signin">
								<Button className="w-full sm:w-auto bg-gradient-to-r from-blue-800 to-teal-900 hover:from-blue-900 hover:to-teal-800 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-md hover:shadow-xl transition-all duration-200">
									Get Started Today
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
