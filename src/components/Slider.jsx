import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import './slider.scss'
// Update these imports
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Slider = ({ data, title }) => {  // Destructure props
    return (
        <div id="success-stories" className="max-w-screen-xl mx-auto px-4 xl:pt-[120px] lg:pt-[00px] md:pt-[65px] sm:pt-[48px] pt-[32px]">
            <p className="text-center text-gray-800 font-semibold md:text-2xl sm:text-xl text-lg max-w-[600px] mx-auto">
                {title}
            </p>
            <div className="coverflow-slider mt-8">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    slidesPerView={3}
                    centeredSlides
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="swiper_container"
                >
                    {Array.isArray(data) && data.map((item, idx) => (  // Ensure data is an array
                        <SwiperSlide key={idx}>
                            <div className="bg-white inner-item flex flex-col border-2 border-gray-300 rounded-lg px-5 py-8 shadow-lg">
                                <div className="mb-4">
                                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                                </div>
                                <h5 className="font-bold text-lg text-gray-800 mb-2">
                                    {item.name}
                                </h5>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};


export default Slider