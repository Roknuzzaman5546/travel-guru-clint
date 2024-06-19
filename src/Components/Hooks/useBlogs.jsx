import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "./UseaxiosPublic";

const useBlogs = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blogs`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [blogs, refetch]
};

export default useBlogs;