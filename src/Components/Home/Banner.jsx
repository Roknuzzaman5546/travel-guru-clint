import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import { Autoplay } from 'swiper/modules';

import swip1 from '../../assets/images/Sajek.png'
import swip2 from '../../assets/images/Sreemongol.png'
import swip3 from '../../assets/images/sundorbon.png'
import { useRef } from 'react';

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='bgimg bg-fixed'>
            <div className=" flex lg:flex-row flex-col md:justify-center justify-between items-center lg:pt-40 md:pt-32 pt-20 lg:pb-28 md:pb-16 pb-10 bg-[#000000B2] gap-10">
                <div className=" md:w-1/2 w-full md:ml-20 ml-0">
                    <h2 className="text-6xl font-bold text-white font-serif">Coxs bazar</h2>
                    <p className=' my-3 text-white'>Coxs Bazar (/ˌkɒksɪz bəˈzɑː/; Bengali: কক্সবাজার, romanized: Kôksbajar; pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre, and district headquarters in Southeastern Bangladesh. The iconic Coxs Bazar Beach, one of the most popular tourist attractions in Bangladesh, is the longest uninterrupted beach in the world.[2] It is located 150 km (93 mi) south of the city of Chittagong. Coxs Bazar is also known by the name Panowa, which translates literally as yellow flower.</p>
                    <button className=" btn btn-warning mt-5">Booking</button>
                </div>
                <div className=' md:w-1/2 w-[80%] md:mx-0 mx-auto'>
                    <Swiper
                        breakpoints={{
                            500: {
                                width: 550,
                                slidesPerView: 1,
                            },
                            800: {
                                width: 550,
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        modules={[Autoplay]}
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
                        <div className="autoplay-progress hidden" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;