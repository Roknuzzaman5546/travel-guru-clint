import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import Reviews from "./ReviewHotelPlace/Reviews";
import ReviewForm from "./ReviewHotelPlace/ReviewForm";
import { FaSearch } from "react-icons/fa";
import useReviews from "../Hooks/useReviews";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";

const SingleHotelDetails = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseaxiosPublic();
    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);
    const hotels = useLoaderData();
    const { id } = useParams();
    const hotel = hotels.find(item => item._id == id)
    const [reviews] = useReviews();
    //to filter reviews
    const recentHotels = hotels.filter((item) => item._id != id)
    const sameName = reviews.filter((name) => name.itemId === hotel?._id);
    // console.log(recentHotels);

    const handlehotelbook = (hotel) => {
        const hotelbook = {
            id: hotel._id,
            name: hotel.hotelName,
            title: hotel.title,
            img: hotel.imageUrl,
            cost: hotel.bookingCost,
            email: user.email,
            userName: user.displayName,
            userphoto: user.photoURL
        }
        // console.log(hotelbook)
        axiosPublic.post('/choicelist', hotelbook)
            .then(res => {
                console.log(res.data)
                Swal.fire(`${hotel.hotelName} is choiced succesfully`)
            })
    }

    return (
        <div className=" w-10/12 mx-auto">
            <div data-aos="zoom-in" className="mb-5 mt-5">
                <h1 className="text-4xl border-2 border-b-slate-400 border-t-slate-400 py-5 md:w-1/2 w-[80%]  mx-auto text-center font-Chinzel uppercase font-bold font-rancho">{hotel.hotelName}</h1>
                <h1 className=" text-center text-yellow-500 text-xl">---This place is details here---</h1>
            </div>
            <div className=" mb-20">
                <img loading="lazy" className=" w-full mx-auto h-[480px] my-16" src={hotel.imageUrl} alt="" />
                <div>
                    <div className=" flex justify-between items-center mt-4">
                        <h2 className=" text-3xl font-bold font-serif">{hotel.hotelName}</h2>
                        <h2 className=" font-bold text-2xl font-serif  my-2">{hotel.title}</h2>
                    </div>
                    <div className=" flex justify-between items-center mt-1">
                        <h2 className=" text-3xl font-bold font-serif"><span className=" font-bold">Cost:</span> {hotel.bookingCost} $</h2>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={hotel.rating}
                            readOnly
                        />
                    </div>
                    <p className="font-serif text-xl mt-2"><span className=" text-xl font-bold font-serif">Details:</span> {hotel.details}</p>
                    <div className=" flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-3 items-center mt-2 mb-5">
                        <Link to='/hotel'><button className=" btn bg-[#ff9c1c] font-bold font-mono text-xl">View all place</button></Link>
                        <button onClick={() => handlehotelbook(hotel)} className=" btn bg-[#ff9c1c] font-bold font-mono text-xl">Add choice list</button>
                    </div>
                </div>
            </div>
            {/* Review section */}
            <div className=" flex md:flex-row flex-col justify-center items-start gap-7 mb-20">
                {/* Left site */}
                <div className=" md:w-[65%] w-full">
                    {/* blog details */}
                    <div>
                        <Reviews item={hotel}></Reviews>
                    </div>
                    {/* Comment section */}
                    <div>
                        <div className="items-center gap-8 px-5 my-7">
                            <h2 className=" text-3xl font-bold mt-2">
                                {sameName?.length} Review
                            </h2>
                            {/* Comment */}
                            {/* Form section */}
                            <div>
                                <h2 className=" text-3xl font-bold my-3">Leave A Review</h2>
                                {/* <p className=" text-xl text-gray-400">
                                    Your email address will not be published. Required fields are  marked</p> */}
                                {/* comment form */}
                                <ReviewForm item={hotel} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right site */}
                <div className=" border shadow-xl p-5 rounded md:w-[35%] w-full">
                    {/* Search bar part */}
                    <div>
                        <label className="font-bold text-lg mb-3">Search hotel</label>
                        <form>
                            <div className=" bg-white px-2 rounded-md flex items-center my-3 mr-3">
                                <FaSearch className=" text-black absolute ml-2"></FaSearch>
                                <input className=" text-black bg-none pl-7 py-1 pr-2 rounded w-full border" placeholder="Search your destination....." type="text" name="" id="" />
                            </div>
                        </form>
                    </div>
                    {/* Recent blogs part */}
                    <div>
                        <h2 className=" text-xl font-bold my-3">Recent hotel</h2>
                        <div>
                            {
                                recentHotels?.slice(0, 5).map((item) => (
                                    <div key={item._id} className="flex flex-col items-start lg:flex-row lg:items-center gap-2 my-5">
                                        <img loading="lazy" className=" w-24 h-16 rounded-lg" src={item?.imageUrl} alt="" />
                                        <div>
                                            <Link to={`/hotel/${item._id}`}>
                                                <h2 className=" font-bold">{item?.hotelName}</h2>
                                            </Link>
                                            <h2 className=" text-slate-400">{item?.bookingCost} $</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotelDetails;