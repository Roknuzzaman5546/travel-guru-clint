import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";

const useHotel = () => {
    const axiospublic = UseAxiospublic()
    const { data: hotel = [], refetch } = useQuery({
        queryKey: ['hotel'],
        queryFn: async () => {
            const res = await axiospublic.get(`/hotel`)
            console.log(res.data)
            return res.data;
        }
    })
    return [hotel, refetch]
};

export default useHotel;