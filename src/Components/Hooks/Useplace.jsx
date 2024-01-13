import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";

const usePlace = () => {
    const axiospublic = UseAxiospublic()
    const { data: place = [], refetch } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiospublic.get(`/place`)
            return res.data;
        }
    })
    return [place, refetch]
};

export default usePlace;