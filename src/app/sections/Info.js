'use client'
import { useRef, useState } from "react"
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import Image from 'next/image'

import { useIsVisible } from "../hooks/useIsVisible"
import { Button } from "../components/Button"
import { EnvelopeTicket } from "../components/EnvelopeTicket"
import { fetcher } from '@/app/helpers/helpers'

export const Info = () => {
  const params = useParams()
  const [confirmed, setConfirmed] = useState(null)
  const invitacion = params.slug
  const { data: invitado, error, isLoading } = useSWR(invitacion ? `${process.env.API_URL}/api/invitados/info/${invitacion}` : null, fetcher, {
    onSuccess: (data) => {
      setConfirmed(data.confirmado)
    }
  })
  const { data: companiaInfo } = useSWR(() => invitado?.tipo === 2 ? `${process.env.API_URL}/api/acompanantes/${invitado.id_invitado}` : null, fetcher)
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  const handleConfirmacion = async (id, e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${process.env.API_URL}/api/invitados/confirmar`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      })

      if (res.ok) {
        setConfirmed(true)
      }
    } catch (Error) {
      console.log(Error.message)
    }
  }

  return (
    <section className='relative w-full bg-secondary py-24 px-6'>

      {/* Overlapping Image */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-10/12 max-w-md aspect-[3/4] md:aspect-square shadow-2xl rounded-sm overflow-hidden z-10 border-4 border-white">
        <Image
          src="/nicol-y-bernardo/hugo-judith.webp"
          alt="Nicol y Bernardo"
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-64 md:pt-72">

        {/* Curved Text SVG */}
        <div className="w-64 h-24 mb-10 animate-fade-in">
          <svg viewBox="0 0 300 100" className="w-full h-full fill-current text-accent">
            <path id="curve" d="M 50,80 Q 150,20 250,80" fill="transparent" />
            <text className="text-3xl tracking-[0.2em] font-light uppercase font-serif">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Nosotros
              </textPath>
            </text>
          </svg>
        </div>

        {/* Names */}
        <h2 className="font-script text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none text-primary flex flex-col md:flex-row items-center justify-center animate-fade-in-up drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
          <span className="md:-translate-x-32">Nicol&nbsp;
            <span className="text-3xl md:text-5xl font-serif text-accent/60 my-2 md:my-0">&</span>
          </span>
        </h2>
        <h2 className="font-script text-[4rem] md:text-[6rem] lg:text-[7rem] leading-none mb-12 text-primary flex flex-col md:flex-row items-center justify-center animate-fade-in-up drop-shadow-sm">
          <span className="md:-translate-y-2 md:translate-x-10">Bernardo</span>
        </h2>

        {/* Intro Paragraphs */}
        <div className="space-y-6 text-lg md:text-xl text-foreground font-light leading-relaxed text-justify max-w-2xl animate-fade-in-up delay-200">
          <p>
            Después de tantos momentos especiales juntos, risas compartidas y sueños construidos, estamos listos para dar el siguiente paso en esta hermosa historia de amor.
          </p>
          <p>
            Nos llena de emoción saber que serás parte de este día. Queremos celebrar contigo el inicio de una nueva etapa, rodeados de las personas que más queremos.
          </p>
        </div>

        {/* Guest Confirmation Logic */}
        {invitacion && !isLoading && !error && invitado && (
          <div className="mt-16 w-full max-w-2xl border-t border-border pt-10 animate-fade-in-up delay-500">
            {!invitado.hasOwnProperty("message") && (
              <EnvelopeTicket
                invitado={invitado}
                companiaInfo={companiaInfo}
                confirmed={confirmed}
                handleConfirmacion={handleConfirmacion}
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}