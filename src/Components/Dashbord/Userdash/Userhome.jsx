import { useContext } from "react";
import { Authcontext } from "../../Authprovider/Authprovider";
import { MdOutlinePayment } from "react-icons/md";
import usePlace from "../../Hooks/Useplace";
import useHotel from "../../Hooks/useHotel";
import { FaCcPaypal, FaHotel, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaStar } from "react-icons/fa6";
import useChoicelist from "../../Hooks/useChoicelist";
import { GiJourney } from "react-icons/gi";


const Userhome = () => {
    const { user } = useContext(Authcontext)
    const [place] = usePlace();
    const [hotel] = useHotel();
    const [destination] = useChoicelist();

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className="ml-4 text-5xl font-mono font-bold mt-5 mb-8">Hi this is <span className=" text-pink-600">{user.displayName}</span> home</h2>
            <div className=" flex lg:flex-row flex-col justify-evenly items-center gap-4">
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] py-2 rounded flex justify-center items-center gap-2">
                    <MdOutlinePayment className=" text-white text-5xl font-bold"></MdOutlinePayment>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{place.length}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Place</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-2 rounded flex justify-center items-center gap-2">
                    <FaHotel className=" text-white text-5xl font-bold"></FaHotel>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{hotel.length}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Hotel</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] py-2 rounded flex justify-center items-center gap-2">
                    <GiJourney className=" text-white text-5xl font-bold"></GiJourney>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{destination.length}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Destination</h2>
                    </div>
                </div>
            </div>
            <div className=" flex lg:flex-row flex-col justify-center items-center mb-5">
                <div className=" lg:w-1/2 w-full lg:h-[469px] h-[300px] border-r-2 border-[#5b3d12] bg-[#D1A054] flex justify-center items-center mt-5">
                    <div className=" flex flex-col gap-2 items-center">
                        <img className="w-60 h-60 rounded-full" src={user.photoURL} alt="" />
                        <div className=" text-5xl text-black font-bold font-mono">{user.displayName}</div>
                    </div>
                </div>
                <div className=" lg:w-1/2 lg:h-[469px] w-full h-[300px] bg-[#FEF9C3] flex justify-center items-center mt-5">
                    <div>
                        <h2 className=" text-2xl font-bold font-mono mb-2">Your Activities</h2>
                        <div>
                            <div className=" flex items-center gap-1">
                                <FaShoppingCart className="text-blue-500"></FaShoppingCart>
                                <p className=" text-xl font-bold font-mono text-blue-500">Orders:</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <FaStar className="text-[#00C4A1]"></FaStar>
                                <p className=" text-[#00C4A1] text-xl font-bold font-mono ">Reviews:</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <FaBook className="text-[#FFBB28]"></FaBook>
                                <p className=" text-[#FFBB28] text-xl font-bold font-mono ">Bookings:</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <FaCcPaypal className="text-[#FF8042]"></FaCcPaypal>
                                <p className=" text-[#FF8042] text-xl font-bold font-mono ">Payment:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userhome;