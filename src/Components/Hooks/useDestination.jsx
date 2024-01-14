import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const useDestination = () => {
    const axiospublic = UseAxiospublic()
    const { user } = useContext(Authcontext)
    const { data: destination = [], refetch } = useQuery({
        queryKey: ['destination'],
        queryFn: async () => {
            const res = await axiospublic.get(`/destination?email=${user.email}`)
            console.log(res.data)
            return res.data;
        }
    })
    return [destination, refetch]
};

export default useDestination;