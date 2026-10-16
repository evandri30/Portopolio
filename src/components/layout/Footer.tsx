import { profile } from "@/data/profile";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-900 bg-black py-8 text-center mt-10">
            <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} {profile.name}
            </p>
        </footer>
    );
}
