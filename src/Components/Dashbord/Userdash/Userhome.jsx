import { useContext } from "react";
import { Authcontext } from "../../Authprovider/Authprovider";
import { MdOutlinePayment } from "react-icons/md";
import usePlace from "../../Hooks/Useplace";


const Userhome = () => {
    const { user } = useContext(Authcontext)
    const [place] = usePlace();
    return (
        <div className=" w-11/12 mx-auto">
            <h2 className="ml-5 text-4xl font-mono font-bold mt-5 mb-3">Hi this is <span className=" text-pink-600">{user.displayName}</span> home</h2>
            <div className=" flex justify-evenly items-center gap-4">
                <div className=" w-[398px] h-[140px]  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] py-2 rounded flex justify-center items-center gap-2">
                    <MdOutlinePayment className=" text-white text-4xl font-bold"></MdOutlinePayment>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{place.length}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Place</h2>
                    </div>
                </div>
                <div className=" w-[398px] h-[140px]  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-2 rounded flex justify-center items-center gap-2">
                    <MdOutlinePayment className=" text-white text-4xl font-bold"></MdOutlinePayment>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{place.length}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Place</h2>
                    </div>
                </div>
                <div className=" w-[398px] h-[140px]  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] py-2 rounded flex justify-center items-center gap-2">
                    <MdOutlinePayment className=" text-white text-4xl font-bold"></MdOutlinePayment>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{place.length}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Place</h2>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <div className=" w-[622px] h-[496px] border-r-2 border-[#5b3d12] bg-[#D1A054] flex justify-center items-center mt-5">
                    <div className=" flex flex-col gap-2 items-center">
                        <img className="w-60 h-60 rounded-full" src={user.photoURL} alt="" />
                        <div className=" text-3xl font-bold font-mono">{user.displayName}</div>
                    </div>
                </div>
                <div className=" w-[622px] h-[496px] bg-[#FEF9C3] flex justify-center items-center mt-5">
                    <div>
                        <h2>Your Activities</h2>
                        <div>
                            <p>Orders:</p>
                            <p>Reviews:</p>
                            <p>Bookings:</p>
                            <p>Payment:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userhome;