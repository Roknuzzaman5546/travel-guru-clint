import { Link, useLocation, useNavigate } from "react-router-dom";
import google from '../../assets/images/icons/google.png'
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";


const Login = () => {
    const { userLogin, usergoogleLogin } = useContext(AuthContext)
    const axiosPublic = UseaxiosPublic();
    const currentLocation = useLocation();
    const destinedLocation = useNavigate();
    const handlelogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log(email, password)
        userLogin(email, password)
            .then((res) => {
                console.log(res.user);
                destinedLocation(currentLocation?.state ? currentLocation.state.from.pathname : "/");
                // console.log(currentLocation.state.from.pathname);
                Swal.fire({
                    title: "Login successful!!!",
                    timer: 2000,
                    color: "#002172",
                    showConfirmButton: false,
                    icon: "success",
                });
            })
            .catch((err) => {
                console.log(err.message);
                Swal.fire({
                    title: err.code,
                    timer: 2000,
                    color: "#002172",
                    showConfirmButton: false,
                    icon: "error",
                });
            });
    }

    const handleGoogleLogin = () => {
        usergoogleLogin()
            .then((response) => {
                const userInfo = {
                    name: response.user.displayName,
                    image: response.user.photoURL,
                    email: response.user.email,
                    role: "user"
                }
                // console.log(userInfo);
                destinedLocation(currentLocation?.state ? currentLocation.state.from.pathname : "/");
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire("User succesfully creat and update profile!");
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="pt-24">
            <div className="w-1/3 mx-auto border-2 py-8 px-5 rounded-md">
                <div className=" w-10/12 mx-auto">
                    <h2 className=" text-2xl font-bold my-4">Login</h2>
                    <form onSubmit={handlelogin}>
                        <input placeholder="Username or email" className=" w-[90%] mx-auto rounded p-2 border-b-2 mt-3 " type="email" name="email" id="" />
                        <br />
                        <input placeholder="Password" className=" w-[90%] mx-auto rounded p-2 border-b-2 mt-3" type="password" name="password" id="" />
                        <div className=" flex justify-between items-center mt-2">
                            <div className="form-control">
                                <label className=" flex items-center gap-2">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link text-[#ff9c1c] link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <br />
                        <input className="btn btn-warning w-11/12 my-5 mx-auto" type="submit" value="Creat an account" />
                        <p className=" text-center">Already have an account? <span className=" text-yellow-500 font-bold"><Link to="/register">Register</Link></span></p>
                    </form>
                </div>
            </div>
            <div className=" w-1/3 mx-auto my-10">
                <div className="divider divider-neutral">OR</div>
            </div>
            {/* <div className="flex items-center justify-evenly w-1/4 mx-auto border-2 rounded-full mt-5 py-2">
                <img className="w-8 h-8" src={facebook} alt="" />
                <h2 className="font-bold">Log in with facebook</h2>
            </div> */}
            <div className="flex items-center justify-evenly w-1/4 mx-auto border-2 rounded-full my-4 py-2 cursor-pointer mb-28" onClick={handleGoogleLogin}>
                <img className="w-8 h-8" src={google} alt="" />
                <h2 className="font-bold">Log in with Google</h2>
            </div>
        </div>
    );
};

export default Login;