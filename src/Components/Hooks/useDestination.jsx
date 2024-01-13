import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";

const useDestination = () => {
    const axiospublic = UseAxiospublic()
    const { data: destination = [], refetch } = useQuery({
        queryKey: ['destination'],
        queryFn: async () => {
            const res = await axiospublic.get(`/destination`)
            console.log(res.data)
            return res.data;
        }
    })
    return [destination, refetch]
};

export default useDestination;