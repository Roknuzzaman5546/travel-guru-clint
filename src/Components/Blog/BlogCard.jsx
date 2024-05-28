import { CiClock2 } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaComment, FaFacebook, FaInstagram, FaLinkedin, FaShareAlt } from "react-icons/fa";

const BlogCard = ({ item }) => {
    const {  img, date, bloggerInfo } = item || {};
    const { bloggerName } = bloggerInfo || {};

    return (
        <div className="">
            <div className=" shadow-custom-blue rounded-lg overflow-hidden">
                <div className=" p-[30px] relative">
                    <div className=" border-b border-[#e1e1f0] pb-[15px] mb-[15px]">
                        <div className=" flex justify-between -ml-[12px] -mr-[12px]">
                            <ul className=" flex items-center">
                                <li className=" flex items-center font-medium pl-3 pr-3 gap-1">
                                    <i className=" text-[#ff9c1c]"><CiClock2 /></i>
                                    <p>{date}</p>
                                </li>
                                <li className=" flex items-center font-medium pl-3 pr-3 gap-1">
                                    <i className=" text-[#ff9c1c]"><AiOutlineUser /></i>
                                    <p>{bloggerName}</p>
                                </li>
                            </ul>
                            <ul className=" flex items-center">
                                <li className=" flex items-center font-medium pl-3 pr-3 gap-1 ml-24">
                                    <li className=" text-[#ff9c1c]"><FaComment /></li>
                                    <p>3</p>
                                </li>
                                <li className=" relative">
                                    <li className=" text-[#ff9c1c] font-bold"><FaShareAlt /></li>
                                    <ul className=" absolute right-10 bg-[#ff9c1c] flex justify-center gap-3 items-center rounded shadow-custom-red p-[10px] text-xl">
                                        <li><a href=""><FaInstagram></FaInstagram></a></li>
                                        <li><a href=""><FaFacebook></FaFacebook></a></li>
                                        <li><a href=""><FaLinkedin></FaLinkedin></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;