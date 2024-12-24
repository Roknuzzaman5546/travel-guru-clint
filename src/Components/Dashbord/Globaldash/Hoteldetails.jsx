import { Link } from "react-router-dom";
import './hotel.css'


const Hoteldetails = ({ item }) => {
    const { imageUrl, hotelName, bookingCost, _id } = item;

    return (
        <div>
            {/* <div className="card  card-compact bg-base-100 shadow-xl">
                <figure><img loading="lazy" className="md:h-72 h-60 w-full background-image" src={imageUrl} alt="Shoes" /></figure>
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
            </div> */}
            <div className="placeCard overflow-hidden">
                <div className="icon">
                    <img loading="lazy" className="md:h-64 h-60 w-full" src={imageUrl} alt="" />
                </div>
                <p className="title">{hotelName}</p>
                <div className="text flex items-center justify-between">
                    <p className=" text-xl font-bold font-mono">Cost:{bookingCost}$ </p>
                    <Link to={`/hotel/${_id}`}>
                        <button className=" rounded px-6 py-2 bg-[#ff9c1c] hover:bg-[#000] text-white">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hoteldetails;