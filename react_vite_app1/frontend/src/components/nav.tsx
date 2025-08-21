import { Link } from "react-router-dom";
import { GiFrenchFries } from "react-icons/gi";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center">
      {/* menu desktop */}
      <ul className="hidden sm:flex gap-10 text-sm">
        <li className="hover:cursor-pointer">
          <Link to="/">Início</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="/servicos">Serviços</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="/contatos">Contatos</Link>
        </li>
      </ul>
      {/* menu mobile */}
      <div className="sm:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-800 text-white p-3 rounded-full shadow-md hover:bg-purple-500 transition hover:scale-105 cursor-pointer"
        >
          <GiFrenchFries className="w-6 h-6" />
        </button>
        {isOpen && (
          <ul
            className="sm:flex text-start bg-purple-800 text-white p-4 rounded-lg shadow-lg absolute bottom-16 right-0 space-y-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className="hover:cursor-pointer hover:scale-105">
              <Link to="/">Início</Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-105">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-105">
              <Link to="/servicos">Serviços</Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-105">
              <Link to="/contatos">Contatos</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}