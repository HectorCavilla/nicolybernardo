import { z } from "zod"
import { tiposEnum } from "./enumsValidationModels"

export const guestSchema = z.object(
  {
    evento: z.number().default(4),
    tipo: z.nativeEnum(tiposEnum, {
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case 'invalid_type':
            return { message: 'Le sexe doit être homme ou femme.' };
          case 'invalid_enum_value':
            return { message: 'Le sexe doit être homme ou femme.' };
          default:
            return { message: 'Sexe est invalide' };
        }
      }
    }),
    confirmado: z.number().default(0)
  }
).required({
  tipo: true
})