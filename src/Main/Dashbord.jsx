import { FaCalendar, FaCartShopping, FaCookie, FaHouseMedical, FaHouse, FaUtensils, FaList, FaBook, FaUsers, FaLocationDot } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaHotel, FaSearch } from "react-icons/fa";
import logimg from '../assets/logo.png'
import { useContext } from "react";
import { Authcontext } from "../Components/Authprovider/Authprovider";


const Dashbord = () => {
    const { user } = useContext(Authcontext)
    const isAdmin = false;
    return (
        <div>
            <div>
                <div className="navbar text-white bg-gray-400 py-2">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <div className="flex lg:hidden">
                                    <div className=" w-64 h-screen shadow-md lg:bg-gray-200 bg-slate-400 text-black font-mono font-bold text-xlflex flex-col items-center">
                                        <div className=' flex flex-col items-center my-2'>
                                            <img className=' w-40 h-36 rounded-full' src={user?.photoURL} alt="" />
                                            <h2 className=' text-2xl font-bold font-alfa text-orange-400'>{user?.displayName}</h2>
                                        </div>
                                        <ul className="menu">
                                            {
                                                isAdmin ?
                                                    <>
                                                        <li><NavLink to="/dashbord/home">
                                                            <FaHouse></FaHouse>
                                                            Admin home</NavLink></li>
                                                        <li><NavLink to="/dashbord/additems">
                                                            <FaUtensils></FaUtensils>
                                                            Add  items</NavLink></li>
                                                        <li><NavLink to="/dashbord/manageitems">
                                                            <FaList></FaList>
                                                            Manageitems</NavLink></li>
                                                        <li><NavLink to="/dashbord/manageBookings">
                                                            <FaBook></FaBook>
                                                            Bookings</NavLink></li>
                                                        <li><NavLink to="/dashbord/Users">
                                                            <FaUsers></FaUsers>
                                                            All Users</NavLink></li>
                                                    </>
                                                    :
                                                    <>
                                                        <li><NavLink to="/dashbord/home">
                                                            <FaHouseMedical></FaHouseMedical>
                                                            User home</NavLink></li>
                                                        <li><NavLink to="/dashbord/cookie">
                                                            <FaCookie></FaCookie>
                                                            Add item</NavLink></li>
                                                        <li><NavLink to="/dashbord/cart">
                                                            <FaCartShopping></FaCartShopping>
                                                            My cart</NavLink></li>
                                                        <li><NavLink to="/dashbord/booking">
                                                            <FaCalendar></FaCalendar>
                                                            User Bookings ()</NavLink></li>
                                                    </>
                                            }
                                            <div className="divider"></div>
                                            <li><NavLink to="/">
                                                <FaHouseMedical></FaHouseMedical>
                                                Home</NavLink></li>
                                            <li><NavLink to="/allplace">
                                                <FaLocationDot></FaLocationDot>
                                                All places</NavLink></li>
                                            <li><NavLink to="/hotel">
                                                <FaHotel></FaHotel>
                                                All Hotel</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className=" flex-1">
                                        <Outlet></Outlet>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <img className=" w-28 h-10 lg:flex hidden" src={logimg} alt="" />
                    </div>
                    <div className="navbar-center">
                        <div className="py-1 lg:ml-0 ml-5 bg-white px-2 rounded-md border border-black flex gap-1 items-center">
                            <FaSearch className=" text-black mr-2"></FaSearch>
                            <input className=" text-black bg-none" placeholder="Search your destination....." type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className=" lg:flex mt-2 pl-3 hidden">
                    <div className=" w-64 h-screen shadow-md bg-gray-200 text-black font-mono font-bold text-xl flex flex-col items-center">
                        <div className=' flex flex-col items-center my-2'>
                            <img className=' w-40 h-36 rounded-full' src={user?.photoURL} alt="" />
                            <h2 className=' text-2xl font-bold font-alfa text-orange-400'>{user?.displayName}</h2>
                        </div>
                        <ul className="menu">
                            {
                                isAdmin ?
                                    <>
                                        <li><NavLink to="/dashbord/home">
                                            <FaHouse></FaHouse>
                                            Admin home</NavLink></li>
                                        <li><NavLink to="/dashbord/additems">
                                            <FaLocationDot></FaLocationDot>
                                            Add  place</NavLink></li>
                                        <li><NavLink to="/dashbord/additems">
                                            <FaHotel></FaHotel>
                                            Add  hotel</NavLink></li>
                                        <li><NavLink to="/dashbord/manageitems">
                                            <FaList></FaList>
                                            MnageItem</NavLink></li>
                                        <li><NavLink to="/dashbord/manageBookings">
                                            <FaBook></FaBook>
                                            Bookings</NavLink></li>
                                        <li><NavLink to="/dashbord/Users">
                                            <FaUsers></FaUsers>
                                            All Users</NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li><NavLink to="/dashbord/home">
                                            <FaHouseMedical></FaHouseMedical>
                                            User home</NavLink></li>
                                        <li><NavLink to="/dashbord/cookie">
                                            <FaHotel></FaHotel>
                                            My hotel booking</NavLink></li>
                                        <li><NavLink to="/dashbord/cart">
                                            <FaLocationDot></FaLocationDot>
                                            My place booking</NavLink></li>
                                        <li><NavLink to="/dashbord/booking">
                                            <FaCalendar></FaCalendar>
                                            User Bookings ()</NavLink></li>
                                    </>
                            }
                            <div className="divider"></div>
                            <li><NavLink to="/">
                                <FaHouseMedical></FaHouseMedical>
                                Home</NavLink></li>
                            <li><NavLink to="/allplace">
                                <FaLocationDot></FaLocationDot>
                                All places</NavLink></li>
                            <li><NavLink to="/hotel">
                                <FaHotel></FaHotel>
                                All Hotel</NavLink></li>
                        </ul>
                    </div>
                    <div className=" flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;