import React from "react"
import UsuariosList from "./components/UsuariosList"
import UsuariosForm from "./components/UsuariosForm"


function App() {

  const [usuarios, setUsuarios] = React.useState(false);

  const handleAddUsuario = () => {
    setUsuarios((prev) => !prev);
  };

  return (
    <div>
      <h1>Gerenciamento de Usuario - UniSenai</h1>
      <UsuariosForm onUsuarioAdd={handleAddUsuario}/>
      <UsuariosList chave={usuarios}/>
    </div>
  );
}

export default App;