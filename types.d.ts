export interface User {
	id?: string;
	first_name: string;
	last_name: string;
	email: string;
	password_hash: string;
	category: TicketCategory;
	created_at?: Date;
}

export type TicketStatus =
	| "open"
	| "in_progress"
	| "completed"
	| "in_review"
	| "approved"
	| "rejected"
	| "closed";

export type TicketCategory =
	| "technical"
	| "billing"
	| "general"
	| "admissions"
	| "it_support"
	| "finance";

export interface Ticket {
	id: string;
	title: string;
	description?: string;
	category: TicketCategory;
	status: TicketStatus;
	created_at: string;
	updated_at: string;
}

export enum TicketCategories {
	Technical = "technical",
	Billing = "billing",
	General = "general",
	Admissions = "admissions",
	IT_Support = "it_support",
	Finance = "finance",
}

export interface CreateTicketDto {
	title: string;
	description: string;
	category: TicketCategories;
}

export interface SigninDto {
	email: string;
	password: string;
}
