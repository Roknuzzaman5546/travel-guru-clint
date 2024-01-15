import { useContext } from "react";
import useHotel from "../../Hooks/useHotel";
import { Authcontext } from "../../Authprovider/Authprovider";

const Managehotel = () => {
    const [hotel] = useHotel();
    const { user } = useContext(Authcontext)
    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" my-7 text-4xl font-bold font-mono ">Hey <span className=" text-purple-600">{user.displayName}</span> Please update & delete Hotel</h2>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    hotel.map(item => <div key={item._id}>
                        <div className="flex justify-center gap-2 bg-base-100 shadow-xl rounded-xl mb-5">
                            <img className=" rounded-lg w-2/3 h-60" src={item.imageUrl} alt="Album" />
                            <div className=" w-full flex flex-col justify-center gap-2">
                                <h2 className=" text-2xl font-bold font-sans">{item.hotelName}</h2>
                                <p className=" text-xl font-bold font-mono">{item.title}</p>
                                <p className=" text-xl font-bold font-mono">Cost:{item.bookingCost}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning btn-outline mb-2 ">Delete</button>
                                    <button className="btn btn-warning btn-outline mb-2 mr-2">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Managehotel;