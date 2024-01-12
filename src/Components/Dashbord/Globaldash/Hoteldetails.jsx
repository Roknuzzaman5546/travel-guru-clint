
const Hoteldetails = ({ item }) => {
    const { imageUrl, hotelName, bookingCost } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-60 w-full" src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {hotelName}</h2>
                    <p>Booking cost: {bookingCost} $</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hoteldetails;