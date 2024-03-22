import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";

const useReview = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/review`)
            return res.data;
        }
    })
    return [reviews, refetch]
};

export default useReview;