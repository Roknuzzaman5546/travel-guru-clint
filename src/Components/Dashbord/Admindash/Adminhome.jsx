import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { FaMoneyBill, FaSitemap, FaTrailer, FaUser } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import UseaxiosPublic from "../../Hooks/UseaxiosPublic";
import SplineChart from "./SplineChart";
import PieChart from "./PieChart";

const Adminhome = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseaxiosPublic();


    const { data: stats } = useQuery({
        queryKey: ['admin-home'],
        queryFn: async () => {
            const res = await axiosPublic.get("/admin-stats")
            return res.data
        }
    })



    return (
        <div className=" w-11/12 mx-auto">
            {/* title os Admin home */}
            <h2 className="ml-4 text-5xl font-mono font-bold mt-5 mb-8">Hi this is <span className=" text-pink-600">{user.displayName}(admin)</span> home</h2>
            {/* This is state part */}
            <div className=" flex lg:flex-row flex-col justify-evenly items-center gap-4">
                {/* state 1 All users */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-[#FF8042] shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">All users</h2>
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-2">
                            <FaUser className=" text-5xl font-bold"></FaUser>
                            <h2 className=" text-2xl font-bold font-sans ">{stats?.users}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": stats?.users }} role="progressbar">{stats?.users}</div>
                        </div>
                    </div>
                </div>
                {/* state 2 Items */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-black shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">Items</h2>
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-2">
                            <FaSitemap className=" text-5xl font-bold"></FaSitemap>
                            <h2 className=" text-2xl font-bold font-sans ">{stats?.item}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": stats?.item }} role="progressbar">{stats?.item}</div>
                        </div>
                    </div>
                </div>
                {/* state 3 Revenue */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-[#FF8042] shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">Revenue</h2>
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-2">
                            <FaMoneyBill className=" text-5xl font-bold"></FaMoneyBill>
                            <h2 className=" text-2xl font-bold font-sans ">{stats?.revenue}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": stats?.revenue }} role="progressbar">{stats?.revenue}</div>
                        </div>
                    </div>
                </div>
                {/* state 4 orders  */}
                <div className=" lg:w-5/12 w-full lg:h-[150px] h-[150px] py-2 rounded border-b-[7px] border border-black shadow-xl p-3">
                    <h2 className=" text-2xl font-bold font-sans">Orders</h2>
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-2">
                            <FaTrailer className=" text-5xl font-bold"></FaTrailer>
                            <h2 className=" text-2xl font-bold font-sans ">{stats?.orders}</h2>
                        </div>
                        <div>
                            <div className="radial-progress text-primary" style={{ "--value": stats?.orders }} role="progressbar">{stats?.orders}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* graph part */}
            <div className=" flex md:flex-row flex-col justify-center items-center mb-10 mt-16 md:gap-7 gap-0">
                {/* This is BarChart */}
                <div className=" md:w-full w-[90%]">
                    <SplineChart></SplineChart>
                </div>
                {/* This is PieChart */}
                <div className=" w-full">
                    <PieChart></PieChart>
                </div>
            </div>
        </div>
    );
};

export default Adminhome;