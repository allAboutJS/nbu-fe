import type { CreateTicketDto } from "../../types";
import { rawCategories } from "./categories";

const validateTicketFormFields = (form: CreateTicketDto) => {
	const errors: Partial<Record<keyof CreateTicketDto, string>> = {};

	if (!form.title || form.title.trim() === "")
		errors.title = "Title is required.";
	else if (form.title.length < 5)
		errors.title = "Title must be at least 5 characters.";

	if (!form.description || form.description.trim() === "")
		errors.description = "Description is required.";
	else if (form.description.length < 10)
		errors.description = "Description must be at least 10 characters.";

	if (!form.category || !rawCategories.includes(form.category))
		errors.category = "Please select a valid category.";

	if (Object.keys(errors).length) throw errors;
};

export default validateTicketFormFields;
