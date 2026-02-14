'use client'
import { Button } from "./Button"

export const EnvelopeTicket = ({ invitado, companiaInfo, confirmed, handleConfirmacion }) => {
    return (
        <div className="relative w-full max-w-xl mx-auto mt-16 perspective-1000">

            {/* Envelope Container */}
            <div className="relative bg-secondary shadow-2xl rounded-lg overflow-hidden border border-border">

                {/* Envelope Flap (Decoration) */}
                <div className="absolute top-0 left-0 w-full h-8 bg-muted border-b border-border transform -skew-y-1 origin-top-left z-0"></div>

                {/* Ticket Content (Sliding out effect) */}
                <div className="relative z-10 m-4 md:m-8 bg-card border-2 border-dashed border-border p-6 md:p-10 shadow-sm flex flex-col items-center gap-6">



                    {/* Guest Info */}
                    <div className="text-center space-y-2">
                        <p className="font-script text-3xl text-accent mb-2">Invitación Especial Para</p>
                        <h3 className="text-2xl md:text-4xl text-foreground font-serif leading-tight">
                            {`${invitado.primer_nombre} ${invitado.apellido_paterno} ${typeof invitado.apellido_materno === 'string' ? invitado.apellido_materno : ''}`}
                            {companiaInfo && (
                                <span className="block mt-1 text-xl md:text-3xl text-muted-foreground">
                                    & {companiaInfo.primer_nombre} {companiaInfo?.apellido_paterno}
                                </span>
                            )}
                        </h3>
                    </div>

                    {/* Thin Solid Line Decoration */}
                    <div className="w-full h-px border-b border-border my-4"></div>

                    {/* Action Area */}
                    <div className="w-full flex justify-center pt-2">
                        {confirmed ? (
                            <div className="w-full bg-green-50 text-green-800 p-4 rounded text-center border border-green-100">
                                <p className="font-medium">¡ASISTENCIA CONFIRMADA!</p>
                                <p className="text-xs mt-1 text-green-700">Te esperamos</p>
                            </div>
                        ) : (
                            <div onClick={(e) => { handleConfirmacion(invitado.id_invitado, e) }}>
                                <Button>
                                    CONFIRMAR
                                </Button>
                            </div>
                        )}
                    </div>

                    <p className="text-primary font-bold text-lg mt-2 mb-2">
                        {invitado.pases} {invitado.pases === 1 ? 'PASE' : 'PASES'}
                    </p>
                </div>
            </div>
        </div>
    )
}
