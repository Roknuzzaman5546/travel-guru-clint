import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";

const useGetRole = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = UseaxiosPublic();
    const { data: userRole = [], refetch } = useQuery({
        queryKey: ["userRole", user],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user.email}`);
            // console.log(res.data);
            return res.data;
        },
    });
    return [userRole, refetch];
};

export default useGetRole;