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
            <div className=" flex lg:flex-row flex-col md:justify-center justify-between items-center lg:pt-40 md:pt-32 pt-20 lg:pb-28 md:pb-16 pb-10 bg-[#000000B2] gap-10">
                <div className=" md:w-1/2 w-full md:ml-20 ml-5">
                    <h2 className="text-6xl font-bold text-white font-serif">Coxs bazar</h2>
                    <p className=' my-3 text-white'>Coxs Bazar (/ˌkɒksɪz bəˈzɑː/; Bengali: কক্সবাজার, romanized: Kôksbajar; pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre, and district headquarters in Southeastern Bangladesh. The iconic Coxs Bazar Beach, one of the most popular tourist attractions in Bangladesh, is the longest uninterrupted beach in the world.[2] It is located 150 km (93 mi) south of the city of Chittagong. Coxs Bazar is also known by the name Panowa, which translates literally as yellow flower.</p>
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