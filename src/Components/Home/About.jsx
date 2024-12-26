import { Link } from 'react-router-dom';
import aboutimg from '../../assets/images/about.jpg'
import about2img from '../../assets/images/about2.jpg'
import LazyLoad from 'react-lazyload';

const About = () => {
    return (
        <div className=' md:max-w-screen-2xl w-11/12 mx-auto my-24'>
            <h2 className=' text-5xl font-bold font-mono text-center text-black mb-10'>See about</h2>
            <div className=' mx-auto flex flex-col lg:flex-row lg:justify-center xl:justify-between md:gap-[100px] gap-3 md:items-center'>
                <div className=' lg:w-2/5 w-full relative'>
                <LazyLoad>
                    <img  className=' lg:max-w-[400px] md:min-w-[600px] lg:min-w-[450px] xl:min-w-[604px] md:min-h-[430px] xl:min-h-[504px] rounded-[5px] z-10' src={aboutimg} alt="" />
                </LazyLoad>
                    <div className='absolute top-[250px] md:left-[0px] md:top-[50px] lg:left-[280px] lg:top-[250px] xl:left-[400px]  xl:top-[305px] min-w-[160px] lg:min-w-[200px] xl:min-w-[300px] min-h-[250px] hidden lg:flex'>
                        <LazyLoad>
                        <img  className='min-w-full min-h-full rounded-[5px]' src={about2img} alt="" />
                        </LazyLoad>
                    </div>
                </div>
                <div className=' lg:w-2/5 w-full space-y-4'>
                    <h2 className=' text-5xl font-bold font-mono'>Enjoy Our <br /> Place & Hotel For A Weekend Longer Stay</h2>
                    <p className=' text-xl'>Please <Link to="contact"><span className=' text-red-400 font-bold'>Contact</span></Link> us in our contact page</p>
                    <p>Founded on the principles of wanderlust and a love for exploration, [Your Website Name] is more than just a travel website; its a community of passionate globetrotters dedicated to curating exceptional travel experiences. From the moment you land on our site to the return home, we are committed to making every step of your journey seamless and unforgettable.Your adventure begins with a click, where our carefully designed user interface invites you to explore a world of possibilities. Navigate with ease, discover handpicked destinations, and immerse yourself in a treasure trove of travel inspiration that sparks the wanderer within you. At [Your Website Name], we understand that the journey begins the moment you engage with our platform, and we take pride in crafting an online experience as memorable as the destinations we showcase.</p>
                </div>
            </div>
        </div>
    );
};

export default About;