'use client';
import { ParallaxBanner } from 'react-scroll-parallax';
import { SlArrowDown } from "react-icons/sl";

export const Hero = () => {
  const background = {
    image: '/nicol-y-bernardo/nb-bghero.jpg',
    translateY: [26, 50],
    opacity: [1, 0.5],
    shouldAlwaysCompleteAnimation: true
  };

  const backgroundMobile = {
    image: '/nicol-y-bernardo/nb-bghero-mobile.jpg',
    translateY: [25, 50],
    opacity: [1, 0.5],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true
  };

  const overlay = {
    opacity: [1, 1],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="absolute inset-0 bg-black/15 w-full h-full" />
    ),
  };

  const content = {
    translateY: [0, 20],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-10 p-4">

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center align-center z-10">
          <div className="flex items-center justify-center gap-6 md:gap-12 text-white drop-shadow-2xl font-raleway select-none">
            <span className="text-[14rem] font-thin md:-tracking-[0.2em] leading-none">N</span>
            <div className="flex flex-col items-center gap-4 py-2 h-40 md:h-56 justify-center opacity-90">
              <div className="w-[1px] flex-1 bg-white/80"></div>
              <span className="text-[.8rem] md:text-sm tracking-[0.4em] font-light uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap before:content-[''] before:border-l-2 before:border-white/80 before:h-6 before:w-6 before:block before:absolute before:-top-10 before:translate-x-1/2 after:content-[''] after:border-r-2 after:border-white/80 after:h-6 after:w-6 after:block after:absolute after:-bottom-10 after:translate-x-1/2">
                Nicol y Bernardo
              </span>
              <div className="w-[1px] flex-1 bg-white/80"></div>
            </div>
            <span className="text-[14rem] font-thin leading-none md:-ml-[0.2em]">B</span>
          </div>

          <div className="max-w-2xl px-6 text-center mt-24">
            <p className="text-white/90 text-lg md:text-xl font-light italic drop-shadow-md">
              &quot;And now these three remain: faith, hope and love. But the greatest of these is love.&quot;
            </p>
            <p className="text-white/80 text-sm mt-2 font-medium tracking-widest uppercase">
              — 1 Corinthians 13:13
            </p>
          </div>

          {/* <div className="animate-bounce">
            <SlArrowDown className="text-white text-4xl md:text-5xl opacity-80" />
          </div> */}
        </div>
      </div>
    ),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <ParallaxBanner
        layers={[backgroundMobile, overlay, content]}
        className="w-full h-full md:hidden inset-0"
      />
      <ParallaxBanner
        layers={[background, overlay, content]}
        className="hidden w-full h-full md:block"
      />
    </div>
  );
}