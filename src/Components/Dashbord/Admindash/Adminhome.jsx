import { useContext } from "react";
import { Authcontext } from "../../Authprovider/Authprovider";
import { FaMoneyBill, FaSitemap, FaTrailer, FaUser } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "../../Hooks/useaxiospublic";

const Adminhome = () => {
    const { user } = useContext(Authcontext)
    const axiospublic = UseAxiospublic();

    const { data: stats } = useQuery({
        queryKey: ['admin-home'],
        queryFn: async () => {
            const res = await axiospublic.get("/admin-stats")
            return res.data
        }
    })
    console.log(stats)

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className="ml-4 text-5xl font-mono font-bold mt-5 mb-8">Hi this is <span className=" text-pink-600">{user.displayName}(admin)</span> home</h2>
            <div className=" flex lg:flex-row flex-col justify-evenly items-center gap-4">
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] py-2 rounded flex justify-center items-center gap-2">
                    <FaUser className=" text-white text-5xl font-bold"></FaUser>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.users}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">All users</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-2 rounded flex justify-center items-center gap-2">
                    <FaSitemap className=" text-white text-5xl font-bold"></FaSitemap>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.item}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Items</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] py-2 rounded flex justify-center items-center gap-2">
                    <FaMoneyBill className=" text-white text-5xl font-bold"></FaMoneyBill>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.revenue} $</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Revenue</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] py-2 rounded flex justify-center items-center gap-2">
                    <FaTrailer className=" text-white text-5xl font-bold"></FaTrailer>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.orders}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Orders</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adminhome;