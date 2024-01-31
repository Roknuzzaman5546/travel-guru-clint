import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const usePayments = () => {
    const axiospublic = UseAxiospublic()
    const { user } = useContext(Authcontext)
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiospublic.get(`/payment?email=${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [payments, refetch]
};

export default usePayments;