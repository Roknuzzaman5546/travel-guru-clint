import { Link } from 'react-router-dom';
import aboutimg from '../../assets/images/about.jpg'
import about2img from '../../assets/images/about2.jpg'

const About = () => {
    return (
        <div className=' md:max-w-screen-2xl w-11/12 mx-auto my-24'>
            <h2 className=' text-5xl font-bold font-mono text-center text-black mb-10'>See about</h2>
            <div className=' flex lg:flex-row flex-col md:justify-around justify-between items-center md:gap-5 gap-32'>
                <div className=' lg:w-2/5 w-full relative'>
                    <img className=' rounded-lg md:w-full w-[80%] h-full' src={aboutimg} alt="" />
                    <img className=' rounded-md absolute lg:h-72 md:h-72 h-60 lg:w-96 md:w-96 w-60 lg:top-56 md:top-56 top-24 lg:left-[300px] md:left-[330px] left-60' src={about2img} alt="" />
                </div>
                <div className=' md:w-2/5 w-full space-y-4'>
                    <h2 className=' text-5xl font-bold font-mono'>Enjoy Our <br /> Place & Hotel For A Weekend Longer Stay</h2>
                    <p className=' text-xl'>Please <Link to="contact"><span className=' text-red-400 font-bold'>Contact</span></Link> us in our contact page</p>
                    <p>Founded on the principles of wanderlust and a love for exploration, [Your Website Name] is more than just a travel website; its a community of passionate globetrotters dedicated to curating exceptional travel experiences. From the moment you land on our site to the return home, we are committed to making every step of your journey seamless and unforgettable.Your adventure begins with a click, where our carefully designed user interface invites you to explore a world of possibilities. Navigate with ease, discover handpicked destinations, and immerse yourself in a treasure trove of travel inspiration that sparks the wanderer within you. At [Your Website Name], we understand that the journey begins the moment you engage with our platform, and we take pride in crafting an online experience as memorable as the destinations we showcase.</p>
                </div>
            </div>
        </div>
    );
};

export default About;