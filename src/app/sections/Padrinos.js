export const Padrinos = () => {
  return (
    <section className='w-full h-screen bg-secondary'>
      <div className='absolute w-full h-full bg-[url("/bg-acuarela.webp")] bg-top bg-no-repeat bg-cover opacity-40 z-0'></div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center text-center text-lg bg-none">
        <div className="py-5">
          <h2 className="text-accent text-6xl my-5 font-script">Padrinos de Boda</h2>
          <p className="my-6 text-2xl text-foreground font-light">Sin ellos no sería igual.</p>
        </div>
        <div className="py-5">
          <ul className="text-muted-foreground space-y-2">
            <li>Av. Jesus Michel González 3232 paseos del Prado 45610, San Pedro Tlaquepaque.</li>
            <li>Sábado, 20 de Julio de 2024.</li>
            <li>19:30 horas.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}