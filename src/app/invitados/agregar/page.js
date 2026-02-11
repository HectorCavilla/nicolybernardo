'use client'
import Link from 'next/link'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast, ToastContainer } from 'react-toastify'
import { PiArrowLeft, PiUserPlus } from "react-icons/pi"
import { validationGuestTypeSchema } from '@/app/helpers/guestsHelpers'

import "react-toastify/dist/ReactToastify.css"

const AgregarInvitado = () => {
  const [guestType, setGuestType] = useState(null)
  const { register, handleSubmit, formState: { errors }, resetField } = useForm({
    resolver: zodResolver(validationGuestTypeSchema),
    mode: 'onChange'
  })

  const clearGuestsForm = () => {
    resetField("primerNombre")
    resetField("segundoNombre")
    resetField("apellidoPaterno")
    resetField("apellidoMaterno")
    resetField("telefono")
    resetField("pases")
    resetField("slug")
    resetField("primerNombrePareja")
    resetField("apellidoPaternoPareja")
    resetField("vip")
  }

  const handleChangeType = (event) => {
    const listValue = event.target.options[event.target.selectedIndex].text
    setGuestType(listValue)
    clearGuestsForm()
  }

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${process.env.API_URL}/api/invitados/registrar`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vip: data.vip || false })
      })

      if (res.ok) {
        toast.success("Invitado registrado con éxito.", { position: "bottom-right", theme: "colored" })
        clearGuestsForm()
      } else {
        const errorData = await res.json().catch(() => ({}))
        const message = errorData.message || "Error al registrar invitado."
        toast.error(message, { position: "bottom-right", theme: "colored" })
      }
    } catch (Error) {
      console.log(Error.message)
      toast.error("Error de conexión. Intenta de nuevo.", { position: "bottom-right", theme: "colored" })
    }
  }

  const inputClass = "bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-vino focus:border-vino block w-full p-3 transition-colors duration-200 outline-none hover:bg-gray-100 focus:bg-white"
  const labelClass = "block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500"

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <Link href="/invitados" className="group flex items-center gap-2 text-gray-500 hover:text-vino transition-colors duration-200">
            <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow text-vino transition-all">
              <PiArrowLeft />
            </div>
            <span className="font-medium text-sm">Volver a la lista</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
            <div className="p-3 bg-vino/10 rounded-xl text-vino">
              <PiUserPlus className="text-3xl" />
            </div>
            <div>
              <h1 className='text-3xl font-light text-gray-900'>Agregar Invitado</h1>
              <p className="text-gray-400 text-sm mt-1">Completa la información para generar la invitación</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Global Fields */}
            <div>
              <label htmlFor="tipo" className={labelClass}>Tipo de Invitado</label>
              <select id="tipo" className={inputClass}
                {...register('tipo')}
                onChange={handleChangeType}
              >
                <option defaultValue="">Elige un tipo</option>
                <option value="1">Familia</option>
                <option value="2">Pareja</option>
                <option value="3">Individual</option>
              </select>
              {errors.tipo?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.tipo?.message}</p>}
            </div>

            {(guestType !== null && guestType !== "Elige un tipo") && (
              <div className="grid gap-6 md:grid-cols-2 animate-fade-in-down">

                {/* Common Names */}
                {(guestType === "Pareja" || guestType === "Individual") && (
                  <>
                    <div>
                      <label htmlFor="primerNombre" className={labelClass}>Primer Nombre</label>
                      <input type="text" id="primerNombre" className={inputClass} placeholder="Ej. Juan"
                        {...register('primerNombre')}
                      />
                      {errors.primerNombre?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.primerNombre?.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="segundoNombre" className={labelClass}>Segundo Nombre</label>
                      <input type="text" id="segundoNombre" className={inputClass} placeholder="Ej. Carlos"
                        {...register('segundoNombre')}
                      />
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="apellidoPaterno" className={labelClass}>Apellido Paterno</label>
                  <input type="text" id="apellidoPaterno" className={inputClass} placeholder="Ej. Pérez"
                    {...register('apellidoPaterno')}
                  />
                  {errors.apellidoPaterno?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.apellidoPaterno?.message}</p>}
                </div>

                <div>
                  <label htmlFor="apellidoMaterno" className={labelClass}>Apellido Materno</label>
                  <input type="text" id="apellidoMaterno" className={inputClass} placeholder="Ej. López"
                    {...register('apellidoMaterno')}
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className={labelClass}>Teléfono (WhatsApp)</label>
                  <input type="text" id="telefono" className={inputClass} placeholder="Ej. 529991234567"
                    {...register('telefono')}
                  />
                  {errors.telefono?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.telefono?.message}</p>}
                </div>

                {guestType === "Familia" && (
                  <div>
                    <label htmlFor="pases" className={labelClass}>Número de Pases</label>
                    <input type="number" id="pases" className={inputClass} placeholder="1-10"
                      {...register('pases', {
                        setValueAs: (v) => v === "" ? undefined : parseInt(v, 10)
                      })}
                    />
                    {errors.pases?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.pases?.message}</p>}
                  </div>
                )}

                {/* VIP Checkbox */}
                <div className="flex items-center mt-6">
                  <input id="vip" type="checkbox" className="w-4 h-4 text-vino bg-gray-100 border-gray-300 rounded focus:ring-vino focus:ring-2"
                    {...register('vip')}
                  />
                  <label htmlFor="vip" className="ml-2 text-sm font-medium text-gray-900">Marcar como invitado VIP</label>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="slug" className={labelClass}>URL Personalizada (Slug)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 text-sm">/</span>
                    <input type="text" id="slug" className={`${inputClass} pl-6`} placeholder="juan-perez-familia"
                      {...register('slug')}
                    />
                  </div>
                  {errors.slug?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.slug?.message}</p>}
                </div>

                {guestType === "Pareja" && (
                  <div className="md:col-span-2 pt-6 mt-2 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-vino mb-4">Datos de la Pareja</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="primerNombrePareja" className={labelClass}>Nombre (Pareja)</label>
                        <input type="text" id="primerNombrePareja" className={inputClass} placeholder="Ej. María"
                          {...register('primerNombrePareja')}
                        />
                        {errors.primerNombrePareja?.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.primerNombrePareja?.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="apellidoPaternoPareja" className={labelClass}>Apellido (Pareja)</label>
                        <input type="text" id="apellidoPaternoPareja" className={inputClass} placeholder="Ej. Gómez"
                          {...register('apellidoPaternoPareja')}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {(guestType !== null && guestType !== "Elige un tipo") && (
              <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                <button type="submit" className="px-8 py-3 text-sm font-medium text-center text-white bg-vino rounded-lg shadow-md hover:bg-vino/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  Guardar Invitado
                </button>
              </div>
            )}

          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default AgregarInvitado