import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const useChoicelist = () => {
    const axiospublic = UseAxiospublic()
    const { user } = useContext(Authcontext)
    const { data: choice = [], refetch } = useQuery({
        queryKey: ['choice'],
        queryFn: async () => {
            const res = await axiospublic.get(`/choicelist?email=${user.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [choice, refetch]
};

export default useChoicelist;