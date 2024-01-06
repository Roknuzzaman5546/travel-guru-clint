import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "../Hooks/useaxiospublic";

const Blog = () => {
    const axiopublic = UseAxiospublic();
    const { data: place = [] } = useQuery({
        queryKey: ['place'],
        queryFn: async () => {
            const res = await axiopublic.get('/place')
            console.log(res.data) 
            return res.data;
        }
    })

    return (
        <div className=" my-10" >
            <h2>Blog:{place.length}</h2>
            <h1>Thi is blog place</h1>
        </div >
    );
};

export default Blog;