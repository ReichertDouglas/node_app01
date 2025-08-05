import axios from 'axios';
import React, { useState } from 'react';

function UsuariosForm({onUsuarioAdd}) {
    const [usuario, setUsuario] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/usuarios', { nome: usuario });
        setUsuario('');
        if (onUsuarioAdd) {
            onUsuarioAdd();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Digite o nome do Usuário</h3>
                <input
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <button type='submit'>Salvar</button>
            </form>
        </div>
    );
}

export default UsuariosForm;