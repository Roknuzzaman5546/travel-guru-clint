

const Destination = () => {
    return (
        <div className='bgimg '>
            <div className=" flex lg:flex-row flex-col justify-between items-center lg:pt-40 pb-28 bg-[#000000B2]">
                <div className=" md:w-1/3 w-full mx-auto">
                    <h2 className="text-6xl font-bold text-white font-serif">Coxs bazar</h2>
                    <p className=" text-white mt-2 md:text-left text-center">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
                <div className=' md:w-1/3 w-full mx-auto'>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Origin</span>
                                </label>
                                <input type="email" placeholder="Origin" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Destination</span>
                                </label>
                                <input type="password" placeholder="Destination" className="input input-bordered" required />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">From</span>
                                    </label>
                                    <input type="password" placeholder="Destination" className="input input-bordered w-full" required />
                                </div>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input type="password" placeholder="Destination" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Start booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;