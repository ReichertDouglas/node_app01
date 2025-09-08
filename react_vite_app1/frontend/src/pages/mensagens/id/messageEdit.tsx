import type { messageDataType } from "../../types/messageDataType";
import { onUpdate } from "../../../controller/messagecontroller";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function MessageEdit() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const msg: messageDataType = location.state?.msg;
  const [editData, setEditData] = useState<messageDataType>(
    msg || {
      pergunta: "",
      email: "",
      cep: "",
      bairro: "",
      telefone: "",
    }
  );

  async function handleSaveEdit() {
    await onUpdate(Number(id), editData);
    navigate("/mensagem");
  }

  return (
    <div className="flex flex-col items-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-shadow-lg">Editar Mensagem</h1>
        <label className="text-left mt-4">Pergunta: </label>
        <input
          type="text"
          value={editData.pergunta}
          onChange={(e) =>
            setEditData({ ...editData, pergunta: e.target.value })
          }
          className="border-2 rounded-lg px-2 mt-2 bg-white text-black w-full"
        />
        <h1 className="text-3xl font-bold text-shadow-lg">Editar Mensagem</h1>
        <label className="text-left mt-4">Email: </label>
        <input
          type="text"
          value={editData.email}
          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
          className="border-2 rounded-lg px-2 mt-2 bg-white text-black w-full"
        />
        <h1 className="text-3xl font-bold text-shadow-lg">Editar Mensagem</h1>
        <label className="text-left mt-4">CEP: </label>
        <input
          type="text"
          value={editData.cep}
          onChange={(e) => setEditData({ ...editData, cep: e.target.value })}
          className="border-2 rounded-lg px-2 mt-2 bg-white text-black w-full"
        />
        <h1 className="text-3xl font-bold text-shadow-lg">Editar Mensagem</h1>
        <label className="text-left mt-4">Bairro: </label>
        <input
          type="text"
          value={editData.bairro}
          onChange={(e) => setEditData({ ...editData, bairro: e.target.value })}
          className="border-2 rounded-lg px-2 mt-2 bg-white text-black w-full"
        />
        <h1 className="text-3xl font-bold text-shadow-lg">Editar Mensagem</h1>
        <label className="text-left mt-4">Telefone: </label>
        <input
          type="text"
          value={editData.telefone}
          onChange={(e) =>
            setEditData({ ...editData, telefone: e.target.value })
          }
          className="border-2 rounded-lg px-2 mt-2 bg-white text-black w-full"
        />
        <button
          onClick={handleSaveEdit}
          className="mt-4 ml-4 bg-gray-500 text-white px-4 py-4 rounded"
        >
          Salvar Edição
        </button>
        <button
          onClick={()=>navigate("/mensagens")}
          className="mt-4 ml-4 bg-gray-500 text-white px-4 py-4 rounded"
        >
          Cnacelar Edição
        </button>
      </div>
    </div>
    )
}
