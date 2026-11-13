import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

// Server component on purpose: the year is computed once at build time, so it can't mismatch on hydration.
export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6 lg:px-8">
                <p>
                    © {new Date().getFullYear()} {profile.name}
                </p>
                <a href="#home" className="group inline-flex items-center gap-2 transition-colors hover:text-text">
                    Back to top
                    <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
            </div>
        </footer>
    );
}
