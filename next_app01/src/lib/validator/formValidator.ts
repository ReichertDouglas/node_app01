import {z} from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, {message: 'Nome deve ter no mínimo 2 caracteres'}),
    email: z.email({message: 'E-mail inválido'}),
    phone: z.string().min(10, {message: 'Fone deve ter no mínimo 10 dígitos'}),
    cpf: z.string().min(11, {message: 'CPF inválido'}),
    cep: z.string().min(8, {message: 'CEP deve ter no mínimo 8 dígitos'}),
    message: z.string().min(10, {message: 'Mensagem deve ter no mínimo 10 caracteres'}),
})

export type ContactFormData = z.infer<typeof contactFormSchema>;