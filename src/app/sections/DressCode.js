'use client'
import Image from 'next/image'
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

export const DressCode = () => {
    const ref = useRef()
    const isVisible = useIsVisible(ref)

    const colors = [
        { name: 'Vino', hex: '#722F37' },
        { name: 'Taupe', hex: '#8B7355' },
        { name: 'Azul Marino', hex: '#000080' },
        { name: 'Verde Esmeralda', hex: '#50C878' },
        { name: 'Negro', hex: '#000000' }
    ]

    return (
        <section ref={ref} className="w-full py-32 px-6 bg-background flex flex-col items-center justify-center text-center">
            <div className={`flex flex-col items-center gap-8 max-w-2xl ${isVisible ? "animate-fade-up animate-duration-[1000ms]" : "opacity-0"}`}>

                {/* Title */}
                <h2 className="font-serif text-4xl md:text-6xl text-primary">
                    CÓDIGO DE VESTIMENTA
                </h2>

                {/* Subtitle */}
                <h3 className="text-xl md:text-2xl tracking-[0.2em] font-light uppercase text-foreground">
                    Formal
                </h3>

                {/* Description */}
                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
                    Queremos que te sientas cómodo y elegante. Te sugerimos los siguientes colores:
                </p>

                {/* Image */}
                <div className="relative w-48 aspect-square md:w-64 opacity-80 my-4">
                    <Image
                        src="/dresscode.webp"
                        alt="Dress Code"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Color Palette */}
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {colors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div
                                className="w-12 h-12 rounded-full shadow-lg border-2 border-white"
                                style={{ backgroundColor: color.hex }}
                            />
                            {/* Optional: Show color name on hover or always */}
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">{color.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
