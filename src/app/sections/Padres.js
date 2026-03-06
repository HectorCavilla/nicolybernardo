export const Padres = () => {
    return (
        <section className='w-full h-[70vh] flex items-center justify-center relative'>
            <div className='w-[95%] h-full absolute px-5 md:p-8 flex flex-col items-center justify-evenly'>
                <p className='text-center text-muted-foreground font-light'>Con la bendición de Dios y nuestros padres, tenemos el honor de invitarles a ser testigos de nuestra unión.</p>
                <div className='w-full flex justify-evenly items-center flex-col md:flex-row'>
                    <div className='flex flex-col items-center justify-center my-6 md:my-0'>
                        <h2 className='text-5xl my-5 font-script text-primary'>Padres de la novia</h2>
                        <p className="text-foreground">Adela Medina Hernández</p>
                        <p className="text-foreground">José Luis Centeno Bello</p>
                    </div>
                    <div className='flex flex-col items-center justify-center my-6 md:my-0'>
                        <h2 className='text-5xl my-5 font-script text-primary'>Padres del novio</h2>
                        <p className="text-foreground">Evangelina Mondragón Colin</p>
                        <p className="text-foreground">Francisco Aguilar Garduño</p>
                    </div>
                </div>
            </div>
        </section>
    )
}