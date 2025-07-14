export default function Footer() {
    return (
        <footer className="bg-[#02203b] py-4 text-center text-sm text-[#d5d2d1]">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
                Mensageiros do Una
            </span>{" "}
            – Todos os direitos reservados.
        </footer>
    );
}
