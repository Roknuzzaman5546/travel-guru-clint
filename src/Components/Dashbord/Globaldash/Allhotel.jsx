import useHotel from "../../Hooks/useHotel";
import Hoteldetails from "./Hoteldetails";

const Allhotel = () => {
    const [hotel] = useHotel();
    return (
        <div className=" lg:max-w-screen-2xl w-11/12  mx-auto">
            <h2 className=" text-4xl font-bold font-mono text-center mt-4 mb-10">ALl hotels</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    hotel.map(item => <Hoteldetails key={item._id} item={item}></Hoteldetails>)
                }
            </div>
        </div>
    );
};

export default Allhotel;