export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center mt-10">
            <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Evandri Ridho Hasmono
            </p>
        </footer>
    );
}