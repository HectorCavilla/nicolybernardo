import { z } from "zod"
import { guestSchema } from "@/validations/guestSchema"
import { familySchema } from "@/validations/familySchema"
import { coupleSchema } from "@/validations/coupleSchema"
import { singleSchema } from "@/validations/singleSchema"

const schemaConditions = z.discriminatedUnion('tipo', [
    familySchema,
    coupleSchema,
    singleSchema
])

const validationGuestTypeSchema = z.intersection(schemaConditions, guestSchema)

export { validationGuestTypeSchema } 