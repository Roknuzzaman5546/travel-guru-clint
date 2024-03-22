import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";

const usePlace = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: place = [], refetch } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/place`)
            return res.data;
        }
    })
    return [place, refetch]
};

export default usePlace;