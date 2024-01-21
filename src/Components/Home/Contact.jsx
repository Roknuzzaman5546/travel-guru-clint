// This page creat by kanika
// creat ful page and creat also responsive full page
import { Link, } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form"


const Contact = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className=" md:max-w-screen-2xl w-11/12 mx-auto mb-20 mt-28">
            <div className=" flex justify-around items-center gap-5">
                <div className=" w-1/2">
                    <p className=" text-red-500 text-6xl font-bold font-mono">Contact Us</p>
                    <h2 className=" text-4xl font-extrabold my-4">How Can We Help You?</h2>
                    <p className=" leading-10 text-gray-500 mb-7 text-left text-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur a eius ea similique quod dicta ipsa vel quidem repellendus, beatae nulla veniam, quaerat veritatis architecto. Aliquid doloremque nesciunt nobis, debitis, quas veniam dolore culpa corrupti maxime cum similique.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur a eius ea similique quod dicta ipsa vel quidem repellendus, beatae nulla veniam, quaerat veritatis architecto. 
                    </p>
                    <div className=" flex items-center gap-5 text-xl">
                        <a target="blank" href="https://www.facebook.com/roknujjamansajib" className=" bg-gray-200  rounded-full text-[#002172] text-xl p-2"><FaFacebook></FaFacebook></a>
                        <a target="blank" href="https://twitter.com/Roknuzzaman5546" className="bg-gray-200 text-xl  rounded-full text-[#002172] p-2"><FaTwitter></FaTwitter></a>
                        <a target="blank" href="https://www.instagram.com/roknujjamansajib/" className="bg-gray-200  rounded-full text-[#002172] text-xl p-2"><FaInstagram></FaInstagram></a>
                        <a target="blank" href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/" className="bg-gray-200  rounded-full text-[#002172] text-xl p-2"><FaLinkedin></FaLinkedin></a>
                    </div>
                </div>
                <div className=" w-1/2">
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div className=" flex items-center gap-4 my-4">
                            <input {...register("name")}
                                placeholder="Name*"
                                className=" w-full py-5 border-2 rounded-md px-2" />
                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("email", { required: true })}
                                placeholder="Email*"
                                className="py-5 border-2 rounded-md px-2 w-full" />
                            {/* errors will return when field validation fails  */}
                        </div>
                        <input {...register("subject", { required: true })}
                            placeholder="Subject*"
                            className="py-5 border-2 rounded-md px-2 w-full my-3" />
                        <textarea {...register("message", { required: true })} className="textarea textarea-bordered h-40 w-full mt-3 mb-4" placeholder="Your messages"></textarea>
                        <div className=" my-3 flex justify-start items-center gap-3">
                            <input type="checkbox" className="checkbox" />
                            <p className=" text-xl">I agree to the <Link to="/conditions"><span className=" text-orange-600">terms & conditions</span></Link> and <Link to="privacy"><span className="text-orange-600">privacy policy</span></Link></p>
                        </div>
                        <input type="submit" value="Send Message" className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#000] text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;