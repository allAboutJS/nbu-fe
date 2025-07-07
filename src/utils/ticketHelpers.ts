import { AlertCircle, CheckCircle, Loader } from "lucide-react";

export const statusConfig = {
	open: {
		label: "Open",
		icon: AlertCircle,
		color:
			"bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200",
	},
	in_progress: {
		label: "In Progress",
		icon: Loader,
		color:
			"bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200",
	},
	completed: {
		label: "Completed",
		icon: CheckCircle,
		color:
			"bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200",
	},
};

export const ticketStatuses = [
	{ value: "open", label: "Open" },
	{ value: "in_progress", label: "In Progress" },
	{ value: "completed", label: "Completed" },
];
