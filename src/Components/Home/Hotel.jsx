import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import useHotel from '../Hooks/useHotel';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';

const Hotel = () => {
    const [hotel] = useHotel();


    return (
        <div className=' mt-5'>
            <div className='homehotelbg bg-fixed my-20'>
                <div className="py-24 bg-[#161616b2] gap-10">
                    <div className=' mb-20'>
                        <h2 className=" text-white font-bold text-center text-5xl font-mono">Our top Hotel booked <span className=' text-3xl font-bold font-mono text-pink-600'>/ <Link to={`/hotel`}>View all hotel</Link></span></h2>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <div className=' w-[80%] mx-auto '>
                                {
                                    hotel.slice(0, 6).map(item => <div key={item._id} className=' flex flex-col'>
                                        <SwiperSlide>
                                            <div className="cart bg-base-100 shadow-md md:w-[90%] w-11/12  h-[510px] md:mx-0 mx-auto rounded">
                                                <div className="cart">
                                                    <img className=" w-full h-72 background-image" src={item.imageUrl} alt="Shoes" />
                                                </div>
                                                <div className="pl-6 mt-5">
                                                    <p className=' text-xl font-bold font-mono'>Cast: {item.bookingCost} $</p>
                                                    <p className=' mt-2'>
                                                        <Rating
                                                            style={{ maxWidth: 180 }}
                                                            value={item.rating}
                                                            readOnly
                                                        />
                                                    </p>
                                                    <h2 className=" text-3xl font-bold mt-3">{item.hotelName}</h2>
                                                    <Link to={`/${item._id}`}>
                                                        <button className=" text-2xl font-blod text-red-500 pop-h2 flex items-center gap-2 navAfter mt-4">
                                                            <span>Read more</span>
                                                            <span><FaLongArrowAltRight></FaLongArrowAltRight></span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>)
                                }
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;