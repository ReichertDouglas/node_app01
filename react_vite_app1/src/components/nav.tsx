import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="flex justify-center">
            <ul className="flex gap-10 text-sm">
                <li className="hover:cursor-pointer"><Link to="/">Início</Link></li>
                <li className="hover:cursor-pointer">Sobre</li>
                <li className="hover:cursor-pointer">Serviços</li>
                <li className="hover:cursor-pointer"><Link to="/contatos">Contatos</Link></li>
            </ul>
        </nav>
    )
}