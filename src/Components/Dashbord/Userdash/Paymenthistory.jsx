import { FaTrash } from "react-icons/fa6";
import usePayments from "../../Hooks/usePayments";
import UseAxiospublic from "../../Hooks/useaxiospublic";
import Swal from "sweetalert2";

const Paymenthistory = () => {
    const [payments, refetch] = usePayments();
    const axiospublic = UseAxiospublic();
    console.log(payments)


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiospublic.delete(`/users/${id}`)
                    .then(res => {
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
        });
    }

    return (
        <div>
            <div className=" md:max-w-screen-2xl w-11/12 mx-auto mt-10">
                <div className=" flex justify-evenly mt-2 mb-10">
                    <h2 className=" text-3xl font-bold">All payment History</h2>
                    <h2 className=" text-3xl font-bold">My history: {payments.length}</h2>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className=" bg-slate-300 p-7 rounded-lg font-bold text-xl">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Transiction Id</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className=" w-full font-bold">
                                {
                                    payments.map((item, index) => <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.price}</td>
                                        <td>{item.date}</td>
                                        <td>{item.transictionid}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-square text-red-500">
                                                <FaTrash></FaTrash>
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paymenthistory;