import axios from 'axios';
import React, { useState } from 'react';

function UsuariosForm({onUsuarioAdd}) {
    const [usuario, setUsuario] = useState("");
    const [error , setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!usuario.trim()) {
            setError('O nome do usuário é obrigatório.');
            return;
        }
        const res = await axios.post('http://localhost:3000/usuarios', { nome: usuario });
        setUsuario('');
        if (onUsuarioAdd) {
            onUsuarioAdd();
            setError(null);
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Salvar</button>
            </form>
        </div>
    );
}

export default UsuariosForm;