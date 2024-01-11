import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";

const usePlace = () => {
    const axiospublic = UseAxiospublic()
    const { data: place = [] } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiospublic.get(`/place`)
            console.log(res.data)
            return res.data;
        }
    })
    return [place]
};

export default usePlace;