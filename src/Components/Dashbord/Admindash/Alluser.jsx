import { FaTrash, FaUsers } from "react-icons/fa";
import useUser from "../../Hooks/useUser";
import Swal from "sweetalert2";
import UseAxiospublic from "../../Hooks/useaxiospublic";

const Alluser = () => {
    const [users, refetch] = useUser();
    const axiospublic = UseAxiospublic();


    const handleMakeadmin = item => {
        console.log('admin related', item)
            .patch(`/users/admin/${item._id}`)
            .then(res => {
                console.log(res.data)
                refetch();
                Swal.fire({
                    title: "Updated!",
                    text: `${item._id} is Admin updated`,
                    icon: "success"
                });
            })
    }


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
        <div className=" md:max-w-screen-2xl w-11/12 mx-auto mt-10">
            <div className=" flex justify-evenly my-2">
                <h2 className=" text-3xl font-bold">All users</h2>
                <h2 className=" text-3xl font-bold">Total users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=" w-full">
                            {
                                users.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td><div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.role === 'admin' ? "Admin" : <button onClick={() => handleMakeadmin(item)} className="btn btn-square text-red-500 text-xl">
                                            <FaUsers></FaUsers>
                                        </button>}
                                    </td>
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
    );
};

export default Alluser;