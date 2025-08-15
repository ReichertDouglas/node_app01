import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="flex justify-center">
            <ul className="flex gap-10 text-sm">
                <li className="hover:cursor-pointer"><Link to="/">Início</Link></li>
                <li className="hover:cursor-pointer"><Link to="/sobre">Sobre</Link></li>
                <li className="hover:cursor-pointer"><Link to="/servicos">Serviços</Link></li>
                <li className="hover:cursor-pointer"><Link to="/contatos">Contatos</Link></li>
            </ul>
        </nav>
    )
}