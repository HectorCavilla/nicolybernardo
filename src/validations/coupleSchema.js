import { z } from "zod"
import { tiposEnum } from "./enumsValidationModels"

export const coupleSchema = z.object(
    {
        tipo: z.literal(tiposEnum.COUPLE),
        primerNombre: z.string()
            .min(3, {
                message: "El nombre debe contener al menos 3 caracteres."
            }),
        segundoNombre: z.string(),
        apellidoPaterno: z.string()
            .min(3, {
                message: "El apellido paterno debe contener al menos 3 caracteres."
            }),
        apellidoMaterno: z.string(),
        pases: z.number().default(2),
        telefono: z.string()
            .length(10, {
                message: "El teléfono debe ser de 10 caracteres."
            }),
        slug: z.string()
            .min(3, {
                message: "El URL debe contener al menos 3 caracteres."
            }),
        primerNombrePareja: z.string()
            .min(3, {
                message: "El nombre de la pareja debe contener al menos 3 caracteres."
            }),
        apellidoPaternoPareja: z.string()
    }
).required({
    primerNombre: true,
    apellidoPaterno: true,
    primerNombrePareja: true,
    telefono: true,
    slug: true
});