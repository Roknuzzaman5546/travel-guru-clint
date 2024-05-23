import { CiClock2 } from "react-icons/ci";

const BlogCard = ({ item }) => {
    const { details, img, title, date } = item;

    return (
        <div className="">
            <div className=" shadow-custom-blue rounded-lg overflow-hidden">
                <div className=" p-[30px] relative">
                    <div className=" border-b border-[#e1e1f0] pb-[15px] mb-[15px]">
                        <ul className=" flex flex-wrap -ml-[12px] -mr-[12px]">
                            <li className=" flex items-center font-medium pl-3 pr-3">
                                <CiClock2 />
                                <p>{date}</p>
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