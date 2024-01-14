import useHotelbook from "../../Hooks/useHotelbook";

const Userhotelbooking = () => {
    const [hotelbook] = useHotelbook();
    return (
        <div>
            <div>
                {
                    hotelbook.map(item => <div key={item._id}>
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img src={item.img} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.title}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning btn-outline\">Book confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Userhotelbooking;