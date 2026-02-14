export const Footer = () => {
    return (
        <footer className="w-full bg-white py-12 px-6 flex flex-col items-center justify-center text-center gap-6">
            <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 md:gap-6 text-primary drop-shadow-sm font-raleway select-none mb-4">
                    <span className="text-6xl md:text-8xl font-thin -tracking-[0.1em] leading-none">N</span>
                    <div className="flex flex-col items-center gap-2 py-1 h-20 md:h-24 justify-center opacity-90">
                        <div className="w-[1px] flex-1 bg-primary/80"></div>
                        <span className="text-[0.4rem] md:text-[0.5rem] tracking-[0.3em] font-light uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap before:content-[''] before:border-l before:border-primary/80 before:h-2 before:w-2 before:block before:absolute before:-top-4 before:translate-x-1/2 after:content-[''] after:border-r after:border-primary/80 after:h-2 after:w-2 after:block after:absolute after:-bottom-4 after:translate-x-1/2">
                            Nicol y Bernardo
                        </span>
                        <div className="w-[1px] flex-1 bg-primary/80"></div>
                    </div>
                    <span className="text-6xl md:text-8xl font-thin leading-none -ml-[0.1em]">B</span>
                </div>
                <p className="text-muted-foreground tracking-widest uppercase text-xs md:text-sm !mt-9">18 Julio 2026</p>
            </div>

            <div className="max-w-xl mx-auto">
                <p className="text-foreground font-light italic text-lg leading-relaxed">
                    &quot;And now these three remain: faith, hope and love. But the greatest of these is love.&quot;
                </p>
                <p className="text-muted-foreground text-sm mt-2 font-medium">
                    — 1 Corinthians 13:13
                </p>
            </div>
        </footer>
    )
}
