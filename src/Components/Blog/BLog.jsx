import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";
import BlogCard from "./BlogCard";

const Blog = () => {
    const axiopublic = UseaxiosPublic();
    const { data: place = [] } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiopublic.get('/place')
            // console.log(res.data)
            return res.data;
        }
    })

    return (
        <div className=" mt-36 mb-44 text-center" >
            <div>
                {
                    place.map(item => <BlogCard key={item._id} item={item} ></BlogCard>)
                }
            </div>
        </div >
    );
};

export default Blog;