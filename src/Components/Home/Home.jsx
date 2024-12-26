import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Offer from "./Extra/Offer";
import Hotel from "./Hotel";
import Place from "./Place";
import Tourguru from "./Tourguru";
import { useEffect } from 'react';
import { debounce } from 'lodash';

const Home = () => {
    useEffect(() => {
        const handleScroll = debounce(() => {
          console.log('Scrolled!');
        }, 200);
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
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