import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import { Pagination } from 'swiper/modules';

import swip1 from '../../assets/images/Sajek.png'
import swip2 from '../../assets/images/Sreemongol.png'
import swip3 from '../../assets/images/sundorbon.png'

const Banner = () => {
    return (
        <div className='bgimg bg-fixed'>
            <div className=" flex lg:flex-row flex-col items-center lg:pt-40 pb-28 bg-[#000000B2]">
                <div className=" md:w-1/2 w-full lg:ml-20 ml-0">
                    <h2 className="text-6xl font-bold text-white font-serif">Coxs bazar</h2>
                    <button className=" btn btn-warning mt-5">Booking</button>
                </div>
                <div className=' md:w-1/2 w-full'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={swip1} alt="" />
                            <h2 className=' text-white text-center text-2xl uppercase font-bold -mt-10'>Sajek</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swip2} alt="" />
                            <h2 className=' text-white text-center text-2xl uppercase font-bold -mt-10'>Sremongal</h2>
                            <div className=' mt-10'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swip3} alt="" />
                            <h2 className=' text-white text-center text-2xl uppercase font-bold -mt-10'>Sundarbon</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swip1} alt="" />
                            <h2 className=' text-white text-center text-2xl uppercase font-bold -mt-10'>Sajek</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swip2} alt="" />
                            <h2 className=' text-white text-center text-2xl uppercase font-bold -mt-10'>Sremongal</h2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={swip3} alt="" />
                            <h2 className=' text-white text-center text-2xl uppercase font-bold -mt-10'>Sundarbon</h2>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;