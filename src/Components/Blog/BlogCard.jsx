import { CiClock2 } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaComment, FaFacebook, FaInstagram, FaLinkedin, FaShareAlt } from "react-icons/fa";
import './Blog.css'
import { Link } from "react-router-dom";
import useComment from "../Hooks/useComment";
import LazyLoad from "react-lazyload";

const BlogCard = ({ item }) => {
    const { img, date, bloggerInfo, details, title, _id, facebookId, instagramId, linkedinID } = item || {};
    const { bloggerName } = bloggerInfo || {};
    const [comments] = useComment()
    const newComments = comments.filter((item) => item.blogId == _id);

    return (
        <div className="">
            <div className=" shadow-custom-blue rounded-lg overflow-hidden">
                <div className=" p-[30px] relative">
                    <div className=" border-b border-[#e1e1f0] pb-[10px]">
                        <div className=" flex justify-between -ml-[12px] -mr-[12px]">
                            <ul className=" flex items-center">
                                <li className=" flex items-center font-medium pl-3 pr-3 gap-1">
                                    <i className=" text-[#ff9c1c]"><CiClock2 /></i>
                                    <p>{date}</p>
                                </li>
                                <li className=" flex items-center font-medium pl-3 pr-3 gap-1 cursor-pointer">
                                    <i className=" text-[#ff9c1c]"><AiOutlineUser /></i>
                                    <p>{bloggerName}</p>
                                </li>
                            </ul>
                            {/* Share option */}
                            <ul className=" flex items-center cursor-pointer">
                                <li className=" flex items-center font-medium pl-3 pr-3 gap-1 ml-24">
                                    <li className=" text-[#ff9c1c]"><FaComment /></li>
                                    <p>{newComments.length}</p>
                                </li>
                                <li className="relative mainLi flex flex-row-reverse items-center">
                                    <li className="text-[#ff9c1c] font-bold"><FaShareAlt /></li>
                                    <ul className="child-ul mainLi absolute mr-4 bg-[#ff9c1c] flex justify-center gap-3 items-center rounded shadow-custom-red p-[10px] text-xl">
                                        <li><a target="blank" href={instagramId}><FaInstagram></FaInstagram></a></li>
                                        <li><a target="blank" href={facebookId}><FaFacebook></FaFacebook></a></li>
                                        <li><a target="blank" href={linkedinID}><FaLinkedin></FaLinkedin></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link to={`/blog/${_id}`}><h1 className=" text-2xl font-bold mb-3 cursor-pointer hover:text-[#ff9c1c]">{title}</h1></Link>
                        <h1 className=" text-sm">{details.slice(0, 290)}</h1>
                    </div>
                    <div></div>
                </div>
                <div>
                    <LazyLoad>
                    <img  className=" w-full h-[500px] transition-all duration-200" src={img} alt="" />
                    </LazyLoad>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;