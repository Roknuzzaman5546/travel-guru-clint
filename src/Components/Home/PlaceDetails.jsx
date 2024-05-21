import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import ReviewForm from "./ReviewHotelPlace/ReviewForm";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";
import Reviews from "./ReviewHotelPlace/Reviews";
import useReviews from "../Hooks/useReviews";

const PlaceDetails = () => {
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
    const [reviews] = useReviews();
    //to filter reviews
    const sameName = reviews.filter((name) => name.itemId === place?._id);

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
                        <Link to='/allplace'><button className=" btn bg-[#ff9c1c] font-bold font-mono text-xl">View all place</button></Link>
                        <button onClick={() => handleplacebook(place)} className=" btn bg-[#ff9c1c] font-bold font-mono text-xl">Add choice list</button>
                    </div>
                </div>
            </div>
            {/* Review section */}
            <div className=" flex md:flex-row flex-col justify-center items-start gap-7 mb-20">
                {/* Left site */}
                <div className=" md:w-[65%] w-full">
                    {/* blog details */}
                    <div>
                        <Reviews item={place}></Reviews>
                    </div>
                    {/* Comment section */}
                    <div>
                        <div className="items-center gap-8 px-5 my-7">
                            <h2 className=" text-3xl font-bold mt-2">
                                {sameName?.length} Review
                            </h2>
                            {/* Comment */}
                            {/* Form section */}
                            <div>
                                <h2 className=" text-3xl font-bold my-3">Leave A Review</h2>
                                {/* <p className=" text-xl text-gray-400">
                                    Your email address will not be published. Required fields are  marked</p> */}
                                {/* comment form */}
                                <ReviewForm item={place} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right site */}
                <div className=" border shadow-xl p-5 rounded md:w-[35%] w-full">
                    {/* Search bar part */}
                    <div>
                        <label className="font-bold text-lg mb-3">Search Place</label>
                        <form>
                            <div className=" bg-white px-2 rounded-md flex items-center my-3 mr-3">
                                <FaSearch className=" text-black absolute ml-2"></FaSearch>
                                <input className=" text-black bg-none pl-7 py-1 pr-2 rounded w-full border" placeholder="Search your destination....." type="text" name="" id="" />
                            </div>
                        </form>
                    </div>
                    {/* Recent blogs part */}
                    <div>
                        <h2 className=" text-xl font-bold my-3">Recent Place</h2>
                        {/* <div>
                            {
                                currentUserBlogs?.map((item) => (
                                    <div key={item._id} className=" flex items-center gap-2">
                                        <img className=" w-24 h-16 rounded-lg" src={item?.img} alt="" />
                                        <div>
                                            <h2 className=" font-bold">{item?.title}</h2>
                                            <h2 className=" text-slate-400">{item?.date}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;