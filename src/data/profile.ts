import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { Profile } from "@/types";

export const profile: Profile = {
    name: "Evandri Ridho Hasmono",
    shortName: "Evandri",
    location: "Bekasi, West Java",
    email: "evandriridhoh@gmail.com",
    summary:
        "Informatics graduate (GPA 3.85) and certified Associate Data Engineer with hands-on experience building internal data tools and APIs on PostgreSQL and MySQL. I write SQL daily, from standard queries to vector similarity search, and use Python and Looker Studio to process, analyze, and visualize data. I also bring full-stack development experience in PHP, Node.js, and React to support internal applications and data integration.",
    roles: [
        "Associate Data Engineer",
        "Software Engineer Intern @ Mahkamah Konstitusi",
        "SQL · Python · PostgreSQL",
    ],
    cvPath: "/cv/cv_evandri.pdf",
    socials: [
        {
            label: "Email",
            href: "mailto:evandriridhoh@gmail.com",
            icon: FaEnvelope,
            hoverClass: "hover:bg-red-500 hover:border-red-500 hover:text-white",
        },
        {
            label: "GitHub",
            href: "https://github.com/evandri30",
            icon: FaGithub,
            hoverClass: "hover:bg-white hover:border-white hover:text-black",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/evandriridho",
            icon: FaLinkedin,
            hoverClass: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
        },
    ],
};
