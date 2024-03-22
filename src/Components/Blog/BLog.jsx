import { useQuery } from "@tanstack/react-query";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";

const Blog = () => {
    const axiopublic = UseaxiosPublic();
    const { data: place = [] } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiopublic.get('/place')
            console.log(res.data)
            return res.data;
        }
    })

    return (
        <div className=" mt-36 mb-44 text-center" >
            {/* ToDO: this page */}
            <h2 className=" text-3xl font-bold text-[]">Blog page</h2>
            <h2 className=" text-xl font-bold">Blog:{place.length}</h2>
            <div>
                <span className="loading loading-dots w-24"></span>
                <h2 className=" text-2xl font-bold">This page is working now</h2>
            </div>
        </div >
    );
};

export default Blog;