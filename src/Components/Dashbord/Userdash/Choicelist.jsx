import { Link } from "react-router-dom";
import './booking.css'
import useChoicelist from "../../Hooks/useChoicelist";
import Swal from "sweetalert2";
import UseAxiospublic from "../../Hooks/useaxiospublic";


const Choicelist = () => {
    const [choice, refetch] = useChoicelist();
    const axiospublic = UseAxiospublic()

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiospublic.delete(`/choice/${id}`)
                    .then((res) => {
                        refetch();
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center text-violet-600 text-5xl font-bold font-mono mb-2 mt-5">Your all add coices is here</h2>
            <div className=" flex justify-between items-center mt-10 mb-3">
                <h2 className=" text-3xl font-bold font-mono text-[#ff9c1c]">Place, Hotel & Destination</h2>
                <Link to={`/Dashboard/payment`}>
                    <button className=" bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono transition">Pay for Booking</button>
                </Link>
            </div>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    choice.map(item => <div key={item._id}>
                        <div className="flex justify-center gap-4 bg-base-100 shadow-xl rounded-xl mb-5">
                            <div className="rounded-lg overflows w-full">
                                <img className="rounded-lg w-full h-60 background-image" src={item.img} alt="Album" />
                            </div>
                            <div className=" w-full flex flex-col justify-between">
                                <h2 className=" text-2xl font-bold font-sans mt-2">{item.name}</h2>
                                <p className=" text-xl font-bold font-mono">{item.title}</p>
                                <p className=" text-xl font-bold font-mono">You:{item.userName}</p>
                                <p className=" text-xl font-bold font-mono">Email:{item.email}</p>
                                <p className=" text-xl font-bold font-mono">Cost:{item.cost} $</p>
                                <div className="card-actions justify-end mr-4" onClick={() => handleDelete(item._id)}>
                                    <button className=" bg-[#ff9c1c] mb-4 hover:bg-[#000] text-white px-5 py-3.5 rounded-md text-xl font-bold font-mono transition">Canchel</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* <div className=" items-center flex flex-col mb-8 mt-3">
                <Link to={`/Dashboard/payment`}>
                    <button className=" bg-[#ff9c1c] hover:bg-[#000] text-white px-6 py-4 rounded-md text-xl font-bold font-mono transition">Pay for Booking</button>
                </Link>
            </div> */}
        </div>
    );
};

export default Choicelist;