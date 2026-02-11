export const Footer = () => {
    return (
        <footer className="w-full bg-white py-12 px-6 flex flex-col items-center justify-center text-center gap-6">
            <div className="space-y-2">
                <h2 className="font-serif text-3xl md:text-4xl text-primary">Nicol & Bernardo</h2>
                <p className="text-muted-foreground tracking-widest uppercase text-sm">July 18, 2026</p>
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
