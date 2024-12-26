import LazyLoad from "react-lazyload";
import aboutIMg from "../../assets/images/aboutUs.jpg"
import About from "../Home/About";
import ReviewHome from "../Home/Review";

const AboutUs = () => {
    return (
        <div>
            {/* header part */}
            <div className=" mt-12 ml-10 mb-16">
                <h2 className=" text-3xl font-bold font-serif mb-3">Travel guru</h2>
                <p className=" text-xl font-thin">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
            </div>
            <div className=" ml-20">
                <LazyLoad>
                <img  className="h-[700px] w-full" src={aboutIMg} alt="" />
                </LazyLoad>
            </div>
            <div>
                <About></About>
            </div>
            <div className=" mt-10">
                <ReviewHome></ReviewHome>
            </div>
        </div>
    );
};

export default AboutUs;