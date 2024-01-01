import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li className=" btn btn-warning"><NavLink to="/login">Login</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">daisyUI</a>                    
                </div>
                <div className="py-1 bg-white px-2 rounded-md border border-black">
                    <FaSearch className=" text-black mr-2"></FaSearch>
                    <input className=" text-black bg-none" placeholder="Search your destination....." type="text" name="" id="" />
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-center">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;