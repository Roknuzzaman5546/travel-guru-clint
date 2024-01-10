import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logimg from '../../assets/logo.png'
import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, userLogout } = useContext(Authcontext)

    const handlelogout = () => {
        userLogout()
            .then(() => {
                Swal.fire("User log out!");
            })
            .catch(error => {
                console.log(error)
            })
    }

    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar text-white bg-gray-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <img className=" w-28 h-10" src={logimg} alt="" />
                </div>
                <div className="py-1 lg:ml-0 ml-16 bg-white px-2 rounded-md border border-black">
                    <FaSearch className=" text-black mr-2"></FaSearch>
                    <input className=" text-black bg-none" placeholder="Search your destination....." type="text" name="" id="" />
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-center">
                            {link}
                        </ul>
                    </div>
                    {user ?
                        <li>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow bg-gray-400 rounded-box w-52">
                                    <li>
                                        <a>
                                            <h2 className=" uppercase">{user.displayName}</h2>
                                        </a>
                                    </li>
                                    <li><Link to="/dashbord/studentprofile">Dashbord</Link></li>
                                    <li><Link onClick={handlelogout}>Logout</Link></li>
                                </ul>
                            </div>
                        </li>
                        : <li><Link to="/login"><button className="btn">Login</button></Link></li>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;