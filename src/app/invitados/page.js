'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'; // You might need to install this or use document.cookie
import { PiWhatsappLogoDuotone, PiUserPlusFill, PiSignOut, PiChatDotsFill, PiFloppyDiskFill, PiXBold } from "react-icons/pi"
import { FaCheck, FaPen, FaTrash, FaStar, FaRegStar } from "react-icons/fa6"
import { fetcher } from '@/app/helpers/helpers'
import "react-toastify/dist/ReactToastify.css"

export default function ListaInvitados() {
    const [invitados, setInvitados] = useState(null)
    const [whatsappMessage, setWhatsappMessage] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tempMessage, setTempMessage] = useState("")
    const [isSaving, setIsSaving] = useState(false)

    const { error, isLoading, mutate } = useSWR(`${process.env.API_URL}/api/invitados/4`, fetcher, {
        onSuccess: (data) => setInvitados(data)
    })

    // Fetch WhatsApp message
    useEffect(() => {
        fetch('/api/settings/whatsapp')
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setWhatsappMessage(data.message)
                    setTempMessage(data.message)
                }
            })
            .catch(err => console.error("Error fetching whatsapp message:", err))
    }, [])

    const handleSaveMessage = async () => {
        setIsSaving(true)
        try {
            const res = await fetch('/api/settings/whatsapp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: tempMessage })
            })
            if (res.ok) {
                setWhatsappMessage(tempMessage)
                setIsModalOpen(false)
                toast.success("Mensaje de WhatsApp actualizado", { position: "bottom-right", theme: "colored" })
            } else {
                throw new Error("Failed to save")
            }
        } catch (error) {
            toast.error("Error al guardar el mensaje", { position: "bottom-right", theme: "colored" })
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id) => {
        if (!confirm("¿Estás seguro de eliminar este invitado?")) return;

        try {
            const res = await fetch(`${process.env.API_URL}/api/invitados/eliminar`, {
                method: 'DELETE',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            })

            if (res.statusText === "OK") {
                const guestsList = invitados.filter(invitado => invitado.id_invitado !== id)
                toast.success("Invitado eliminado.", { position: "bottom-right", theme: "colored" })
                setInvitados(guestsList)
            }
        } catch (Error) {
            console.log(Error.message)
            toast.error("Error al eliminar.", { position: "bottom-right", theme: "colored" })
        }
    }

    const handleToggleVip = async (guest) => {
        const newVipStatus = !guest.vip;
        // Optimistic update
        const updatedInvitados = invitados.map(i => i.id_invitado === guest.id_invitado ? { ...i, vip: newVipStatus } : i);
        setInvitados(updatedInvitados);

        try {
            // Map snake_case database fields to camelCase API expected fields
            const payload = {
                idInvitado: guest.id_invitado,
                tipo: guest.tipo,
                confirmado: guest.confirmado,
                primerNombre: guest.primer_nombre || "",
                segundoNombre: guest.segundo_nombre || "",
                apellidoPaterno: guest.apellido_paterno || "",
                apellidoMaterno: guest.apellido_materno || "",
                telefono: guest.telefono || "",
                pases: guest.pases,
                slug: guest.slug || "",
                primerNombrePareja: guest.nombre_pareja || "",
                apellidoPaternoPareja: guest.apellido_pareja || "",
                vip: newVipStatus,
                evento: 4 // Derived from the useSWR URL (/api/invitados/4)
            };

            // Include companion ID if applicable (same logic as EditarInvitado)
            if (guest.tipo === 2 && guest.id_acompanante) {
                payload.idAcompanante = guest.id_acompanante;
            }

            const res = await fetch(`${process.env.API_URL}/api/invitados/editar`, {
                method: 'PUT',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                console.error("API Error:", errorData);
                throw new Error(errorData.message || "Failed to update VIP status");
            }
            toast.success(`Estatus VIP actualizado para ${guest.primer_nombre}`, { position: "bottom-right", theme: "colored", autoClose: 1000 });
            mutate(); // Revalidate data to ensure consistency
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Error actualizando estatus VIP", { position: "bottom-right", theme: "colored" });
            // Revert optimistic update
            setInvitados(invitados);
        }
    };

    const router = useRouter()

    const handleLogout = () => {
        document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        router.push('/login')
    }

    if (error) return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-red-100">
                <p className="text-red-500 text-xl font-light">Hubo un error al cargar los invitados.</p>
            </div>
        </div>
    )

    if (isLoading) return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vino"></div>
        </div>
    )

    return (
        <main className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-4'>
                    <div>
                        <h1 className='text-4xl font-light text-vino tracking-tight'>Lista de Invitados</h1>
                        <p className="text-gray-500 mt-2 text-sm uppercase tracking-wider">Gestión del Evento</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setTempMessage(whatsappMessage)
                                setIsModalOpen(true)
                            }}
                            className="group relative inline-flex items-center gap-2 px-5 py-3 bg-white text-vino text-sm font-medium rounded-full shadow-sm hover:bg-vino hover:text-white hover:shadow-md transition-all duration-300"
                            title="Configurar mensaje de WhatsApp"
                        >
                            <PiChatDotsFill className="text-lg" />
                            <span className="hidden sm:inline">Mensaje WhatsApp</span>
                        </button>
                        <button onClick={handleLogout} className="group relative inline-flex items-center gap-2 px-5 py-3 bg-white text-gray-600 text-sm font-medium rounded-full shadow-sm hover:text-red-500 hover:shadow-md transition-all duration-300">
                            <PiSignOut className="text-lg" />
                            <span>Salir</span>
                        </button>
                        <Link href="/invitados/agregar" className="group relative inline-flex items-center gap-2 px-8 py-3 bg-vino text-white text-sm font-medium rounded-full shadow-md transition-all duration-300 hover:bg-vino/90 hover:shadow-lg hover:-translate-y-0.5">
                            <PiUserPlusFill className="text-lg" />
                            <span>Nuevo Invitado</span>
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {invitados instanceof Array && invitados.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-widest text-gray-500">
                                        <th className="px-6 py-5 font-semibold">Invitado</th>
                                        <th className="px-6 py-5 font-semibold text-center">Confirmado</th>
                                        <th className="px-6 py-5 font-semibold text-center">VIP</th>
                                        <th className="px-6 py-5 font-semibold text-center">WhatsApp</th>
                                        <th className="px-6 py-5 font-semibold text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {invitados.map((guest) => {
                                        // Construct WhatsApp Link
                                        const finalMessage = whatsappMessage.replace('{slug}', guest.slug);
                                        const whatsappUrl = `https://api.whatsapp.com/send?phone=+521${guest.telefono}&text=${encodeURIComponent(finalMessage)}`;

                                        return (
                                            <tr key={guest.id_invitado} className="hover:bg-vino/5 transition-colors duration-200 group">
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-gray-800 font-medium text-base">
                                                            {guest.primer_nombre} {guest.apellido_paterno} {guest.apellido_materno}
                                                        </span>
                                                        <span className="text-gray-400 text-xs mt-0.5 uppercase tracking-wide">
                                                            {guest.tipo === 1 ? 'Familia' : guest.tipo === 2 ? 'Pareja' : 'Individual'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {guest.confirmado ? (
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                            <FaCheck className="text-[10px]" /> Confirmado
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                                                            Pendiente
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <button
                                                        onClick={() => handleToggleVip(guest)}
                                                        className="p-2 rounded-full hover:bg-gold/10 transition-colors focus:outline-none"
                                                        title={guest.vip ? "Quitar VIP" : "Marcar como VIP"}
                                                    >
                                                        {guest.vip ? (
                                                            <FaStar className="text-gold text-lg" />
                                                        ) : (
                                                            <FaRegStar className="text-gray-300 text-lg hover:text-gold" />
                                                        )}
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <a
                                                        href={whatsappUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                    >
                                                        <PiWhatsappLogoDuotone className="text-xl" />
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Link
                                                            href={`/invitados/editar/${guest.id_invitado}`}
                                                            className="p-2 text-gray-400 hover:text-vino hover:bg-vino/10 rounded-lg transition-colors"
                                                            title="Editar"
                                                        >
                                                            <FaPen size={14} />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(guest.id_invitado)}
                                                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                            title="Eliminar"
                                                        >
                                                            <FaTrash size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                            <div className="p-4 bg-gray-50 rounded-full mb-4">
                                <PiUserPlusFill className="text-4xl text-gray-300" />
                            </div>
                            <p className="text-lg font-light">No hay invitados registrados aún</p>
                            <Link href="/invitados/agregar" className="mt-4 text-vino hover:text-vino/80 text-sm font-medium underline underline-offset-4">
                                Agregar el primero
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* WhatsApp Message Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="px-6 py-4 bg-vino text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <PiChatDotsFill className="text-xl" />
                                <h2 className="text-lg font-medium">Configurar Mensaje de WhatsApp</h2>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <PiXBold size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-4">
                                Este es el mensaje base que se enviará a los invitados. Usa <span className="font-mono font-bold text-vino">{"{slug}"}</span> donde quieras que aparezca el enlace personalizado del invitado.
                            </p>
                            <textarea
                                value={tempMessage}
                                onChange={(e) => setTempMessage(e.target.value)}
                                className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-vino/20 focus:border-vino outline-none transition-all resize-none text-gray-700 font-sans"
                                placeholder="Escribe el mensaje aquí..."
                            />
                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveMessage}
                                    disabled={isSaving}
                                    className="inline-flex items-center gap-2 px-8 py-2 bg-vino text-white font-medium rounded-full shadow-md hover:bg-vino/90 transition-all disabled:opacity-50"
                                >
                                    {isSaving ? "Guardando..." : (
                                        <>
                                            <PiFloppyDiskFill />
                                            <span>Guardar Cambios</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </main>
    )
}