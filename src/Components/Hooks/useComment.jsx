import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";

const useComment = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: comments = [], refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/comments`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [comments, refetch]
};

export default useComment;