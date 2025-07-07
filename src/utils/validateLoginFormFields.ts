import type { SigninDto } from "../../types";

const validateLoginFormFields = (form: SigninDto) => {
	const errors: Partial<Record<keyof SigninDto, string>> = {};

	if (!form.email || form.email.trim() === "")
		errors.email = "Email is required.";
	else if (
		!/^[a-zA-Z.\d]{3,}@[a-zA-Z\d]{2,}.[a-zA-Z\d.]{2,}$/.test(form.email.trim())
	)
		errors.email = "Email is invalid";

	if (!form.password || form.password.trim() === "")
		errors.password = "Password is required.";

	if (Object.keys(errors).length) throw errors;

	form.email = form.email.trim().toLowerCase();
};

export default validateLoginFormFields;
