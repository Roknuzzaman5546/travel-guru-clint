import usePlacebook from "../../Hooks/usePlacebook";
import './booking.css'

const Userplacebooking = () => {

    const [placebook] = usePlacebook();

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center text-violet-600 text-4xl font-bold font-mono mb-10 mt-5">Your all place coices is here</h2>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    placebook.map(item => <div key={item._id}>
                        <div className="flex justify-center gap-2 bg-base-100 shadow-xl rounded-xl mb-5">
                            <div className="rounded-lg overflows w-full">
                                <img  className=" rounded-lg w-full h-60 background-image" src={item.img} alt="Album" />
                            </div>
                            <div className=" w-full flex flex-col justify-between">
                                <h2 className=" text-2xl font-bold font-sans mt">{item.name}</h2>
                                <p className=" text-xl font-bold font-mono">{item.title}</p>
                                <p className=" text-xl font-bold font-mono">You:{item.userName}</p>
                                <p className=" text-xl font-bold font-mono">Email:{item.email}</p>
                                <p className=" text-xl font-bold font-mono">Cost:{item.cost}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning btn-outline mb-2 ">Canchel</button>
                                    <button className="btn btn-warning btn-outline mb-3 mr-3">Book confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Userplacebooking;