import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";


const Destination = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseaxiosPublic();

    const handledestination = e => {
        e.preventDefault();
        const from = e.target;
        const origin = from.origin.value;
        const destination = from.destination.value;
        const cost = from.cost.value;
        const Destination = {
            name: destination,
            title: origin,
            img: user.photoURL,
            cost: cost,
            email: user.email,
            userName: user.displayName,
            userphoto: user.photoURL
        }
        console.log(Destination)
        axiosPublic.post('/choicelist', Destination)
            .then(res => {
                console.log(res.data)
                Swal.fire("Destination has added to Choicelist")
            })
    }

    return (
        <div className='bgimg bg-fixed'>
            <div className="bg-[#000000B2]">
                <div className=" md:max-w-screen-2xl w-11/12 mx-auto flex lg:flex-row flex-col justify-between items-center lg:pt-40 pb-28">
                    <div className=" md:w-1/3 w-full mx-auto">
                        <h2 className="text-6xl font-bold text-white font-serif">Coxs bazar</h2>
                        <p className=" text-white mt-2 md:text-left text-center">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </div>
                    <div className=' md:w-1/3 w-full mx-auto'>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handledestination}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" placeholder="Origin" defaultValue="Dhaka" className="input input-bordered" name="origin" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" name="destination" placeholder="Destination" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Ammount</span>
                                    </label>
                                    <input type="text" name="cost" placeholder="Cost" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" id="" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Start booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;