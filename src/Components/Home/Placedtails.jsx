import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseaxiosPublic from "../Hooks/UseAxiospublic";

const Placedtails = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseaxiosPublic();
    useEffect(() => {
        Aos.init({
            duration: 700,
            offset: 200
        });
    }, []);
    const places = useLoaderData();
    const { id } = useParams();
    const place = places.find(item => item._id === id)

    const handleplacebook = (place) => {
        const placebook = {
            name: place.name,
            title: place.title,
            img: place.img,
            cost: place.cost,
            rating: place.rating,
            details: place.details,
            email: user.email,
            userName: user.displayName,
            userphoto: user.photoURL
        }
        axiosPublic.post('/choicelist', placebook)
            .then(res => {
                console.log(res.data)
                Swal.fire(`${place.name} is Choiced succesfully`)
            })
    }

    return (
        <div className=" w-10/12 mx-auto">
            {/* Header section */}
            <div data-aos="zoom-in" className=" mb-10 mt-10">
                <h1 className="text-4xl border-2 border-b-slate-400 border-t-slate-400 py-5 md:w-1/2 w-[80%] mx-auto text-center font-Chinzel uppercase font-bold font-rancho">{place.name}</h1>
                <h1 className=" text-center text-yellow-500 text-xl">---This place is details here---</h1>
            </div>
            {/* Details section */}
            <div className=" mb-20">
                <img className=" w-full md:w-9/12 mx-auto h-[350px] md:h-[480px] my-10" src={place.img} alt="" />
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
                    <div className=" flex md:flex-row flex-col-reverse md:gap-0 gap-3 justify-between items-center mt-2 mb-5">
                        <Link to='/allplace'><button className=" btn btn-warning font-bold font-mono text-xl">View all place</button></Link>
                        <button onClick={() => handleplacebook(place)} className=" btn btn-warning font-bold font-mono text-xl">Add choice list</button>
                    </div>
                </div>
            </div>
            {/* Review section */}
        </div>
    );
};

export default Placedtails;