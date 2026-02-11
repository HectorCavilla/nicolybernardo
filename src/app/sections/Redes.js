import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const Redes = () => {
    return (
        <section className='w-full h-[100vh] bg-gradient-to-br from-accent/60 from-22% to-accent to-100% flex items-center justify-center relative'>
            <div className='bg-card w-[97%] h-[93%] px-5 md:p-8 flex flex-col items-center justify-evenly text-lg text-center shadow-2xl rounded-lg'>
                <h2 className='text-5xl drop-shadow-sm font-script text-primary'>Recuerdos Memorables</h2>
                <p className="text-muted-foreground">Queremos capturar cada momento mágico y cada risa compartida en este día tan especial.</p>
                <p className="text-muted-foreground">Por favor, siéntanse libres de tomar fotos y compartir en redes sociales usando el hastag </p>
                <p className='text-primary text-2xl font-bold'>#BodaNicolBernardo</p>
                <p className="text-muted-foreground">Nos encantaría que nos etiqueten para que podamos revivir cada momento a través de sus ojos y experiencias. Además, si tienen alguna foto especial que capture la belleza y emoción de nuestro día, por favor no duden en compartirla con nosotros.</p>
                <p className="text-muted-foreground">Gracias por ayudarnos a hacer este día más memorable con sus fotos y buenos deseos.</p>
                <div className="w-full flex justify-center items-center">
                    <a target="_blank" href="#" className="mx-5">
                        <FaInstagram className="text-4xl text-primary transition ease-in-out duration-200 hover:scale-[1.2] hover:opacity-90" />
                    </a>
                    <a target="_blank" href="#" className="mx-5">
                        <FaFacebook className="text-4xl text-primary transition ease-in-out duration-200 hover:scale-[1.2] hover:opacity-90" />
                    </a>
                </div>
            </div>
        </section>
    )
}