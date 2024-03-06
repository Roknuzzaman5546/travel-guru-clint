import { NavLink } from "react-router-dom";
import useHotel from "../../Hooks/useHotel";
import Hoteldetails from "./Hoteldetails";
import './Allhotel.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Footer from "../../Home/Footer";

const Allhotel = () => {
    const [hotel] = useHotel();

    const [currentpage, Setcurrentpage] = useState(0);
    // DO: blogs data pagination on page 
    const count = hotel?.length;
    // now this time itemper page static.after when we will do backed in then we will do it's daynamic
    const itemsperPage = 6;
    const numberofPages = Math.ceil(count / itemsperPage)

    const pages = [];
    for (let i = 0; i < numberofPages; i++) {
        pages.push(i);
    }

    //DO: CurentpageITems..If you want currentpagesdata be able to bring backedin by pass through by currentpage and itemsperPages after implement backedin 
    // Calculate the index range for the current page
    const startIndex = (currentpage) * itemsperPage;
    const endIndex = startIndex + itemsperPage;
    // Slice the data to get the items for the current page
    const currentItems = hotel.slice(startIndex, endIndex);


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
        <div>
            <div className="hotelbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-yellow-600 font-serif">All Hotel</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/hotel' className='navAfter relative font-medium text-base text-white mx-3 '>All hotel</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=" text-4xl font-bold font-mono text-center mt-4 mb-10">ALl hotels</h2>
            <div className="lg:max-w-screen-2xl w-11/12  mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        currentItems.map(item => <Hoteldetails key={item._id} item={item}></Hoteldetails>)
                    }
                </div>
                <div className="flex flex-col justify-center items-center my-10">
                    <div className="join">
                        <div className=" flex items-center">
                            <button className="mr-5 btn-circle items-center flex justify-center hover:bg-[#000] text-gray-400 hover:text-white" onClick={handlePrev}><FaArrowLeft></FaArrowLeft></button>
                            {
                                pages.map(page => <button
                                    key={page}
                                    onClick={() => handlechangepage(page)}
                                    className={currentpage == page ? " h-12 w-12 text-white rounded-full bg-[#ff9c1c] hover:bg-[#000] mr-5" : "h-12 w-12 rounded-full hover:text-white bg-[#000000]  hover:bg-[#ff9c1c] mr-5"}>{page}
                                </button>)
                            }
                            <button className="ml-5 btn-circle items-center flex justify-center hover:bg-[#000] text-gray-400 hover:text-white" onClick={handleNext}><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Allhotel;