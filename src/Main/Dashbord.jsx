import {
  FaHouseMedical,
  FaHouse,
  FaList,
  FaUsers,
  FaLocationDot,
  FaCartPlus,
  FaBlogger,
} from "react-icons/fa6";
import { IoMdBus } from "react-icons/io";
import { MdPayment, MdReviews } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaEdit, FaHotel } from "react-icons/fa";
import logImg from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Authprovider/Authprovider";
import useGetRole from "../Components/Hooks/useGetRole";

const Dashboard = () => {
  const [isNavbarJumping, setIsNavbarJumping] = useState(false);
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userRole] = useGetRole();
  // console.log(userRole);
  const role = userRole.role;
  // admin check condition useEffect
  useEffect(() => {
    if (role == "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    // console.log(isAdmin);
  }, [isAdmin, role]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;
      setIsNavbarJumping(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* navbar for small device */}
      <div
        className={` navbar fixed bg-[#000000] w-full z-[99999] ${
          isNavbarJumping ? "animate-jump shadow-md" : ""
        }`}
      >
        <div className="navbar-start w-11/12 mx-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] pl-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex lg:hidden">
                <div className=" w-64 min-h-screen shadow-md bg-[#ff9c1c] text-white font-mono font-bold text-xlflex flex-col items-center pb-5">
                  <div className=" flex flex-col items-center my-2">
                    <img
                      className=" w-40 h-36 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                    <h2 className=" text-2xl font-bold font-alfa text-black">
                      {user?.displayName}
                    </h2>
                    <p className=" text-xs ">{user?.email}</p>
                  </div>
                  <ul className="menu">
                    {isAdmin ? (
                      <>
                        <li>
                          <NavLink to="/Dashboard/adminhome">
                            <FaHouse></FaHouse>
                            Admin home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/addplace">
                            <FaLocationDot></FaLocationDot>
                            Add place
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/addbus">
                          <IoMdBus />
                            Add Bus
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/addhotel">
                            <FaHotel></FaHotel>
                            Add hotel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/manageplace">
                            <FaList></FaList>
                            ManagePlace
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/managehotel">
                            <FaEdit></FaEdit>
                            ManageHotel
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/users">
                            <FaUsers></FaUsers>
                            All Users
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <NavLink to="/Dashboard/userhome">
                            <FaHouseMedical></FaHouseMedical>
                            User home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/choicelist">
                            <FaList></FaList>
                            My Choice List
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/payhistory">
                            <MdPayment></MdPayment>
                            Payment History
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/addreview">
                            <MdReviews></MdReviews>
                            Add Reviews
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/Dashboard/writeBlog">
                            <FaBlogger></FaBlogger>
                            Write Blog
                          </NavLink>
                        </li>
                      </>
                    )}
                    <div className="divider"></div>
                    <li>
                      <NavLink to="/">
                        <FaHouseMedical></FaHouseMedical>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/allplace">
                        <FaLocationDot></FaLocationDot>
                        All places
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/hotel">
                        <FaHotel></FaHotel>
                        All Hotel
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <Link to={"/"}>
            <img className=" w-28 h-10 md:ml-5 ml-10" src={logImg} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className=" lg:flex hidden">
            <ul className="menu menu-horizontal px-1 items-center text-white">
              <li>
                <NavLink to="/destination">Destination</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/condition">Condition</NavLink>
              </li>
              <li>
                <button className="btn btn-ghost btn-circle">
                  <FaCartPlus className=" text-2xl font-bold"></FaCartPlus>
                </button>
              </li>
              <li>
                <button className="btn btn-ghost btn-circle">
                  <IoNotifications className=" text-2xl font-bold"></IoNotifications>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* navbar for lg device */}
      <div className=" lg:flex hidden pt-[78px]">
        <div className=" w-64 min-h-screen shadow-md bg-[#ff9c1c] text-black font-mono font-bold text-xl flex flex-col items-center border-2 pb-5">
          <div className=" flex flex-col items-center mb-2 mt-5">
            <img
              className=" w-28 h-28 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <h2 className=" text-2xl mt-2 font-bold font-alfa">
              {user?.displayName}
            </h2>
            <p className=" text-xs ">{user?.email}</p>
          </div>
          <ul className="menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/Dashboard/adminhome">
                    <FaHouse></FaHouse>
                    Admin home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/addplace">
                    <FaLocationDot></FaLocationDot>
                    Add place
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/Dashboard/addbus">
                  <IoMdBus />
                    Add Bus
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/Dashboard/addhotel">
                    <FaHotel></FaHotel>
                    Add hotel
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/manageplace">
                    <FaList></FaList>
                    ManagePlace
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/managehotel">
                    <FaEdit></FaEdit>
                    ManageHotel
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/users">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/Dashboard/userhome">
                    <FaHouseMedical></FaHouseMedical>
                    User home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/choicelist">
                    <FaList></FaList>
                    My Choice List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/payhistory">
                    <MdPayment></MdPayment>
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/addreview">
                    <MdReviews></MdReviews>
                    Add Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Dashboard/writeBlog">
                    <FaBlogger></FaBlogger>
                    Write Blog
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHouseMedical></FaHouseMedical>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allplace">
                <FaLocationDot></FaLocationDot>
                All places
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotel">
                <FaHotel></FaHotel>
                All Hotel
              </NavLink>
            </li>
          </ul>
        </div>
        {/* outlet for lg device */}
        <div className=" flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      {/* outlet part for small device */}
      <div className=" flex lg:hidden">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
