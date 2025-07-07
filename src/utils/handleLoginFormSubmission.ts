import signin from "@/actions/signin";
import type { SigninDto } from "../../types";
import validateLoginFormFields from "./validateLoginFormFields";

const handleLoginFormSubmit = async (
	form: SigninDto,
	setError: React.Dispatch<
		React.SetStateAction<Partial<Record<keyof SigninDto, string>>>
	>,
) => {
	try {
		validateLoginFormFields(form);
	} catch (e) {
		setError(<Partial<Record<keyof SigninDto, string>>>e);
		return { status: "failed", message: "Form validation errors" };
	}

	setError({});

	try {
		return await signin(form);
	} catch {
		return { status: "failed", message: "An unexpected error ocurred" };
	}
};

export default handleLoginFormSubmit;
