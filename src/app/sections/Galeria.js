'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import picOne from '../../../public/judith-y-hugo/galeria1.webp'
import picTwo from '../../../public/judith-y-hugo/galeria2.webp'
import picThree from '../../../public/judith-y-hugo/galeria3.webp'
import picFour from '../../../public/judith-y-hugo/galeria4.webp'
import picFive from '../../../public/judith-y-hugo/galeria5.webp'
import picSix from '../../../public/judith-y-hugo/galeria6.webp'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'

export const Galeria = () => {

    return (
        <section className='w-full h-[125vh] bg-background'>
            <div className="w-full h-full flex flex-col items-center justify-center md:justify-evenly text-center text-lg bg-none">
                <div className="py-5">
                    <h2 className="text-5xl my-5 text-primary font-script">Nuestro Amor</h2>
                    <p className="my-6 px-5 md:px-0 text-muted-foreground">Entendimos que nuestro lugar favorito es solamente donde estemos siempre juntos.</p>
                </div>
                <div className="w-11/12">
                    <Swiper
                        loop
                        lazy="true"
                        navigation
                        /* pagination={{
                            clickable: true,
                        }} */
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                centeredSlides: "true"
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                src={picOne}
                                alt="Judith & Hugo | 20 Julio 2024"
                                width={800}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={picTwo}
                                alt="Judith & Hugo | 20 Julio 2024"
                                width={800}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={picThree}
                                alt="Judith & Hugo | 20 Julio 2024"
                                width={800}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={picFour}
                                alt="Judith & Hugo | 20 Julio 2024"
                                width={800}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={picFive}
                                alt="Judith & Hugo | 20 Julio 2024"
                                width={800}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={picSix}
                                alt="Judith & Hugo | 20 Julio 2024"
                                width={800}
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}