import { FaReact, FaRocket } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import WelcomeAlert from "../components/alerts/welcomeAlert";

export default function MainPage() {
  

  return (
    <div className="flex flex-col items-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl text-center">
        <FaReact className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-spin" />
        <div className="flex items-center gap-1.5">
          <FcIdea className="hidden sm:inline md:w-10 md:h-10 text-green-500 transition" />
          <h1 className="text-3xl font-bold text-shadow-lg">
            Bem-vindo React+Vite+TailwindCSS
          </h1>
          <FcIdea className="hidden sm:inline md:w-10 md:h-10 text-green-500 transition" />
        </div>
        <p className="text-md mt-5">Páginas web interativas e responsivas</p>
        <hr className="border-1 w-full"></hr>
        <p className="text-md mt-10">Quer saber como tudo funciona</p>
        <button
          className="text-md rounded-lg border-2 p-3 mt-2 bg-purple-800 text-white hover:bg-purple-500 shadow-md transition transform hover:scale-105"
          onClick={WelcomeAlert}
        >
          <FaRocket className="inline-block mr-2" />
          Clique aqui
        </button>
      </div>
    </div>
  );
}
