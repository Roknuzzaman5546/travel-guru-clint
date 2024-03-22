import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";

const useHotel = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: hotel = [], refetch } = useQuery({
        queryKey: ['hotel'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/hotel`)
            console.log(res.data)
            return res.data;
        }
    })
    return [hotel, refetch]
};

export default useHotel;