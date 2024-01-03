import { useState } from 'react';
import { useEffect } from 'react';
import Topplacedetails from './topplacedetails';

const Place = () => {
    const [place, setplace] = useState([]);
    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setplace(data))
    }, [])

    return (
        <div className="my-10">
            <h2 className=" text-black text-center text-5xl font-mono">Our top place booked</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    place.map(item => <Topplacedetails key={item.id} item={item}>
                    </Topplacedetails>)
                }
            </div>
        </div>
    );
};

export default Place;