import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";

const useHotelbook = () => {
    const axiospublic = UseAxiospublic()
    const { user } = useContext(Authcontext)
    const { data: hotelbook = [], refetch } = useQuery({
        queryKey: ['hotelbook'],
        queryFn: async () => {
            const res = await axiospublic.get(`/hotelbook?email=${user.email}`)
            return res.data;
        }
    })
    return [hotelbook, refetch]
};

export default useHotelbook;