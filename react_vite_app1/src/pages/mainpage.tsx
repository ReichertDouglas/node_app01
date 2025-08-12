export default function MainPage() {
    return (
        <main className='flex flex-col items-center p-8 bg-gradient-to-r from-red-200 to-purple-700 min-h-screen'>
            <h1 className="text-3xl font-bold text-shadow-lg">Bem-vindo React+Vite+TailwindCSS</h1>
            <p className="text-md mt-10">Páginas web interativas e responsivas</p>
            <hr className="border-1 w-full"></hr>
            <p className="text-md mt-10">Quer saber como tudo funciona</p>
            <label className="text-md rounded-lg border-2 px-3 mt-2 bg-purple-800 text-white">Clique aqui</label>
        </main>
    )
}