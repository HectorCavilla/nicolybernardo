'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import { PiSignIn } from "react-icons/pi"
import { setCookie } from 'cookies-next'; // We'll need to install this or use a helper
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`${process.env.API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })

            if (res.ok) {
                const data = await res.json()
                // Create cookie manually if not using a library, or use a library
                document.cookie = `auth_token=${data.token}; path=/; max-age=86400; SameSite=Strict`
                toast.success("Bienvenido", { position: "bottom-center", theme: "colored" })
                router.push('/invitados')
            } else {
                const errorData = await res.json().catch(() => ({}))
                const message = errorData.message || "Credenciales inválidas"
                toast.error(message, { position: "bottom-center", theme: "colored" })
            }
        } catch (error) {
            console.error(error)
            toast.error("Error de conexión", { position: "bottom-center", theme: "colored" })
        }
    }

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-4 bg-vino/10 rounded-full text-vino mb-4">
                        <PiSignIn className="text-4xl" />
                    </div>
                    <h1 className='text-3xl font-light text-gray-900 text-center'>Iniciar Sesión</h1>
                    <p className="text-gray-400 text-sm mt-2 text-center">Acceso al Panel de Control</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-vino focus:border-vino block w-full p-3 transition-colors duration-200 outline-none hover:bg-gray-100 focus:bg-white"
                            placeholder="admin"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-vino focus:border-vino block w-full p-3 transition-colors duration-200 outline-none hover:bg-gray-100 focus:bg-white"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full px-8 py-3 text-sm font-medium text-center text-white bg-vino rounded-lg shadow-md hover:bg-vino/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        Ingresar
                    </button>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}
