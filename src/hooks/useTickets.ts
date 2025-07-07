import getAuthUserTickets from "@/actions/getAuthUserTickets";

const useTickets = async () => {
	const res = await getAuthUserTickets();

	if (res === null) return res;
	return res.data.tickets;
};

export default useTickets;
