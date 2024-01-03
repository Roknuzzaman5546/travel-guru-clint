const Topplacedetails = ({ item }) => {

    const { img, name, cost } = item;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{cost}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topplacedetails;