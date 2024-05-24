import { CiClock2 } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { FaComment, FaShareAlt } from "react-icons/fa";

const BlogCard = ({ item }) => {
    const { details, img, title, date, bloggerInfo } = item || {};
    const { bloggerImg, bloggerEmail, bloggerName } = bloggerInfo || {};

    return (
        <div className="">
            <div className=" shadow-custom-blue rounded-lg overflow-hidden">
                <div className=" p-[30px] relative">
                    <div className=" border-b border-[#e1e1f0] pb-[15px] mb-[15px]">
                        <ul className=" flex flex-wrap -ml-[12px] -mr-[12px]">
                            <li className=" flex items-center font-medium pl-3 pr-3 gap-1">
                                <i className=" text-[#ff9c1c]"><CiClock2 /></i>
                                <p>{date}</p>
                            </li>
                            <li className=" flex items-center font-medium pl-3 pr-3 gap-1">
                                <i className=" text-[#ff9c1c]"><AiOutlineUser /></i>
                                <p>{bloggerName}</p>
                            </li>
                            <li className=" flex items-center font-medium pl-3 pr-3 gap-1 ml-20">
                                <li className=" text-[#ff9c1c]"><FaComment /></li>
                                <p>3</p>
                            </li>
                            <li>
                                <li className=" text-[#ff9c1c]"><FaShareAlt /></li>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                        </ul>
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