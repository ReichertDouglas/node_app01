export default function About() {
    return(
        <div className='flex flex-col items-center p-8 bg-gradient-to-r from-red-200 to-purple-700 min-h-screen'>
            <h1 className="text-3xl font-bold text-shadow-lg">Sobre nós</h1>
            <p className="text-md mt-10">Será em prazer responder suas perguntas</p>
            <hr className="border-1 w-full"></hr>
            <p className="text-md mt-10">Digite sua pergunta:</p>
            <input type="text" className="border-2 rounded-lg px-3 mt-2 bg-gray-800 text-white"></input>
        </div>
    )
}