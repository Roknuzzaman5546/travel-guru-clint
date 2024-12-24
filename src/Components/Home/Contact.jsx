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
            <div className=" flex md:flex-row flex-col justify-around items-center gap-5">
                <div className=" md:w-1/2 w-[11/12]">
                    <p className=" text-6xl font-bold font-mono">Contact <span className="text-[#ff9c1c]">Us</span></p>
                    <h2 className=" text-4xl font-extrabold my-4">How Can We Help You?</h2>
                    <p className=" leading-10 text-gray-500 mb-7 text-left text-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur a eius ea similique quod dicta ipsa vel quidem repellendus, beatae nulla veniam, quaerat veritatis architecto. Aliquid doloremque nesciunt nobis, debitis, quas veniam dolore culpa corrupti maxime cum similique.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur a eius ea similique quod dicta ipsa vel quidem repellendus, beatae nulla veniam, quaerat veritatis architecto. 
                    </p>
                    <div className=" flex items-center gap-5 text-xl">
                        <a target="blank" href="https://www.facebook.com/roknujjamansajib" className=" bg-[#ff9c1c]  rounded-full text-[#000] text-xl p-2"><FaFacebook></FaFacebook></a>
                        <a target="blank" href="https://twitter.com/Roknuzzaman5546" className="bg-[#ff9c1c] text-xl  rounded-full text-[#000] p-2"><FaTwitter></FaTwitter></a>
                        <a target="blank" href="https://www.instagram.com/roknujjamansajib/" className="bg-[#ff9c1c]  rounded-full text-[#000] text-xl p-2"><FaInstagram></FaInstagram></a>
                        <a target="blank" href="https://www.linkedin.com/in/roknuzzaman-sojib-b794552a3/" className="bg-[#ff9c1c]  rounded-full text-[#000] text-xl p-2"><FaLinkedin></FaLinkedin></a>
                    </div>
                </div>
                <div className=" md:w-1/2 w-11/12">
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
                            <p className=" text-xl">I agree to the <Link to="/condition"><span className=" text-orange-600">terms & conditions</span></Link> and <Link to="condition"><span className="text-orange-600">privacy policy</span></Link></p>
                        </div>
                        <button className="text-xl mt-2 w-28 h-12 font-semibold bg-[#ff9c1c] text-black relative overflow-hidden group z-10 hover:text-[#ff9c1c] duration-1000"><span className="absolute bg-[#46433f] size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-black size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;