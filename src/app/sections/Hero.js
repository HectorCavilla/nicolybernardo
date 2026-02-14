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
      <div className="absolute inset-0 bg-black/10 w-full h-full" />
    ),
  };

  const content = {
    translateY: [0, 20],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-10 p-4">

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center align-center z-10">
          <h1 className="font-script text-[8rem] md:text-[12rem] leading-none text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] flex items-center cursor-default">
            <span className="translate-x-2">N</span>
            <span className="-translate-x-2 translate-y-16 md:translate-y-24">B</span>
          </h1>

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
        layers={[background, content]}
        className="hidden w-full h-full md:block"
      />
    </div>
  );
}