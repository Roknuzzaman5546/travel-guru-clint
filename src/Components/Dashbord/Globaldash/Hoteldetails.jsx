import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import Btnyellow from "../../Shared/Btnyellow";
import './hotel.css'


const Hoteldetails = ({ item }) => {

    const { imageUrl, hotelName, bookingCost, _id, rating } = item;

    return (
        <div>
            <div className="card  card-compact bg-base-100 shadow-xl">
                <figure><img className="md:h-72 h-60 w-full background-image" src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-bold font-mono line-clamp-1">{hotelName}</h2>
                    <p className=" text-xl font-bold">Cose: {bookingCost} $</p>
                    <div className="flex justify-between items-center">
                        <h2>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </h2>
                        <Link to={`/hotel/${_id}`}><Btnyellow
                        titleRed={"Details"}
                        ></Btnyellow></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoteldetails;