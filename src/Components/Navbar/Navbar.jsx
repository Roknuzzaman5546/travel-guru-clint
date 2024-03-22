import { Link, NavLink } from "react-router-dom";
import logoImg from '../../assets/logo.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import './Navbar.css'
import useGetRole from "../Hooks/useGetRole";

const Navbar = () => {
    const [isNavbarJumping, setIsNavbarJumping] = useState(false);
    const { user, userLogout } = useContext(AuthContext)

    const [isAdmin, setIsAdmin] = useState(false)
    const [userRole] = useGetRole()
    // console.log(userRole);
    const role = userRole.role;
    // admin check condition useEffect
    useEffect(() => {
        if (role == "admin") {
            setIsAdmin(true)
        }
        else {
            setIsAdmin(false)
        }
        // console.log(isAdmin);
    }, [isAdmin, role]);

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

    // navLinks defined
    const link = <>
        <li><NavLink to="/" className="navAfter relative font-bold text-white mx-2">Home</NavLink></li>
        <li><NavLink to="/destination" className="navAfter relative font-bold text-white mx-2">Destination</NavLink></li>
        <li><NavLink to="/allplace" className="navAfter relative font-bold text-white mx-2">All place</NavLink></li>
        <li><NavLink to="/hotel" className="navAfter relative font-bold text-white mx-2">All hotel</NavLink></li>
        {user ? isAdmin ? <li><Link to="/Dashboard/adminhome" className="navAfter relative font-bold text-white ml-3 mr-5" >Dashboard</Link></li> : <li><Link to="/Dashboard/userhome" className="navAfter relative font-bold text-white ml-2 mr-5" >Dashboard</Link></li> : ''}
    </>

    // dropdown link defined
    const otherDropDownLinks = (
        <>
            <li><NavLink to="/blog" className="navAfter relative font-bold text-white mx-2">Blog</NavLink></li>
            <li><NavLink to="/About" className="navAfter relative font-bold text-white mx-2">About us</NavLink></li>
            <li><NavLink to="/condition" className="navAfter relative font-bold text-white mx-2">Terms & Condition</NavLink></li>
        </>
    )
    // // dropdown link defined
    const dropNavLinks = (
        <>
            <div className="dropdown dropdown-hover relative h-[65px]">
                <div tabIndex={0} role="button" className="relative font-medium text-base text-white mx-3 flex items-center h-full">Others</div>
                <ul className="menu dropdown-content z-[1] bg-[#000] pl-5  w-[250px] border-white border-x-[2px] rounded-[5px] pt-0 pb-1 absolute top-14">
                    {otherDropDownLinks}
                </ul>
            </div>
        </>
    )

    return (
        <div className={` sticky bg-[#000000] w-full top-0 left-0 z-[99999] ${isNavbarJumping ? 'animate-jump shadow-md' : ''}`} >
            <div className="navbar w-11/12 mx-auto text-white py-3 px-2 font-bold text-xl font-mono">
                    {/* navbar for small device */}
                <div className="navbar-start">
                    {/* navbar dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        {/* navLinks for small device */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52 text-black py-7">
                            {link}
                            <details className="dropdown w-full mt-3 text-white cursor-pointer">
                                <summary className="w-full relative py-2 border-l-[2px] border-whiterounded-t-md ">
                                    <span className="left-3 bottom-2 text-white">Others</span>
                                </summary>
                                <ul className="flex flex-col border-l-[2px] border-white py-2 pl-3 rounded-md rounded-t-none">
                                    {otherDropDownLinks}
                                </ul>
                            </details>
                        </ul>
                    </div>
                    <Link to={'/'}><img className=" w-28 h-10 lg:mx-0 mx-auto" src={logoImg} alt="" /></Link>
                </div>
                {/* navbar for lg device */}
                <div className="hidden lg:flex navbar-center">
                    {/* navLInks for lg device */}
                    <ul className="menu menu-horizontal items-center">
                        {link}
                        {dropNavLinks}
                    </ul>
                </div>
                {/* navbar end part users profile and dashboard routs */}
                <div className=" navbar-end">
                    <div>
                        {user ?
                            <li>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={user?.photoURL} alt="" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-5 shadow bg-[#000] rounded-box w-52 border-white border-x-[2px]">
                                        <li>
                                            <a>
                                                <h2 className=" text-xl text-white font-bold uppercase">{user.displayName}</h2>
                                            </a>
                                        </li>
                                        <li className="my-1">{
                                            isAdmin ?
                                                <Link to="/Dashboard/adminhome" className="" >Dashboard</Link> :
                                                <Link to="/Dashboard/userhome" className="" >Dashboard</Link>
                                        }</li>
                                        <li><Link onClick={handlelogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </li>
                            :
                            <li>
                                <Link to="/login"><button className="btn">Login</button></Link>
                            </li>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;