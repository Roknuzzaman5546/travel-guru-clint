import { Link } from "react-router-dom";
import facebook from '../../assets/images/icons/fb.png'
import google from '../../assets/images/icons/google.png'

const Regoser = () => {

    return (
        <div className="pt-36">
            <div className="w-1/3 mx-auto border-2 py-8 px-5 rounded-md">
                <div className=" w-10/12 mx-auto">
                    <h2 className=" text-2xl font-bold my-4">Create an account</h2>
                    <form>
                        <input placeholder="First name" className=" w-80 rounded p-2 border-b-2 " type="text" name="" id="" />
                        <br />
                        <input placeholder="Last name" className=" w-80 rounded p-2 border-b-2 mt-3 " type="text" name="" id="" />
                        <br />
                        <input placeholder="Username or email" className=" w-80 rounded p-2 border-b-2 mt-3 " type="email" name="" id="" />
                        <br />
                        <input placeholder="Password" className=" w-80 rounded p-2 border-b-2 mt-3" type="password" name="" id="" />
                        <br />
                        <input className="btn btn-warning w-11/12 my-4 mx-auto" type="submit" value="Creat an account" />
                        <p className=" text-center">Already have an account? <span className=" text-yellow-500 font-bold"><Link to="/login">Login</Link></span></p>
                    </form>
                </div>
            </div>
            <div className=" w-1/3 mx-auto my-10">
                <div className="divider divider-neutral">OR</div>
            </div>
            <div className="flex items-center justify-evenly w-1/4 mx-auto border-2 rounded-full mt-5 py-2">
                <img className="w-8 h-8" src={facebook} alt="" />
                <h2 className="font-bold">Log in with facebook</h2>
            </div>
            <div className="flex items-center justify-evenly w-1/4 mx-auto border-2 rounded-full my-4 py-2">
                <img className="w-8 h-8" src={google} alt="" />
                <h2 className="font-bold">Log in with Google</h2>
            </div>
        </div>
    );
};

export default Regoser;