import { Link, useLocation, useNavigate } from "react-router-dom";
import google from '../../assets/images/icons/google.png'
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";

const Register = () => {
    const { userRegister, profile, usergoogleLogin } = useContext(AuthContext)
    const axiosPublic = UseaxiosPublic();
    const currentLocation = useLocation();
    const destinedLocation = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password, name, photo)
        userRegister(email, password)
            .then(result => {
                console.log(result.user)
                profile(name, photo)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            image: photo,
                            email: email,
                            role: "user"
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data)
                                Swal.fire("User succesfully creat and update profile!");
                                destinedLocation(currentLocation?.state ? currentLocation.state.from.pathname : "/");
                            })
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
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
                console.log(userInfo);
                destinedLocation(currentLocation?.state ? currentLocation.state.from.pathname : "/");
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire("User succesfully creat and update profile!");
                        destinedLocation(currentLocation?.state ? currentLocation.state.from.pathname : "/");
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
                    <h2 className=" text-2xl font-bold my-4">Create an account</h2>
                    <form onSubmit={handleRegister}>
                        <input placeholder="Your name" className=" w-[90%] mx-auto rounded p-2 border-b-2 " type="text" name="name" id="" />
                        <br />
                        <input placeholder="Photo url" className=" w-[90%] mx-auto rounded p-2 border-b-2 mt-3 " type="text" name="photo" id="" />
                        <br />
                        <input placeholder="Username or email" className=" w-[90%] mx-auto rounded p-2 border-b-2 mt-3 " type="email" name="email" id="" />
                        <br />
                        <input placeholder="Password" className=" w-[90%] mx-auto rounded p-2 border-b-2 mt-3" type="password" name="password" id="" />
                        <br />
                        <input className="btn btn-warning w-11/12 my-4 mx-auto" type="submit" value="Creat an account" />
                        <p className=" text-center">Already have an account? <span className=" text-yellow-500 font-bold"><Link to="/login">Login</Link></span></p>
                    </form>
                </div>
            </div>
            <div className=" w-1/3 mx-auto my-7">
                <div className="divider divider-neutral">OR</div>
            </div>

            {/* <div className="flex items-center justify-evenly w-1/4 mx-auto border-2 rounded-full mt-5 py-2">
                <img loading="lazy" className="w-8 h-8" src={facebook} alt="" />
                <h2 className="font-bold">Log in with facebook</h2>
            </div> */}

            <div className="flex items-center justify-evenly w-1/4 mx-auto border-2 rounded-full my-4 py-2 cursor-pointer mb-28 btn" onClick={handleGoogleLogin}>
                <img loading="lazy" className="w-8 h-8" src={google} alt="" />
                <h2 className="font-bold">Log in with Google</h2>
            </div>
        </div>
    );
};

export default Register;