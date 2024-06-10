import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Link, NavLink } from "react-router-dom";
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div>
            <div className="blogBgImg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-[35%] mx-auto py-24 text-center">
                        <h2 className="text-6xl font-bold text-[#ff9c1c] font-serif">All Blog</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <Link to="/blog" className=" text-[#ff9c1c]">Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-36 mb-44 text-center lg:w-3/4 w-11/12  mx-auto">
                {/* <h2>{blogs.length}</h2> */}
                <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">
                    {
                        blogs.map(item => <BlogCard key={item._id} item={item} ></BlogCard>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Blog;