import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import UseaxiosPublic from "../../Hooks/UseAxiospublic";


const Review = () => {
    const { user } = useContext(AuthContext)
    const [rating, setRating] = useState(0)
    const axiosPublic = UseaxiosPublic();

    const handleReview = e => {
        e.preventDefault();
        const from = e.target;
        const services = from.services.value;
        const suggestion = from.suggestion.value;
        const details = from.details.value;
        const review = {
            services: services,
            suggestion: suggestion,
            details: details,
            rating: rating,
            name: user.displayName,
            img: user.photoURL,
            email: user.email
        }
        console.log(review)
        axiosPublic.post('/review', review)
            .then(res => {
                console.log(res.data)
                Swal.fire(`${user.displayName} your review succsesfullly added`)
            })
        
    }

    return (
        <div className=" w-[98%] mx-auto">
            {/* Review hading */}
            <div className=" text-center mt-7  mb-4">
                <h2 className=" text-4xl font-bold font-mono text-pink-500">GIVE A REVIEW...</h2>
                <p className=" text-yellow-500 text-xl font-mono font-bold mt-2">---Sharing is Caring!!!---</p>
            </div>
            {/* Review body */}
            <div className="bg-[rgb(234,232,232)] md:py-16 md:px-5 py-5 px-1 my-10 w-[90%] mx-auto rounded">
                {/* Rating */}
                <div className=" flex flex-col justify-center items-center gap-3">
                    <h2 className=" text-2xl font-bold font-mono text-center">Rate us</h2>
                    <h2 className=" w-40 text-center">
                        <Rating
                            value={rating}
                            onChange={setRating}
                            className=" text-xl"
                        >
                        </Rating>
                    </h2>
                </div>
                {/* body part */}
                <div className=" w-[90%] mx-auto mb-5">
                    <form onSubmit={handleReview}>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-xl font-mono font-bold">Which Services you liked most?</span>
                            </label>
                            <input type="text" name="services" placeholder="Service you liked most" className="py-5 px-2 rounded-md text-xl font-bold font-mono" required />
                        </div>
                        <div className="form-control my-4">
                            <label className="label">
                                <span className=" text-xl font-mono font-bold">Do you have any suggestion for us?</span>
                            </label>
                            <input type="text" name="suggestion" placeholder="Suggestion" className="py-5 px-2 rounded-md text-xl font-bold font-mono" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-xl font-mono font-bold">Kindly express your care in a short way</span>
                            </label>
                            <textarea name="details" className="textarea rounded-md text-xl font-bold font-mono h-40" placeholder="Please type 30 or less then word"></textarea>
                        </div>
                        <input type="submit" value="Submit Review" className="bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono mt-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;