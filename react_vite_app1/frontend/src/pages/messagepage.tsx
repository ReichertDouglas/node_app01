import { readMessage } from "../controller/messagecontroller";
import type { messageDataType } from "./types/messageDataType";
import { useEffect, useState } from "react";

export default function MessagePage() {
  const [message, setMessage] = useState<messageDataType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  function fetchMessages() {
    readMessage()
      .then((data) => {
        setMessage(data);
        setError(null);
      })
      .catch((err) => {
        console.log("Erro ao ler as mensagens:", err);
        setError("Erro ao ler as mensagens");
      });
  }
  return (
    <div className="flex flex-col items-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-shadow-lg">
          Mensagens Recebidas
        </h1>
        {message.map((msg)=>(
            <div key={msg.id} className="border-b border-gray-300 my-4 pb-4 text-left">
                <p><strong>Pergunta:</strong> {msg.pergunta}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Telefone:</strong> {msg.telefone}</p>
                <p><strong>CEP:</strong> {msg.cep}</p>
                <p><strong>Bairro:</strong> {msg.bairro}</p>
            </div>
        ))} 
        {error && <p className="">{error}</p>}
      </div>
    </div>
  );
}
