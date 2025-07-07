import submitTicket from "@/actions/submitTicket";
import type { CreateTicketDto } from "../../types";
import validateTicketFormFields from "./validateTicketFormFields";

const handleTicketFormSubmit = async (
	form: CreateTicketDto,
	setError: React.Dispatch<
		React.SetStateAction<Partial<Record<keyof CreateTicketDto, string>>>
	>,
) => {
	try {
		validateTicketFormFields(form);
	} catch (e) {
		setError(<Partial<Record<keyof CreateTicketDto, string>>>e);
		return false;
	}

	setError({});

	try {
		return await submitTicket(form);
	} catch {
		return false;
	}
};

export default handleTicketFormSubmit;
