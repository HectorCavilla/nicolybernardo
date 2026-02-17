'use client'
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

export const DressCode = () => {
    const ref = useRef()
    const isVisible = useIsVisible(ref)

    const womenColors = [
        '#C65D3B', '#A05C68', '#D68A94',
        '#2A4238', '#3F5A4C', '#8CA693',
        '#485B75', '#B86134', '#E6BCC0'
    ]

    const menColors = [
        '#1A1A1A', '#3D3F47', '#8C7B6E',
        '#4A3B32', '#B88A5E', '#1C2A45',
        '#2F3542', '#D3CBB8', '#1A233A'
    ]

    return (
        <section ref={ref} className="w-full py-20 px-6 bg-background flex flex-col items-center justify-center text-center">
            <div className={`flex flex-col items-center gap-6 max-w-4xl w-full transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>

                {/* Header */}
                <h2 className="font-script text-4xl md:text-6xl text-foreground">
                    Dresscode / vestimenta
                </h2>

                {/* Hanger Icon */}
                <div className="text-foreground my-2">
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 3a2 2 0 0 1 2 2v1h-4V5a2 2 0 0 1 2-2z" />
                        <path d="M3 14l9-6 9 6" />
                        <path d="M3 14l2 3h14l2-3" />
                    </svg>
                </div>

                {/* Subtitle */}
                <h3 className="font-serif text-4xl md:text-5xl uppercase tracking-[0.2em] text-foreground">
                    FORMAL
                </h3>

                {/* Description */}
                <p className="font-sans text-base md:text-lg text-foreground/80 max-w-lg leading-relaxed mt-4">
                    Recuerda, lo mas importante para nosotros es que estés cómodo. Pero nos gustaría que la vestimenta fuera formal.
                </p>

                {/* Code of Conduct Title */}
                <h4 className="font-script text-3xl md:text-5xl text-foreground mt-12 mb-8">
                    Código de vestimenta
                </h4>

                {/* Columns */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-24 w-full">
                    {/* Women */}
                    <div className="flex flex-col items-center gap-4">
                        <h5 className="font-script text-3xl md:text-4xl text-foreground">mujeres</h5>
                        <p className="font-serif text-xl text-foreground">Vestido formal</p>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {womenColors.map((color, idx) => (
                                <div key={idx} className="w-12 h-12 rounded-full shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Divider for desktop */}
                    <div className="hidden md:block w-px h-64 bg-foreground/20 self-center"></div>

                    {/* Men */}
                    <div className="flex flex-col items-center gap-4">
                        <h5 className="font-script text-3xl md:text-4xl text-foreground">hombres</h5>
                        <p className="font-serif text-xl text-foreground">Traje o corbata</p>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            {menColors.map((color, idx) => (
                                <div key={idx} className="w-12 h-12 rounded-full shadow-sm" style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
