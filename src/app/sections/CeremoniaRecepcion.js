'use client'
import { useRef } from "react"
import { useSearchParams } from "next/navigation"
import { useIsVisible } from "../hooks/useIsVisible"
import { MdLocationPin, MdOutlineCalendarMonth } from "react-icons/md"
import { TbClockHour2 } from "react-icons/tb"
import { Button } from '../components/Button'

export const CeremoniaRecepcion = ({ guestData }) => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const isVip = !!guestData?.vip;

    const Card = ({ title, place, address, time, mapLink, delay, isVipCard }) => (
        <div className={`flex-1 bg-card/90 backdrop-blur-sm p-8 md:p-12 shadow-sm ${isVipCard ? 'border-2 border-accent/60 ring-4 ring-accent/10' : 'border border-border'} flex flex-col items-center text-center gap-6 rounded-sm ${isVisible ? `animate-fade-up animate-duration-[1000ms] animate-delay-[${delay}ms]` : "opacity-0"}`}>
            <h3 className="font-script text-3xl md:text-5xl text-primary mb-2">{title}</h3>

            <div className="space-y-4 text-muted-foreground flex-grow">
                <p className="text-xl md:text-2xl uppercase tracking-wider font-light text-foreground">{place}</p>

                <div className="flex flex-col gap-4 mt-8 items-center">
                    <div className="flex items-center gap-3 text-lg">
                        <MdOutlineCalendarMonth className="text-3xl text-accent" />
                        <span>Sábado, 18 de Julio de 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                        <TbClockHour2 className="text-3xl text-accent" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-start justify-center gap-3 max-w-xs mx-auto text-lg">
                        <MdLocationPin className="text-3xl text-accent shrink-0 mt-1" />
                        <span>{address}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Button link={mapLink} variant="outline">VER UBICACIÓN</Button>
            </div>
        </div>
    )

    return (
        <section ref={ref} className='relative w-full py-24 md:py-32 px-4 md:px-12 bg-secondary flex flex-col items-center gap-12'>
            {/* Background Pattern or Image could go here */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 lg:gap-12">

                <Card
                    title="Ceremonia"
                    place="Santuario Maria Desatadora de Nudos"
                    address="Av. 145 SM320 Polígono Sur, Jardines del Sur CP. 77536 Cancún Quintana Roo."
                    time="14:30 horas"
                    mapLink="https://maps.app.goo.gl/DEXbfjokfBvts2626"
                    delay="200"
                />

                <Card
                    title="Recepción"
                    place="Salón Entre Lagos"
                    address="Supermanzana conocido, 76915 El Romeral, Qro."
                    time="15:00 horas"
                    mapLink="https://maps.app.goo.gl/ofM3sawJe9AaxGCs5?g_st=aw"
                    delay="400"
                />

            </div>

            {/* VIP Section */}
            {isVip && (
                <div className="max-w-4xl w-full mt-8 md:mt-12 animate-fade-in">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-accent/30"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-secondary px-4 text-sm text-accent uppercase tracking-widest">Exclusivo</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Card
                            title="Recepción VIP"
                            place="Salón Privado 'El Cielo'"
                            address="Acceso exclusivo por la entrada norte del recinto."
                            time="21:00 horas"
                            mapLink="#" // Replace with actual link if different or same
                            delay="600"
                            isVipCard={true}
                        />
                    </div>
                </div>
            )}

        </section>
    )
}
