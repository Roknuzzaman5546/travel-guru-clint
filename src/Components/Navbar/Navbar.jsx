import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logimg from '../../assets/logo.png'
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import './Navbar.css'

const Navbar = () => {
    const [isNavbarJumping, setIsNavbarJumping] = useState(false);

    let Admin = true;
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 100;
            setIsNavbarJumping(scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const link = <>
        <li><NavLink to="/" className="navAfter text-xl relative font-bold text-white mx-3">Home</NavLink></li>
        <li><NavLink to="/destination" className="navAfter relative font-bold text-xl text-white mx-3">Destination</NavLink></li>
        <li><NavLink to="/allplace" className="navAfter relative font-bold text-xl text-white mx-3">All place</NavLink></li>
        <li><NavLink to="/hotel" className="navAfter relative font-bold text-xl text-white mx-3">All hotel</NavLink></li>

        {user ? Admin ? <li><Link to="/dashbord/adminhome" className="navAfter relative font-bold text-xl text-white ml-3 mr-5" >Dashbord</Link></li> : <li><Link to="/dashbord/userhome" className="navAfter relative font-bold text-xl text-white ml-3 mr-5" >Dashbord</Link></li> : ''}
    </>

    return (
        <div className={` sticky bg-[#000000] w-full top-0 left-0 z-[99999] ${isNavbarJumping ? 'animate-jump shadow-md' : ''}`} >
            <div className="navbar w-11/12 mx-auto text-white py-5 px-2 font-bold text-xl font-mono">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52 text-black py-7">
                            {link}
                        </ul>
                    </div>
                    <img className=" w-28 h-10 lg:mx-0 mx-auto" src={logimg} alt="" />
                    <div className="py-1 lg:ml-40 ml-12 bg-white px-2 rounded-md border border-black lg:flex items-center gap-1 hidden">
                        <FaSearch className=" text-black mr-2"></FaSearch>
                        <input className=" text-black bg-none" placeholder="Search your destination....." type="text" name="" id="" />
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-center">
                            {link}
                        </ul>
                    </div>
                    <div>
                        {user ?
                            <li>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user?.photoURL} alt="" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow bg-gray-600 rounded-box w-52">
                                        <li>
                                            <a>
                                                <h2 className=" text-xl text-white font-bold uppercase">{user.displayName}</h2>
                                            </a>
                                        </li>
                                        <li><Link onClick={handlelogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </li>
                            : <li><Link to="/login"><button className="btn">Login</button></Link></li>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;