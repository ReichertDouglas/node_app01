import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from "react-imask";
import { contactSchema } from "./schemas/contactSchema";
import { type FormData } from "./schemas/contactSchema";

export default function ContactPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-red-200 to-purple-700 min-h-screen">
      <h1 className="text-3xl font-bold text-shadow-lg">
        Entre em contato conosco
      </h1>
      <p className="text-md mt-10">Será em prazer responder suas perguntas</p>
      <hr className="border-1 w-full"></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-md mt-10">Digite sua pergunta:</p>
        <input
          type="text"
          {...register("pergunta")}
          className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
        ></input>
        <p className="text-sm text-red-900 mt-1">{errors.pergunta?.message}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-md mt-4">Digite seu email:</p>
            <input
              type="email"
              {...register("email")}
              className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
            ></input>
            <p className="text-sm text-red-900 mt-1">{errors.email?.message}</p>
          </div>
          <div>
            <p className="text-md mt-4">Digite seu telefone:</p>
            <Controller
              name="telefone"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  mask="(00)00000-0000"
                  className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
                  onAccept={(value) => field.onChange(value)}
                />
              )}
            />
            <p className="text-sm text-red-900 mt-1">
              {errors.telefone?.message}
            </p>
          </div>
        </div>
        <p className="text-md mt-4">Digite seu rua:</p>
        <input
          type="rua"
          {...register("rua")}
          className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
        ></input>
        <p className="text-sm text-red-900 mt-1">{errors.rua?.message}</p>
        <p className="text-md mt-4">Digite seu numero:</p>
        <input
          type="numero"
          {...register("numero")}
          className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
        ></input>
        <p className="text-sm text-red-900 mt-1">{errors.numero?.message}</p>
        <p className="text-md mt-4">Digite seu complemento:</p>
        <input
          type="complemento"
          {...register("complemento")}
          className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
        ></input>
        <p className="text-sm text-red-900 mt-1">
          {errors.complemento?.message}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-md mt-4">Digite seu cep:</p>
            <IMaskInput
              mask="00000-000"
              {...register("cep")}
              className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
            />
            <p className="text-sm text-red-900 mt-1">{errors.cep?.message}</p>
          </div>
          <div>
            <p className="text-md mt-4">Digite seu bairro:</p>
            <input
              type="bairro"
              {...register("bairro")}
              className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"
            ></input>
            <p className="text-sm text-red-900 mt-1">
              {errors.bairro?.message}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
