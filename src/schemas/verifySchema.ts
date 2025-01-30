import {z} from 'zod'

export const verifySchemma = z.object({
               code:z.string(),
})