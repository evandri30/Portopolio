import type { NavLink } from "@/types";

// Each href must match the `id` of a <section> rendered in src/app/page.tsx.
export const navLinks: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];
