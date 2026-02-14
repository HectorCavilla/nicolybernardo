"use client"
import { useRef } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

import moment from 'moment'
import 'moment/locale/es-mx'
import { ParallaxBanner } from 'react-scroll-parallax'

export const Countdown = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  moment.locale('es-mx')
  const weddingDate = moment('07-18-2026', 'MM-DD-YYYY').set("hour", 14).set("minute", 30)
  const today = moment()
  const ms = weddingDate.diff(today)

  const days = Math.floor(ms / 86400000)
  const restOfDays = ms % 86400000
  const hours = Math.floor(restOfDays / 3600000)
  const minutes = Math.floor((restOfDays % 3600000) / 60000)

  const counter = {
    translateY: [20, -30],
    expanded: false,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col z-10 p-4">
        <h2 className="text-6xl md:text-7xl text-white font-script drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] mb-12 md:mb-16 text-center">Nos vemos en...</h2>

        <div className={`w-full md:w-3/6 flex justify-center items-center flex-row text-white mt-0 md:mt-5`}>
          <div ref={ref} className={`${isVisible ? "animate-jump-in animate-delay-500 " : ""}flex justify-center items-center flex-col bg-accent/40 float-left text-center px-6 py-5 md:py-0 md:!px-20 md:!pt-7 md:!pb-3 rounded mx-2 md:!mx-2`}>
            <div className={`text-5xl md:leading-[.6]`}>{days}</div>
            <span className={`text-lg font-light`}>Días</span>
          </div>
          <div className={`flex justify-center items-center flex-col bg-accent/40 float-left text-center px-6 py-5 md:py-0 md:!px-20 md:!pt-7 md:!pb-3 rounded mx-2 md:!mx-2`}>
            <div className={`text-5xl md:leading-[.6]`}>{hours}</div>
            <span className={`text-lg font-light`}>Horas</span>
          </div>
          <div className={`flex justify-center items-center flex-col bg-accent/40 float-left text-center px-6 py-5 md:py-0 md:!px-20 md:!pt-7 md:!pb-3 rounded mx-2 md:!mx-2`}>
            <div className={`text-5xl md:leading-[.6]`}>{minutes}</div>
            <span className={`text-lg font-light`}>Minutos</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[500px] overflow-hidden">
      <ParallaxBanner
        layers={[
          {
            image: '/nicol-y-bernardo/nb-bgcounter.jpg', // New background image
            translateY: [-10, 20],
            opacity: [1, 1],
            shouldAlwaysCompleteAnimation: false
          },
          /* {
            children: <div className="absolute inset-0 bg-black/40" />
          }, */
          counter
        ]}
        className="w-full h-full"
      />
    </section>
  );
};