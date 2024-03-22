import { useForm } from "react-hook-form";
import { FaHotel, } from "react-icons/fa";
import Swal from "sweetalert2";
import UseaxiosPublic from "../../Hooks/UseAxiospublic";

const Addhotel = () => {
    const axiosPublic = UseaxiosPublic();

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        axiosPublic.post('/hotel', data)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    Swal.fire(`${data.hotelName} is Added successfully`)
                }
            })
        reset();
    }

    return (
        <div className="md:max-w-screen-2xl w-11/12 mx-auto">
            <h2 className=" text-4xl text-center font-bold font-mono my-7">Add your new Hotel</h2>
            <div className=" bg-[#eae8e8] px-8 py-10 rounded space-y-2 text-black">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-xl font-mono font-bold">Hotel name?</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("hotelName", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Hotel image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <label className="label mt-4">
                        <span className="text-xl font-mono font-bold">Details*</span>
                    </label>
                    <textarea {...register("details")} className="textarea textarea-bordered w-full" placeholder="Details"></textarea>
                    <div className=" flex flex-row-reverse items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Title?</span>
                            </label>
                            <input type="text" placeholder="Type title" {...register("title", { required: true })} className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono font-bold">Rating*</span>
                            </label>
                            <input type="text" {...register("rating", { required: true })} placeholder="Type here" className="py-5 px-2 rounded-md text-xl font-bold font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <button className="bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono mt-3">
                        Add items <FaHotel className="text-xl"></FaHotel>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addhotel;