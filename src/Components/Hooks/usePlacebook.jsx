import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const usePlacebook = () => {
    const axiospublic = UseAxiospublic()
    const { user } = useContext(Authcontext)
    const { data: placebook = [], refetch } = useQuery({
        queryKey: ['placebook'],
        queryFn: async () => {
            const res = await axiospublic.get(`/placebook?email=${user.email}`)
            return res.data;
        }
    })
    return [placebook, refetch]
};

export default usePlacebook;