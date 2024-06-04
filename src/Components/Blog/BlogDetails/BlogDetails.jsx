import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
    const places = useLoaderData();
    const { id } = useParams();
    // console.log(places);
    return (
        <div>
            <h2>This is blog details{id} </h2>
        </div>
    );
};

export default BlogDetails;