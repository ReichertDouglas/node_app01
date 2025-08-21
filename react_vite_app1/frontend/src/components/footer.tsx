export default function Footer() {

    const data = new Date();
    const ano = data.getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-6 text-center">
            <p className="text-lg">&copy; Todos direitos reservados. &reg; Marca registrada</p>
            <p className="text-sm">UniSenai, {ano}</p>
        </footer>
    )
}