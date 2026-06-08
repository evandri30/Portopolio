export default function Footer() {
    return (
        <footer className="border-t border-neutral-900 bg-black py-8 text-center mt-10">
            <p className="text-neutral-450 text-sm">
                © {new Date().getFullYear()} Evandri Ridho Hasmono
            </p>
        </footer>
    );
}