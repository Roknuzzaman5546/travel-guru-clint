import Topplacedetails from './topplacedetails';
import usePlace from '../Hooks/Useplace';
import { Link } from 'react-router-dom';

const Place = () => {
    const [place] = usePlace();

    return (
        <div className=" md:max-w-screen-2xl w-11/12 mx-auto mb-10 mt-40">
            <h2 className=" text-black text-center text-5xl font-mono mb-8">Our top place booked</h2>
            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    place.slice(0, 8).map(item => <Topplacedetails key={item._id} item={item}>
                    </Topplacedetails>)
                }
            </div>
            <div className=' flex flex-col justify-center items-center mt-10'>
                <Link to="/allplace">
                <button className="text-xl mt-2 w-32 h-12 font-semibold bg-[#ff9c1c] text-black relative overflow-hidden group z-10 hover:text-[#ff9c1c] duration-1000"><span className="absolute bg-[#46433f] size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-black size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Show More</button>
                </Link>
            </div>
        </div>
    );
};

export default Place;