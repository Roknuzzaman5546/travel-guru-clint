import { Link, useLoaderData, useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import { FaSearch } from "react-icons/fa";
import './BlogDetails.css'
import useComment from "../../Hooks/useComment";

const BlogDetails = () => {
    const blogs = useLoaderData()
    const [comments, refetch] = useComment()
    const { id } = useParams();
    const blog = blogs.find((item) => item._id == id);
    const recentBlog = blogs.filter((item) => item._id != id)
    // console.log(blog._id);
    const newComments = comments.filter((item) => item.blogId == blog._id);
    // console.log(newComments);

    return (
        <div>
            {/* <Helmet>
                <title>Rentify | Blogs Details</title>
            </Helmet> */}
            <div className="blogDetailsBgImg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-[35%] mx-auto py-24 text-center">
                        <h2 className="text-6xl font-bold text-[#ff9c1c] font-serif">Blog Details</h2>
                        <div className="mt-2">
                            <Link to="/blog" className=' font-medium text-base text-white mx-3'>Blog</Link>
                            <Link to={`/blog/${id}`} className=" text-[#ff9c1c]">Blog details</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[95%] mx-auto mb-5">
                {/* blogs title */}
                <div>
                    <h2 className=" text-2xl font-bold my-4">{blog?.title}</h2>
                </div>
                <div className=" flex md:flex-row flex-col justify-center items-start gap-7">
                    {/* Left site */}
                    <div className=" md:w-[65%] w-full">
                        {/* blog details */}
                        <div className=" border shadow-xl rounded" >
                            <img className=" rounded-t-md md:h-[700px] h-[500px] w-full" src={blog?.img} alt="" />
                            <div className=" p-5 text-slate-400">
                                <h2>{blog?.details.slice(0, 310)}</h2>
                                <p className="text-slate-400 italic border-x-4 border-[#002172] rounded-ss-xl rounded-ee-xl my-3 p-3">{blog?.details.slice(310, 504)}</p>
                                <h2>{blog?.details.slice(504,)}</h2>
                            </div>
                        </div>
                        {/* Comment section */}
                        <div className="border items-center gap-8 px-5 my-7">
                            <h2 className=" text-3xl font-bold mt-2">
                                {newComments?.length} comment
                            </h2>
                            {/* Comment */}
                            {newComments?.map((comment) => (
                                <div key={comment._id} className="border-b py-6 px-5 my-7">
                                    <div>
                                        {/* main comment part */}
                                        <div className=" flex md:flex-row flex-col justify-start items-center gap-8 mb-2">
                                            {/* main comment photo part */}
                                            <img
                                                className="h-28 w-28 rounded-full"
                                                src={comment?.img}
                                                alt=""
                                            />
                                            {/* main comments name, date and message part */}
                                            <div className=" w-full">
                                                <div className=" flex justify-between">
                                                    <div>
                                                        <h2 className=" text-3xl font-bold mb-1">
                                                            {comment?.name}
                                                        </h2>
                                                        <p className=" text-gray-400 mb-3">{comment?.date}</p>
                                                    </div>
                                                </div>
                                                <p className=" leading-8 text-xl text-gray-400">
                                                    {comment?.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Form section */}
                            <div>
                                <h2 className=" text-3xl font-bold my-3">Leave A Comment</h2>
                                {/* <p className=" text-xl text-gray-400">
                                    Your email address will not be published. Required fields are  marked</p> */}
                                {/* comment form */}
                                <CommentForm blog={blog}  refetch={refetch}/>
                            </div>
                        </div>
                    </div>
                    {/* Right site */}
                    <div className=" border shadow-xl p-5 rounded md:w-[35%] w-full">
                        {/* Search bar part */}
                        <div>
                            <label className="font-bold text-lg mb-3">Search Blogs</label>
                            <form>
                                <div className=" bg-white px-2 rounded-md flex items-center my-3 mr-3">
                                    <FaSearch className=" text-black absolute ml-2"></FaSearch>
                                    <input className=" text-black bg-none pl-7 py-1 pr-2 rounded w-full border" placeholder="Search your destination....." type="text" name="" id="" />
                                </div>
                            </form>
                        </div>
                        {/* Recent blogs part */}
                        <div>
                            <h2 className=" text-xl font-bold my-3">Recent post</h2>
                            <div>
                                {
                                    recentBlog.slice(0, 5)?.map((item) => (
                                        <div key={item._id} className=" flex flex-col items-start lg:flex-row lg:items-center gap-2 my-5">
                                            <img className=" w-full h-full lg:w-24 lg:h-16 rounded-lg" src={item?.img} alt="" />
                                            <div>
                                                <h2 className=" font-bold">{item?.title}</h2>
                                                <h2 className=" text-slate-400">{item?.date}</h2>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;