import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { MdOutlinePayment } from "react-icons/md";
import usePlace from "../../Hooks/Useplace";
import useHotel from "../../Hooks/useHotel";
import { FaCcPaypal, FaHotel, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaStar } from "react-icons/fa6";
import useChoicelist from "../../Hooks/useChoicelist";
import useReview from "../../Hooks/useReview";
import useAllPayments from "../../Hooks/useAllPayments";
import usePayments from "../../Hooks/usePayments";


const Userhome = () => {
    const { user } = useContext(AuthContext)
    const [place] = usePlace();
    const [hotel] = useHotel();
    const [reviews] = useReview();
    const [allPayments] = useAllPayments();
    const [payment] = usePayments();
    const [choice] = useChoicelist();
    const [destination] = useChoicelist();
    // console.log(allPayments);

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className="ml-4 text-5xl font-mono font-bold mt-5 mb-8">Hi this is <span className=" text-pink-600">{user.displayName}</span> home</h2>
            {/* upper part */}
            <div className=" flex lg:flex-row flex-col justify-evenly items-center gap-4">
                {/* Stat 1 */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-[#FF8042] shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">Hotel</h2>
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-2">
                            <FaHotel className=" text-5xl font-bold"></FaHotel>
                            <h2 className=" text-2xl font-bold font-sans ">{hotel.length}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": hotel.length }} role="progressbar">{hotel.length}</div>
                        </div>
                    </div>
                </div>
                {/* Stat 2 */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-black shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">Place</h2>
                    <div className=" flex justify-between items-center gap-2">
                        <div className=" flex items-center">
                            <MdOutlinePayment className=" text-5xl font-bold"></MdOutlinePayment>
                            <h2 className=" text-2xl font-bold font-sans ">{place.length}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": place.length }} role="progressbar">{place.length}</div>
                        </div>
                    </div>
                </div>
                {/* Stat 3 */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-pink-600 shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">Destination</h2>
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-2">
                            <FaShoppingCart className=" text-5xl font-bold"></FaShoppingCart>
                            <h2 className=" text-2xl font-bold font-sans ">{destination.length}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": destination.length }} role="progressbar">{hotel.length}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Down part */}
            <div className=" flex lg:flex-row flex-col justify-center items-center mb-5">
                <div className=" lg:w-1/2 w-full lg:h-[469px] h-[300px] border-r-2 border-[#5b3d12] bg-[#ff9c1c] flex justify-center items-center mt-5">
                    <div className=" flex flex-col gap-2 items-center">
                        <img loading="lazy" className=" md:w-60 md:h-60 w-40 h-40 rounded-full" src={user.photoURL} alt="" />
                        <div className=" text-4xl text-black font-bold font-mono text-center">{user.displayName}</div>
                        <h2 className=" text-xl text-black font-bold">{user?.email}</h2>
                    </div>
                </div>
                {/* Count part */}
                <div className=" lg:w-1/2 lg:h-[469px] w-full h-[300px] bg-[#000] flex justify-center items-center mt-5">
                    <div>
                        <h2 className=" text-2xl font-bold font-mono mb-2 text-white">Your Activities</h2>
                        <div>
                            <div className=" flex items-center gap-1">
                                <FaShoppingCart className="text-blue-500"></FaShoppingCart>
                                <p className=" text-xl font-bold font-mono text-blue-500">Orders: {allPayments?.length}</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <FaStar className="text-[#00C4A1]"></FaStar>
                                <p className=" text-[#00C4A1] text-xl font-bold font-mono ">Reviews: {reviews?.length}</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <FaBook className="text-[#FFBB28]"></FaBook>
                                <p className=" text-[#FFBB28] text-xl font-bold font-mono ">Bookings:{choice?.length}</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <FaCcPaypal className="text-[#FF8042]"></FaCcPaypal>
                                <p className=" text-[#FF8042] text-xl font-bold font-mono ">Payment:{payment?.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userhome;