import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import Btnyellow from "../Shared/Btnyellow";
import '../Dashbord/Globaldash/hotel.css'

const Topplacedetails = ({ item }) => {
    const { img, name, cost, _id, rating } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="md:h-72 h-60 w-full background-image" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-bold font-mono">{name}</h2>
                    <p className=" text-xl font-bold font-mono">Cost: {cost} $</p>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-xs">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </h2>
                        <Link to={`/place/${_id}`}>
                            <Btnyellow
                            titleRed={'Details'}
                            ></Btnyellow>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topplacedetails;