import { useEffect, useState } from 'react'
import axios from 'axios'

function UsuariosList({ chave }) {
    const [usuarios, setUsuarios] = useState([])
    const [editandoId, setEditandoId] = useState(null)
    const [nomeEditado, setNomeEditado] = useState("")

    const fetchUsuarios = async () => {
        const res = await axios.get('http://localhost:3000/usuarios')
        setUsuarios(res.data)
    }

    useEffect(() => {
        fetchUsuarios()
    }, [chave])

    const deleteUsuario = async (id) => {
        await axios.delete(`http://localhost:3000/usuarios/${id}`)
        setUsuarios(usuarios.filter(usuario => usuario.id !== id))
    }

    const editaUsuario = (usuario) => {
        setEditandoId(usuario.id)
        setNomeEditado(usuario.nome)
        console.log('Id:', usuario.id, 'nome:', usuario.nome)
    }

    const cancelarEdicao = () => {
        setEditandoId(null)
        setNomeEditado("")
    }

    const salvaEdicao = async (id) => {
        if (!nomeEditado) return;
        const res = await axios.put(`http://localhost:3000/usuarios/${id}`, { nome: nomeEditado })
        const usuarioAtualizado = res.data
        cancelarEdicao()
    }

    return (
        <div>
            <h3>Lista de usuarios cadastrados:</h3>
            {usuarios.length > 0 ? (
                <ul>
                    {usuarios.map((usuario, index) => (
                        <li key={index}>
                            {editandoId === usuario.id ? (
                                <>
                                    <input type="text" value={nomeEditado}
                                        onChange={e => setNomeEditado(e.target.value)} 
                                    />
                                    <button onClick={() => salvaEdicao(editandoId)}>Salvar</button>
                                    <button onClick={() => cancelarEdicao()}>Cancelar</button>
                                </>
                            ) : (
                                <>
                                    ID: {usuario.id} -
                                    Nome: {usuario.nome || `Usuário ${index + 1}`}
                                    <button onClick={() => deleteUsuario(usuario.id)}>Excluir</button>
                                    <button onClick={() => editaUsuario(usuario)}>Editar</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum usuário cadastrado.</p>
            )}
        </div>
    )
}

export default UsuariosList;