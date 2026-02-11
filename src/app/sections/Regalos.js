"use client"
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import { Button } from "../components/Button"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const Regalos = () => {
    const ref = useRef()
    const isVisible = useIsVisible(ref)

    const registries = [
        {
            id: 1,
            name: 'LIVERPOOL',
            color: '#E10098',
            event: '12345678',
            link: 'https://www.liverpool.com.mx/'
        },
        {
            id: 2,
            name: 'AMAZON',
            color: '#FF9900', // Amazon Orange
            event: 'A-100-XYZ',
            link: 'https://www.amazon.com.mx/'
        },
        {
            id: 3,
            name: 'PALACIO DE HIERRO',
            color: '#F4B400', // Palacio Gold-ish
            event: 'PH-998877',
            link: 'https://www.elpalaciodehierro.com/'
        }
    ]

    return (
        <section ref={ref} className="w-full py-24 md:py-32 px-6 bg-[oklch(0.35_0.12_15)] flex flex-col items-center justify-center text-center">

            <div className={`max-w-4xl w-full flex flex-col items-center gap-12 ${isVisible ? "animate-fade-up animate-duration-[1000ms]" : "opacity-0"}`}>

                {/* Title */}
                <h2 className="font-script text-6xl md:text-8xl text-white mb-4">
                    Mesa de Regalos
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
                    Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, hemos abierto una mesa de regalos en:
                </p>

                {/* Carousel of Registries */}
                <div className="w-full max-w-lg mt-4">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="w-full pb-12 text-white" // Formatting dots
                    >
                        {registries.map((registry) => (
                            <SwiperSlide key={registry.id}>
                                <div
                                    className="p-8 md:p-12 rounded-lg flex flex-col items-center gap-6 hover:bg-white/5 transition-colors duration-300 mx-2 my-2"
                                    style={{ backgroundColor: "color-mix(in oklab, var(--primary-foreground) 10%, transparent)" }}
                                >
                                    {/* Logo Placeholder */}
                                    <div className="text-2xl md:text-3xl font-bold tracking-widest" style={{ color: registry.color }}>
                                        {registry.name}
                                    </div>

                                    <div className="text-gray-200 font-light text-lg">
                                        Evento: <span className="font-medium text-white">{registry.event}</span>
                                    </div>

                                    <Button link={registry.link} className="bg-white !text-primary hover:!text-white shadow-none border-none">
                                        VER MESA DE REGALOS
                                    </Button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}