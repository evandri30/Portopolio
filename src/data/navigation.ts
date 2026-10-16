import type { NavLink } from "@/types";

// Each href must match the `id` of a <section> rendered in src/app/page.tsx.
export const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];
