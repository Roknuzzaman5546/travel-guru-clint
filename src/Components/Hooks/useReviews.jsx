import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";

const useReviews = () => {
    const axiosPublic = UseaxiosPublic();
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews`);
            return res.data;
        },
    });
    return [reviews, refetch];
};

export default useReviews;
