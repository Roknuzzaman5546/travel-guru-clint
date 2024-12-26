import { useForm } from "react-hook-form";
import { FaLocationArrow } from "react-icons/fa";
import Swal from "sweetalert2";
import UseaxiosPublic from "../../Hooks/UseaxiosPublic";

const AddBus = () => {
    const axiosPublic = UseaxiosPublic();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        axiosPublic.post('/place', data)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    Swal.fire(`${data.name} is added surely`)
                }
            })
        reset();
    }

    return (
        <div className="md:max-w-screen-2xl w-[95%] mx-auto">
            <h2 className=" text-4xl text-center font-bold font-mono my-5">Add your new Bus</h2>
            <div className=" bg-[#eae8e8] px-8 py-10 rounded space-y-2 text-black">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl font-mono">Bus name?</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("name", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                    </div>
                    <div className=" flex items-center gap-6 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Bus image Url?</span>
                            </label>
                            <input type="text" placeholder="Image url" {...register("img", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Booking cost*</span>
                            </label>
                            <input type="text" {...register("cost", { required: true })} placeholder="Type here" className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                    </div>
                    <label className="label mt-4">
                        <span className="text-xl font-mono">Route</span>
                    </label>
                    <textarea {...register("details")} className="py-2 px-2 rounded-md text-xl font-mono w-full" placeholder="Details"></textarea>

                    <div className=" flex items-center gap-6 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Start Time</span>
                            </label>
                            <input type="text" placeholder="Image url" {...register("start-time", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Ending Time</span>
                            </label>
                            <input type="text" {...register("cost", { required: true })} placeholder="end-time" className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                    </div>

                    <div className=" flex items-center gap-6 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Couche</span>
                            </label>
                            <input type="text" placeholder="Image url" {...register("couche", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Title</span>
                            </label>
                            <input type="text" {...register("cost", { required: true })} placeholder="title" className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                    </div>

                    <div className=" flex flex-row-reverse items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Title?</span>
                            </label>
                            <input type="text" placeholder="Type title" {...register("title", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono">Rating*</span>
                            </label>
                            <input type="text" {...register("rating", { required: true })} placeholder="Type here" className="py-2 px-2 rounded-md text-xl font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <button className="bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono mt-3 flex justify-between gap-2 items-center">
                        Add items <FaLocationArrow className="text-xl"></FaLocationArrow>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBus;