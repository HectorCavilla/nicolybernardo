import { Suspense } from 'react'
import { Hero } from './sections/Hero'
import { Info } from './sections/Info'
import { SaveTheDate } from './sections/SaveTheDate'
import { CeremoniaRecepcion } from './sections/CeremoniaRecepcion'
import { DressCode } from './sections/DressCode'
import { Countdown } from './sections/Countdown'
import { Regalos } from './sections/Regalos'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Info />
        <SaveTheDate />
        <Suspense fallback={null}>
          <CeremoniaRecepcion />
        </Suspense>
        <Countdown />
        <DressCode />
        <Regalos />
        <Footer />
      </main>
    </>
  )
}
