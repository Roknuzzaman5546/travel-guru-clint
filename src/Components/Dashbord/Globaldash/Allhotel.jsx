import { Link, NavLink } from "react-router-dom";
import useHotel from "../../Hooks/useHotel";
import Hoteldetails from "./Hoteldetails";
import './Allhotel.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Footer from "../../Home/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";

const Allhotel = () => {
    const [hotel] = useHotel();
    const [updateHotel, setUpdateHotel] = useState([]);
    // console.log(updateHotel);

    const [currentpage, Setcurrentpage] = useState(0);
    // DO: blogs data pagination on page 
    const count = updateHotel?.length > 0 ? updateHotel.length : hotel?.length;
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
    const currentItems = updateHotel?.length > 0 ? updateHotel.slice(startIndex, endIndex) : hotel.slice(startIndex, endIndex);


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

    // sorting functions starts here
    const sortByPriceLowToHigh = () => {
        const sorted = [...hotel].sort(
            (a, b) => a.bookingCost - b.bookingCost);
        setUpdateHotel(sorted);
    };

    const sortByPriceHighToLow = () => {
        console.log("sortByPriceHighToLow");
        const sorted = [...hotel].sort(
            (a, b) => b.bookingCost - a.bookingCost);
        setUpdateHotel(sorted);
    };
    // sorting functions starts ends here

    // this handleSearch function added by [sojib] for onchange functionality
    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.value;
        console.log(searchValue);
        // filter title by search value
        const filteredHotel = hotel.filter((data) => {
            const titleMatches = data.hotelName.toLowerCase().includes(searchValue.toLowerCase());
            return titleMatches;
        });
        setUpdateHotel(filteredHotel);
    };

    return (
        <div>
            <div className="hotelbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-[20%] mx-auto py-24 text-center">
                        <h2 className="text-6xl font-bold text-[#ff9c1c] font-serif">All Hotel</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <Link to="/hotel" className=" text-[#ff9c1c]">Hotel</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#000] h-20 w-full mb-10">
                <div className=" w-[88%] mx-auto flex justify-around items-center pt-3">
                    <div className=" md:w-[50%] w-full md:ml-3 mx-auto">
                        <form>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-[#ff9c1c] sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-[#000]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="default-search"
                                    name="searchbar"
                                    onChange={handleSearch}
                                    placeholder="Search by name"
                                    className="block w-full p-4 ps-10 text-sm font-bold text-black  rounded-lg bg-[#ff9c1c]"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-[#000] hover:bg-white hover:text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* sort  */}
                    <div className=" flex justify-center mx-auto md:mr-3">
                        <details className="dropdown">
                            <summary className="m-1 btn bg-[#ff9c1c] text-white hover:bg-white hover:text-black">
                                Sort By Price{" "}
                                <MdKeyboardArrowDown className="text-xl"></MdKeyboardArrowDown>
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="font-bold" onClick={sortByPriceHighToLow}>
                                        High to Low
                                    </a>
                                </li>
                                <li>
                                    <a className="font-bold" onClick={sortByPriceLowToHigh}>
                                        Low to High
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-screen-2xl w-11/12  mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        currentItems.map((item => <Hoteldetails key={item._id} item={item}></Hoteldetails>))
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
                                    className={currentpage == page ? " h-12 w-12 font-bold text-white rounded-full bg-[#ff9c1c] hover:bg-[#000] mr-5" : "h-12 w-12 rounded-full bg-gray-200 hover:text-white font-bold  hover:bg-[#ff9c1c] mr-5"}>{page}
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