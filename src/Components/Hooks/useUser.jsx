import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";


const useUser = () => {
    const axiospublic = UseAxiospublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiospublic.get(`/users`)
            return res.data;
        }
    })
    return [users, refetch]
};

export default useUser;