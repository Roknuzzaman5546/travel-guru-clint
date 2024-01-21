import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "./useaxiospublic";

const useReview = () => {
    const axiospublic = UseAxiospublic()
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiospublic.get(`/review`)
            return res.data;
        }
    })
    return [reviews, refetch]
};

export default useReview;