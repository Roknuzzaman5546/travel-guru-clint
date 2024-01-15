import { useForm } from "react-hook-form";
import { FaHotel, } from "react-icons/fa";
import UseAxiospublic from "../../Hooks/useaxiospublic";
import Swal from "sweetalert2";

const Addhotel = () => {
    const axiospublic = UseAxiospublic();

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        axiospublic.post('/hotel', data)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    Swal.fire(`${data.hotelName} is Added successfully`)
                }
            })
        reset();
    }

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-4xl text-center font-bold font-mono my-7">Add your new place</h2>
            <div className=" bg-[#8e9eab] px-8 py-10 rounded space-y-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Hotel name?</span>
                        </label>
                        <input type="text" placeholder="Type here" {...register("hotelName", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className=" flex items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Hotel image Url?</span>
                            </label>
                            <input type="text" placeholder="imageUrl" {...register("imageUrl", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Booking cost*</span>
                            </label>
                            <input type="text" {...register("bookingCost", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <label className="label mt-4">
                        <span className="label-text">Details*</span>
                    </label>
                    <textarea {...register("details")} className="textarea textarea-bordered w-full" placeholder="Details"></textarea>
                    <div className=" flex flex-row-reverse items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title?</span>
                            </label>
                            <input type="text" placeholder="Type title" {...register("title", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating*</span>
                            </label>
                            <input type="text" {...register("rating", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <button className="btn mt-5 font-bold btn-neutral text-center">
                        Add items <FaHotel className="text-xl"></FaHotel>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addhotel;