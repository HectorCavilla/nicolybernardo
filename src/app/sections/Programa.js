"use client"
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import { FaChurch, FaSignature, FaHeart, FaChampagneGlasses } from "react-icons/fa6"
import { GiMusicalNotes } from "react-icons/gi"

export const Programa = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <section className='w-full h-[140vh] md:h-screen bg-background flex flex-col items-center justify-center'>
            <div className='absolute w-full h-full bg-primary opacity-5 z-0'></div>
            <div className='absolute w-full h-full flex flex-col items-center justify-center text-center text-lg bg-none'>
                <div className="py-5">
                    <h2 className='text-6xl mb-5 mt-36 font-script text-primary'>Programa</h2>
                    <p className='my-6 text-muted-foreground'>Queremos crear un recuerdo inolvidable y disfrutar todos juntos.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center shadow-xl rounded py-6 w-[95%] md:w-[98%] bg-card border border-border'>
                    <div ref={ref} className={`${isVisible ? "animate-fade-right animate-delay-500" : ""} relative w-full md:w-1/5 h-full py-4 px-6 flex flex-col items-center justify-evenly md:border-solid md:border-r md:border-border`}>
                        <FaChurch className='text-4xl text-accent' />
                        <h4 className='text-accent my-3 tracking-widest text-sm font-bold'>CEREMONIA RELIGIOSA</h4>
                        <p className="text-sm text-muted-foreground">Acompáñanos a unir nuestras vidas ante Dios.</p>
                    </div>
                    <div ref={ref} className={`${isVisible ? "animate-fade-right animate-delay-[700ms]" : ""} relative w-full md:w-1/5 h-full py-4 px-6 flex flex-col items-center justify-evenly md:border-solid md:border-r md:border-border`}>
                        <FaSignature className='text-4xl text-accent' />
                        <h4 className='text-accent my-3 tracking-widest text-sm font-bold'>BODA CIVIL</h4>
                        <p className="text-sm text-muted-foreground">Intercambio de votos y anillos.</p>
                    </div>
                    <div ref={ref} className={`${isVisible ? "animate-fade-right animate-delay-[900ms]" : ""} relative w-full md:w-1/5 h-full py-4 px-6 flex flex-col items-center justify-evenly md:border-solid md:border-r md:border-border`}>
                        <FaHeart className='text-4xl text-accent' />
                        <h4 className='text-accent my-3 tracking-widest text-sm font-bold'>PRIMER BAILE</h4>
                        <p className="text-sm text-muted-foreground">Acompáñanos al momento más emotivo de la fiesta.</p>
                    </div>
                    <div ref={ref} className={`${isVisible ? "animate-fade-right animate-delay-[1100ms]" : ""} relative w-full md:w-1/5 h-full py-4 px-6 flex flex-col items-center justify-evenly md:border-solid md:border-r md:border-border`}>
                        <FaChampagneGlasses className='text-4xl text-accent' />
                        <h4 className='text-accent my-3 tracking-widest text-sm font-bold'>BANQUETE</h4>
                        <p className="text-sm text-muted-foreground">Disfrutaremos de una deliciosa cena.</p>
                    </div>
                    <div ref={ref} className={`${isVisible ? "animate-fade-right animate-delay-[1300ms]" : ""} relative w-full md:w-1/5 h-full py-4 px-6 flex flex-col items-center justify-evenly`}>
                        <GiMusicalNotes className='text-4xl text-accent' />
                        <h4 className='text-accent my-3 tracking-widest text-sm font-bold'>FIESTA</h4>
                        <p className="text-sm text-muted-foreground">Impresiónanos con tus mejores pasos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}