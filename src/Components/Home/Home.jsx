import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Hotel from "./Hotel";
import Place from "./Place";
    
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Place></Place>
            <Hotel></Hotel>
            <Contact></Contact>
            <Footer> </Footer>
        </div>
    );
};

export default Home;