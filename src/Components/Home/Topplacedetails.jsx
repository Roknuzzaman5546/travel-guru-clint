/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import '../Dashbord/Globaldash/hotel.css'

const Topplacedetails = ({ item }) => {
    const { img, name, cost, _id } = item;
    return (
        <div>
            <div className="placeCard">
                <div className="icon">
                    <img loading="lazy" className="md:h-64 h-60 w-full" src={img} alt="" />
                </div>
                <p className="title">{name}</p>
                <div className="text flex items-center justify-between">
                    <p className=" text-xl font-bold font-mono">Cost:{cost}$ </p>
                    <Link to={`/place/${_id}`}>
                        <button className=" rounded px-6 py-2 bg-[#ff9c1c] hover:bg-[#000] text-white">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topplacedetails;