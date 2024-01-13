import { Link } from "react-router-dom";

const Topplacedetails = ({ item }) => {
    const { img, name, cost, _id } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-60 w-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{cost} $</p>
                    <div className="card-actions justify-end">
                        <Link to={`/dashbord/place/${_id}`}><button className="btn btn-warning">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topplacedetails;