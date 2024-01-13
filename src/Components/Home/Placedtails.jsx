import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Placedtails = () => {
    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);
    const places = useLoaderData();
    const { id } = useParams();
    const place = places.find(item => item._id === id)

    return (
        <div className=" w-10/12 mx-auto">
            <div data-aos="zoom-in" className=" mb-10 mt-5">
                <h1 className="text-4xl border-2 border-b-slate-400 border-t-slate-400 py-5 w-1/2 mx-auto text-center font-Chinzel uppercase font-bold font-rancho">{place.name}</h1>
                <h1 className=" text-center text-yellow-500 text-xl">---This place is details here---</h1>
            </div>
            <div>
                <img className=" w-9/12 mx-auto h-96" src={place.img} alt="" />
                <div>
                    <div className=" flex justify-between items-center mt-4">
                        <h2 className=" text-3xl font-bold font-serif">{place.name}</h2>
                        <h2 className=" font-bold text-2xl font-serif  my-2">{place.title}</h2>
                    </div>
                    <div className=" flex justify-between items-center mt-1">
                        <h2 className=" text-3xl font-bold font-serif"><span className=" font-bold">Cost:</span> {place.cost} $</h2>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={place.rating}
                            readOnly
                        />
                    </div>
                    <p className="font-serif text-xl mt-2"><span className=" text-xl font-bold font-serif">Details:</span> {place.details}</p>
                    <div className=" flex justify-between items-center mt-2 mb-5">
                        <Link to='/dashbord/allplace'><button className=" btn btn-warning font-bold font-mono text-xl">View all place</button></Link>
                        <Link><button className=" btn btn-warning font-bold font-mono text-xl">Book now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placedtails;