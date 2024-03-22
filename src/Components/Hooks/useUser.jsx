import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";


const useUser = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`)
            return res.data;
        }
    })
    return [users, refetch]
};

export default useUser;