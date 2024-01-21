import { FaStar } from "react-icons/fa";
import useReview from "../Hooks/useReview";

const ReviewHome = () => {
    const [reviews] = useReview();
    console.log(reviews)

    return (
        <div className=" md:max-w-screen-2xl w-11/12 mx-auto my-16">
            <h2 className=" text-5xl font-bold font-mono text-center">Our Most popular Review</h2>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                {
                    reviews?.map((item, index) => <div key={index}>
                        <div className="">
                            <div className=" flex flex-col items-center justify-center">
                                <img className="h-48 w-48 rounded-full" src={item.img} alt="Shoes" />
                            </div>
                            <div className="p-8 mt-10 bg-base-200 md:h-[250px] h-[260px] rounded">
                                <p className=" space-y-2 mt-2">{item.details}</p>
                                <div className=" flex justify-between items-center mt-4">
                                    <h2 className=" text-3xl font-bold">{item.name}</h2>
                                    <div className=" flex items-center gap-2 font-bold">
                                        <p><FaStar className=" text-yellow-400"></FaStar></p>
                                        <p className="text-black text-xl">{item.rating}</p>
                                    </div>
                                </div>
                                <h3 className=" text-3xl font-bold font-mono mt-3">Like: {item.services}</h3>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ReviewHome;