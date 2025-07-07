import getAuthUser from "@/actions/getAuthUser";

const useAuthUser = async () => {
	const res = await getAuthUser();

	if (res === null) return res;
	return res.data.user;
};

export default useAuthUser;
