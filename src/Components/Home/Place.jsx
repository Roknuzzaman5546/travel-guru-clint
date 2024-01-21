import Topplacedetails from './topplacedetails';
import usePlace from '../Hooks/Useplace';

const Place = () => {
    const [place] = usePlace();

    return (
        <div className=" md:max-w-screen-2xl w-11/12 mx-auto mb-10 mt-40">
            <h2 className=" text-black text-center text-5xl font-mono mb-8">Our top place booked</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    place.slice(0, 6).map(item => <Topplacedetails key={item._id} item={item}>
                    </Topplacedetails>)
                }
            </div>
            <div className=' flex flex-col justify-center items-center mt-10'>
                <button className='bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono'>Show all</button>
            </div>
        </div>
    );
};

export default Place;