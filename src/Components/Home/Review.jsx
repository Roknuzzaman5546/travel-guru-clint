import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import useReview from "../Hooks/useReview";
import { useState } from "react";

const ReviewHome = () => {
    const [reviews] = useReview();
    console.log(reviews)


    const [currentpage, Setcurrentpage] = useState(0);
    // DO: blogs data pagination on page 
    const count = reviews?.length;
    // now this time itemper page static.after when we will do backed in then we will do it's daynamic
    const itemsperPage = 6;
    const numberofPages = Math.ceil(count / itemsperPage)
    console.log(numberofPages)

    const pages = [];
    for (let i = 0; i < numberofPages; i++) {
        pages.push(i);
    }

    //DO: CurentpageITems. 
    // Calculate the index range for the current page
    const startIndex = (currentpage) * itemsperPage;
    const endIndex = startIndex + itemsperPage;
    // Slice the data to get the items for the current page
    const currentItems = reviews?.slice(startIndex, endIndex);


    const handlechangepage = (page) => {
        Setcurrentpage(page)
    }

    const handlePrev = () => {
        if (currentpage > 0) {
            Setcurrentpage(currentpage - 1)
        }
    }

    const handleNext = () => {
        if (currentpage < pages.length - 1) {
            Setcurrentpage(currentpage + 1)
        }
    }

    return (
        <div className=" md:max-w-screen-2xl w-11/12 mx-auto my-16">
            <h2 className=" text-5xl font-bold font-mono text-center">Our Most popular Review</h2>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                {
                    currentItems?.map((item, index) => <div key={index}>
                        <div className="">
                            <div className=" flex flex-col items-center justify-center">
                                <img className="h-48 w-48 rounded-full" src={item.img} alt="Shoes" />
                            </div>
                            <div className="p-8 mt-10 bg-base-200 md:h-[250px] h-[260px] rounded">
                                <p className=" space-y-2 mt-2">{item.details}</p>
                                <div className=" flex justify-between items-center mt-4">
                                    <h2 className=" text-3xl font-bold">{item.name}</h2>
                                    <div className=" flex items-center gap-2 font-bold">
                                        <p><FaStar className=" text-yellow-400"></FaStar></p>
                                        <p className="text-black text-xl">{item.rating}</p>
                                    </div>
                                </div>
                                <h3 className=" text-3xl font-bold font-mono mt-3">Like: {item.services}</h3>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="join">
                    <div className=" flex items-center">
                        <button className="mr-5 items-center flex justify-center btn-circle text-gray-400 hover:bg-[#EC3323]" onClick={handlePrev}><FaArrowLeft></FaArrowLeft></button>
                        {
                            pages.map(page => <button
                                key={page}
                                onClick={() => handlechangepage(page)}
                                className={currentpage == page ? " btn btn-circle bg-[#EC3323] mr-5" : "btn btn-circle hover:bg-[#EC3323] mr-5"}>{page}
                            </button>)
                        }
                        <button className="ml-5 btn-circle items-center flex justify-center hover:bg-[#EC3323] text-gray-400" onClick={handleNext}><FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewHome;