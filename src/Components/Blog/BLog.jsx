import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className=" mt-36 mb-44 text-center" >
            <h2>{blogs.length}</h2>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    blogs.map(item => <BlogCard key={item._id} item={item} ></BlogCard>)
                }
            </div>
        </div >
    );
};

export default Blog;