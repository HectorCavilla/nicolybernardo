export const Padres = () => {
    return (
        <section className='w-full h-[70vh] bg-background flex items-center justify-center relative'>
            <div className='bg-card w-[97%] h-[118%] absolute -top-24 shadow-xl px-5 md:p-8 flex flex-col items-center justify-evenly rounded border border-border'>
                <p className='text-center text-muted-foreground font-light'>Con la bendición de nuestros padres y padrinos, tenemos el placer de invitarles a ser testigos de nuestra unión.</p>
                <div className='w-full flex justify-evenly items-center flex-col md:flex-row'>
                    <div className='flex flex-col items-center justify-center my-6 md:my-0'>
                        <h2 className='text-5xl my-5 font-script text-primary'>Padres de la novia</h2>
                        <p className="text-foreground">Nombre de la Madre</p>
                        <p className="text-foreground">Nombre del Padre</p>
                    </div>
                    <div className='flex flex-col items-center justify-center my-6 md:my-0'>
                        <h2 className='text-5xl my-5 font-script text-primary'>Padres del novio</h2>
                        <p className="text-foreground">Nombre de la Madre</p>
                        <p className="text-foreground">Nombre del Padre</p>
                    </div>
                </div>
            </div>
        </section>
    )
}