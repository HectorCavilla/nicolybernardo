import { z } from "zod"
import { tiposEnum } from "./enumsValidationModels"

export const familySchema = z.object({
    tipo: z.literal(tiposEnum.FAMILY),
    primerNombre: z.string().default("Familia"),
    segundoNombre: z.string().default(""),
    apellidoPaterno: z.string()
        .min(3, {
            message: "El apellido paterno debe contener al menos 3 caracteres."
        }),
    apellidoMaterno: z.string().nullable(),
    pases: z.number({
                required_error: "Por favor ingresa la cantidad de pases",
                invalid_type_error: "Pases debe ser un número",
            })
        .refine((val) => !Number.isNaN(parseInt(val, 10))),
    telefono: z.string()
        .length(10, {
            message: "El teléfono debe ser de 10 caracteres."
        }),
    slug: z.string()
        .min(3, {
            message: "El URL debe contener al menos 3 caracteres."
        })
}
).required({
    apellidoPaterno: true,
    pases: true,
    telefono: true,
    slug: true
})