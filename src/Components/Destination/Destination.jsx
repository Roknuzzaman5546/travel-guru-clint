import { useContext } from "react";
import { Authcontext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseAxiospublic from "../Hooks/useaxiospublic";


const Destination = () => {
    const { user } = useContext(Authcontext)
    const axiospublic = UseAxiospublic();

    const handledestination = e => {
        e.preventDefault();
        const from = e.target;
        const origin = from.origin.value;
        const destination = from.destination.value;
        const fromdate = from.fromdate.value;
        const Destination = {
            name: destination,
            title: origin,
            img: user.photoURL,
            cost: fromdate,
            email: user.email,
            userName: user.displayName,
            userphoto: user.photoURL
        }
        console.log(Destination)
        axiospublic.post('/choicelist', Destination)
            .then(res => {
                console.log(res.data)
                Swal.fire("Destination has added to Choicelist")
            })
    }

    return (
        <div className='bgimg bg-fixed'>
            <div className=" flex lg:flex-row flex-col justify-between items-center lg:pt-40 pb-28 bg-[#000000B2]">
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
                            <div className="flex justify-center items-center gap-2">
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input type="date" name="fromdate" id="" className="input input-bordered w-full" required />
                                </div>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="date" name="todate" id="" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Start booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;