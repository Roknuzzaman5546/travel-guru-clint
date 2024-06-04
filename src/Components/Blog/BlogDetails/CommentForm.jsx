import { useContext } from "react";
import UseaxiosPublic from "../../Hooks/UseaxiosPublic";
import { AuthContext } from "../../Authprovider/Authprovider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CommentForm = ({ blog, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const axiosPublic = UseaxiosPublic();
    //condition of user needed to comment
    const onSubmit = (data) => {
        if (user) {
            const newComment = {
                name: user?.displayName,
                email: user?.email,
                img: user?.photoURL,
                subject: data.subject,
                message: data.message,
                blogId: blog._id,
                blogName: blog.title,
                date: new Date().toLocaleDateString("en-GB"),
            };
            console.log(newComment);
            axiosPublic.post("/comments", newComment).then((res) => {
                console.log(res.data);
                if (res.data) {
                    Swal.fire(
                        `Hey ${user?.displayName}! Your comment is successfully send`
                    );
                    reset();
                    refetch();
                }
            });
        } else {
            // this login will allow user to add booking for their desired property only if they are user.
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Looks like you're not logged in!",
                footer: `<a href='/login' className='font-bold underline'>Please Log In</a>`,
                showConfirmButton: false,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register("message", { required: true })}
                    className="textarea bg-[#F9F9F9] h-40 w-full mt-3 mb-4"
                    placeholder="Please enter your comment"
                    minLength={"10"}
                ></textarea>
                <div className=" my-4 flex justify-start items-center gap-3">
                    <input type="checkbox" className="checkbox" />
                    <p className=" text-xl text-gray-400">
                        Save my name,email,website address in this browser for the next time
                        I comment.
                    </p>
                </div>
                <input
                    type="submit"
                    value="Post a comment"
                    className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4"
                />
            </form>
        </>
    );
};

export default CommentForm;