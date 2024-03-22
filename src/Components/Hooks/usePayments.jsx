import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";

const usePayments = () => {
    const axiosPublic = UseaxiosPublic()
    const { user } = useContext(AuthContext)
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment?email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [payments, refetch]
};

export default usePayments;