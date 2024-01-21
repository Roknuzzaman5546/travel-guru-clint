import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Hotel from "./Hotel";
import Place from "./Place";
import ReviewHome from "./Review";
import Tourguru from "./Tourguru";
    
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Place></Place>
            <Hotel></Hotel>
            <Tourguru></Tourguru>
            <ReviewHome></ReviewHome>
            <Contact></Contact>
            <Footer> </Footer>
        </div>
    );
};

export default Home;