import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import UseaxiosPublic from "./UseAxiospublic";

const useChoicelist = () => {
    const axiosPublic = UseaxiosPublic()
    const { user } = useContext(AuthContext)
    const { data: choice = [], refetch } = useQuery({
        queryKey: ['choice'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/choicelist?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [choice, refetch]
};

export default useChoicelist;