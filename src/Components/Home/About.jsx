import aboutimg from '../../assets/images/about.jpg'

const About = () => {
    return (
        <div className=' w-11/12 mx-auto my-10'>
            <h2 className=' text-5xl font-mono text-center text-black mb-5'>See about</h2>
            <div className=' flex lg:flex-row flex-col justify-around items-center gap-5'>
                <div className=' w-1/2'>
                    <img className=' rounded-lg' src={aboutimg} alt="" />
                </div>
                <div className='w-1/2'>
                    <p>Founded on the principles of wanderlust and a love for exploration, [Your Website Name] is more than just a travel website; its a community of passionate globetrotters dedicated to curating exceptional travel experiences. From the moment you land on our site to the return home, we are committed to making every step of your journey seamless and unforgettable.Your adventure begins with a click, where our carefully designed user interface invites you to explore a world of possibilities. Navigate with ease, discover handpicked destinations, and immerse yourself in a treasure trove of travel inspiration that sparks the wanderer within you. At [Your Website Name], we understand that the journey begins the moment you engage with our platform, and we take pride in crafting an online experience as memorable as the destinations we showcase.</p>
                </div>
            </div>
        </div>
    );
};

export default About;