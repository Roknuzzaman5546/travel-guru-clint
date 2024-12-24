import { Link } from 'react-router-dom';
import offerimg from '../../../assets/images/sikim.jpg'
import './Offer.css'

const Offer = () => {
    return (
        <div className=' offerbg bg-fixed'>
            <div className=" bg-[#000000B2] px-10 pt-16 pb-28">
                <div className=' md:max-w-screen-2xl  w-11/12 mx-auto'>
                    <div className=' my-10'>
                        <h2 className=" text-white font-bold text-center text-5xl font-mono">Our spechal offer <span className=' text-3xl font-bold font-mono text-pink-600'>/ <Link to={`/hotel`}>View all offer</Link></span></h2>
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-10 ">
                        <img loading="lazy" className="md:w-1/2 w-[80%] rounded-md md:h-[470px] h-[400px]" src={offerimg} alt="" />
                        <div className='md:w-1/2 w-[80%] space-y-4'>
                            <h2 className=' text-xl text-red-500'>March 20, 2023</h2>
                            <h2 className=" text-[#ff9c1c] text-5xl font-bold font-mono uppercase">WHERE CAN <br /> I GET SOME?</h2>
                            <p className=' text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. <br />Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="text-xl mt-2 w-28 h-12 font-semibold bg-[#ff9c1c] text-black relative overflow-hidden group z-10 hover:text-black duration-1000"><span className="absolute bg-[#46433f] size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-white size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Get more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;