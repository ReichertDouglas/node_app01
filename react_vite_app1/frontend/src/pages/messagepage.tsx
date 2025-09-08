import { useNavigate } from "react-router-dom";
import { onDelete, readMessage } from "../controller/messagecontroller";
import type { messageDataType } from "./types/messageDataType";
import { useEffect, useState } from "react";

export default function MessagePage() {
  const [message, setMessage] = useState<messageDataType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleDelete = (id : number) =>{
    onDelete(id).then(()=>{
      fetchMessages();
    })
  }

  const handleUpdate = (id:number , msg: messageDataType) => {
    navigate(`/mensagens/${id}`, {state : {msg}})
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
                <button onClick={() => {handleDelete(msg.id)}} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 mr-5">
                  Excluir
                </button>
                <button onClick={() => {handleUpdate(msg.id, msg)}} className="mt-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Editar
                </button>
            </div>
        ))} 
        {error && <p className="">{error}</p>}
      </div>
    </div>
  );
}
