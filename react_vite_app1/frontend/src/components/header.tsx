import React, { Suspense } from "react";
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Nav = React.lazy(() => import("./nav"));

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-6 text-center">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-extrabold border-1 rounded-full px-4">
          U
        </div>
        <div className="flex space-x-5 text-md">
          <button className="flex items-center gap-2 hover:text-purple-300 transition">
            <FaUser className="w-5 h-5" />
            <span className="hidden sm:inline">Cadastar</span>
          </button>
          <button className="flex items-center gap-2 hover:text-purple-300 transition">
            <FaSignInAlt className="w-5 h-5" />
            <span className="hidden sm:inline">Logar</span>
          </button>
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Carregando...</div>}>
          <Nav />
        </Suspense>
      </div>
    </header>
  );
}
