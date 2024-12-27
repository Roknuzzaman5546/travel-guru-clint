import { Link } from "react-router-dom";
// import './booking.css'
import useChoicelist from "../../Hooks/useChoicelist";
import Swal from "sweetalert2";
import UseaxiosPublic from "../../Hooks/UseAxiospublic";


const Choicelist = () => {
    const [choice, refetch] = useChoicelist();
    const axiosPublic = UseaxiosPublic()

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
                axiosPublic.delete(`/choice/${id}`)
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

    // console.log(choice.length > 0);

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" text-center text-violet-600 text-5xl font-bold font-mono mb-2 mt-5">Your all add coices is here</h2>
            <div className=" flex justify-between items-center mt-10 mb-7">
                <h2 className=" text-3xl font-bold font-mono text-[#ff9c1c]">Place, Hotel & Destination</h2>
            </div>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    choice.length > 0 ?
                        choice.map(item => <div key={item._id}>
                            <div className="h-64 flex justify-center gap-2 overflow-hidden bg-base-100 shadow-xl rounded-xl mb-5">
                                <img className="rounded-lg w-[50%] h-64" src={item.img} alt="Album" />
                                <div className=" w-full flex flex-col justify-center gap-[2px] scroll-my-3">
                                    <h2 className="text-2xl font-bold font-sans mt-2 col-span-1">{item.name}</h2>
                                    <p className="font-bold font-mono">{item.title}</p>
                                    <p className="font-bold font-mono col-span-1">You:{item.userName}</p>
                                    <p className="font-bold font-mono col-span-1">Email:{item.email}</p>
                                    <p className="font-bold font-mono">Cost:{item.cost} $</p>
                                    <div className="flex flex-col md:flex-row justify-start items-center gap-0 md:gap-2 mr-4 mt-2">
                                        <Link to={`/Dashboard/payment?cost=${item.cost}&name=${item?.name}&img=${item?.img}&choiceId=${item._id}`}><button className=" bg-[#ff9c1c] mb-4 hover:bg-[#000] text-white px-5 py-2.5 rounded-md  font-bold font-mono transition">Pay now</button></Link>
                                        <button className=" bg-[#ff9c1c] mb-4 hover:bg-[#000] text-white px-5 py-2.5 rounded-md  font-bold font-mono transition" onClick={() => handleDelete(item._id)} >Canchel</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        : <div className=" flex flex-col justify-center items-center">
                            <h2 className="text-center text-violet-400 text-3xl font-bold font-mono mt-5">No choice added yet</h2>
                            <h3 className=" text-center text-violet-400 text-lg my-3">Please choice your favorite place and hotel</h3>
                            <Link to={`/allplace`}>
                                <button className=" bg-[#ff9c1c] hover:bg-[#000] text-white px-3 py-2 rounded-md text-xl font-bold font-mono transition">Add your choice</button>
                            </Link>
                        </div> 
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