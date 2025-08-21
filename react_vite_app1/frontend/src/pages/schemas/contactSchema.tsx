import * as yup from "yup";

export type FormData = {
  pergunta: string;
  email: string;
  cep: string;
  rua: string;
  bairro: string;
  numero: string;
  complemento: string;
  telefone: string;
};

export const contactSchema = yup.object().shape({
    pergunta: yup
      .string()
      .required("O campo é obrigatório")
      .min(3, "A pergunta deve ter no mínimo 3 caracteres"),
    email: yup
      .string()
      .email("Email inválido")
      .required("O campo é obrigatório")
      .min(6, "O email deve ter no mínimo 6 caracteres"),
    cep: yup
      .string()
      .required("O campo é obrigatório")
      .min(8, "A cep deve ter no mínimo 8 caracteres"),
    rua: yup
      .string()
      .required("O campo é obrigatório")
      .min(3, "A rua deve ter no mínimo 3 caracteres"),
    bairro: yup
      .string()
      .required("O campo é obrigatório")
      .min(3, "A bairro deve ter no mínimo 3 caracteres"),
    numero: yup
      .string()
      .required("O campo é obrigatório")
      .min(1, "A numero deve ter no mínimo 1 caracteres"),
    complemento: yup
      .string()
      .required("O campo é obrigatório")
      .min(3, "A complemento deve ter no mínimo 3 caracteres"),
    telefone: yup
      .string()
      .required("O campo é obrigatório")
      .min(11, "O telefone deve ter no mínimo 11 caracteres"),
  });

