import { Link } from "react-router-dom";
import './booking.css'
import useChoicelist from "../../Hooks/useChoicelist";


const Choicelist = () => {
    const [choice] = useChoicelist();

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center text-violet-600 text-5xl font-bold font-mono mb-10 mt-5">Your all add coices is here</h2>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    choice.map(item => <div key={item._id}>
                        <div className="flex justify-center gap-2 bg-base-100 shadow-xl rounded-xl mb-5">
                            <div className="rounded-lg overflows w-full">
                                <img className="rounded-lg w-full h-60 background-image" src={item.img} alt="Album" />
                            </div>
                            <div className=" w-full flex flex-col justify-between">
                                <h2 className=" text-2xl font-bold font-sans mt-2">{item.name}</h2>
                                <p className=" text-xl font-bold font-mono">{item.title}</p>
                                <p className=" text-xl font-bold font-mono">You:{item.userName}</p>
                                <p className=" text-xl font-bold font-mono">Email:{item.email}</p>
                                <p className=" text-xl font-bold font-mono">Cost:{item.cost}</p>
                                <div className="card-actions justify-end mb-2 mr-1">
                                    <button className="btn btn-warning btn-outline mb-2 ">Canchel</button>
                                    <Link to={`/dashbord/payment/${item._id}`}><button className="btn btn-warning btn-outline mb-2 mr-2 text-black">Book confirm</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Choicelist;