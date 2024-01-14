import useDestination from "../../Hooks/useDestination";

const Userdestinationbooking = () => {
    const [destination] = useDestination();

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center text-violet-600 text-4xl font-bold font-mono mb-10 mt-5">Your all selected destination is here</h2>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    destination.map(item => <div key={item._id}>
                        <div className="flex justify-center gap-2 bg-base-100 shadow-xl rounded-xl mb-5">
                            <img className=" rounded-lg w-2/3 h-60" src={item.photo} alt="Album" />
                            <div className=" w-full flex flex-col justify-between">
                                <h2 className=" text-2xl font-bold font-sans">From:{item.origin}</h2>
                                <p className=" text-xl font-bold font-mono">Destination:{item.destination}</p>
                                <p className=" text-xl font-bold font-mono">You:{item.name}</p>
                                <p className=" text-xl font-bold font-mono">Email:{item.email}</p>
                                <div className=" flex items-center">
                                    <p className=" text-xl font-bold font-mono">From D:{item.fromdate}</p>
                                    <p className=" text-xl font-bold font-mono">To D:{item.todate}</p>
                                </div>
                                <div className="card-actions justify-end mt-2">
                                    <button className="btn btn-warning btn-outline mb-2 ">Canchel</button>
                                    <button className="btn btn-warning btn-outline mb-2 mr-2">Book confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Userdestinationbooking;