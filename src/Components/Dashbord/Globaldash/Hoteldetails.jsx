import { Link } from "react-router-dom";

const Hoteldetails = ({ item }) => {
    const { imageUrl, hotelName, bookingCost, _id } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-60 w-full" src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {hotelName}</h2>
                    <p>Booking cost: {bookingCost} $</p>
                    <div className="card-actions justify-end">
                        <Link to={`/hotel/${_id}`}><button className="btn btn-warning">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoteldetails;