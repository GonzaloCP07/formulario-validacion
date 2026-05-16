import { z } from 'zod'

export const schema = z.object({
  nombre: z
    .string()
    .min(1, { message: 'El nombre es obligatorio' })
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'El email es obligatorio' })
    .email({ message: 'El email debe tener un formato válido (ejemplo@dominio.com)' }),
  curso: z
    .enum(['1 DAM', '2 DAM', ''])
    .refine((val) => val !== '', {
      message: 'El curso es obligatorio',
    }),
})

export type FormInput = z.input<typeof schema>   
export type FormData = z.infer<typeof schema>   

export const validarDatos = (datos: unknown) => {
  return schema.safeParse(datos)
}