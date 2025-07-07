import { Ticket } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8 relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div>
					<div className="w-fit flex items-center justify-center space-x-3 mb-2">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
							<Ticket className="w-4 h-4 text-white" />
						</div>
						<div>
							<h3 className="text-xl font-bold">TicketFlow</h3>
							<p className="text-gray-400 text-sm">Management System</p>
						</div>
					</div>

					<p className="text-gray-300 mb-8 leading-relaxed">
						Built for teams that value efficiency, clarity, and speed.
					</p>

					<div className="border-t border-gray-800 pt-8">
						<p className="text-gray-400">
							© {new Date().getFullYear()} TicketFlow Management System. Built
							for university excellence.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
