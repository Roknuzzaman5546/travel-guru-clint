import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Offer from "./Extra/Offer";
import Hotel from "./Hotel";
import Place from "./Place";
import Tourguru from "./Tourguru";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Place></Place>
            <Hotel></Hotel>
            <Tourguru></Tourguru>
            {/* <ReviewHome></ReviewHome> */}
            <div className=" mt-20">
                <Offer></Offer>
            </div>
            <Contact></Contact>
            {/* <Footer> </Footer> */}
        </div>
    );
};

export default Home;