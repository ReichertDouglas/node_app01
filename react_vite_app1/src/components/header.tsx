import Nav from './nav'

export default function Header() {

    return (
        <header className="bg-gray-900 text-white p-6 text-center">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="text-2xl font-extrabold border-1 rounded-full px-4">
                    U
                </div>
                <div className="space-x-5 text-md">
                    <button>Cadastar</button>
                    <button>Logar</button>
                </div>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}