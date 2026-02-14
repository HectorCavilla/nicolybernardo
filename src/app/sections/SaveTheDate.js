'use client'
import Image from 'next/image'

export const SaveTheDate = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/nicol-y-bernardo/nb-bgsavedate.jpg"
                    alt="Save the Date Background"
                    fill
                    className="object-fill bg-position-top"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white animate-fade-in-up duration-1000">

                <div className="space-y-2 md:space-y-4">
                    {/* Day of week - Curved */}
                    <div className="w-64 h-24 mb-[-20px] mx-auto">
                        <svg viewBox="0 0 300 100" className="w-full h-full fill-current text-white">
                            <path id="curve-date" d="M 50,80 Q 150,20 250,80" fill="transparent" />
                            <text className="text-3xl tracking-[0.2em] font-light uppercase">
                                <textPath href="#curve-date" startOffset="50%" textAnchor="middle">
                                    Sábado
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Day Number */}
                    <p className="font-serif text-[8rem] md:text-[12rem] leading-none">
                        18
                    </p>

                    {/* Month */}
                    <p className="text-2xl md:text-4xl tracking-[0.3em] font-light uppercase">
                        Julio
                    </p>

                    {/* Year */}
                    <p className="text-lg md:text-2xl tracking-[0.5em] font-light mt-4 block">
                        2026
                    </p>
                </div>

            </div>
        </section>
    )
}
