import Topplacedetails from './topplacedetails';
import usePlace from '../Hooks/Useplace';

const Place = () => {
    const [place] = usePlace(); 

    return (
        <div className="my-10 w-11/12 mx-auto">
            <h2 className=" text-black text-center text-5xl font-mono mb-8">Our top place booked</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    place.map(item => <Topplacedetails key={item.id} item={item}>
                    </Topplacedetails>)
                }
            </div>
        </div>
    );
};

export default Place;