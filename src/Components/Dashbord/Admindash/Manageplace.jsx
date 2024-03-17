import { useContext } from "react";
import usePlace from "../../Hooks/Useplace";
import { Authcontext } from "../../Authprovider/Authprovider";
import UseAxiospublic from "../../Hooks/useaxiospublic";
import Swal from "sweetalert2";

const Manageplace = () => {
    const [place, refetch] = usePlace();
    const { user } = useContext(Authcontext)
    const axiospublic = UseAxiospublic();


    const handlePlaceDelete = (id) => {
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
                axiospublic.delete(`/place/${id}`)
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

    const handlePlaceUpdate = () => {

    }

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className=" my-7 text-4xl font-bold font-mono ">Hey <span className=" text-purple-600">{user.displayName}</span> Please update & delete Hotel</h2>
            <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    place.map(item => <div key={item._id}>
                        <div className="flex justify-center gap-2 bg-base-100 shadow-xl rounded-xl mb-5">
                            <img className=" rounded-lg w-2/3 h-60" src={item.img} alt="Album" />
                            <div className=" w-full flex flex-col justify-center gap-2">
                                <h2 className=" text-2xl font-bold font-sans">{item.name}</h2>
                                <p className=" text-xl font-bold font-mono">{item.title}</p>
                                <p className=" text-xl font-bold font-mono">Cost:{item.cost}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-warning btn-outline mb-2" onClick={() => handlePlaceDelete(item._id)}>Delete</button>
                                    <button className="btn btn-warning btn-outline mb-2 mr-2" onClick={() => handlePlaceUpdate(item._id)}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manageplace;