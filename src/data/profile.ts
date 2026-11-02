import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Profile } from "@/types";

const role = "Software Engineer";

export const profile: Profile = {
    name: "Evandri Ridho Hasmono",
    shortName: "Evandri",
    role,
    location: "Bekasi, West Java",
    email: "evandriridhoh@gmail.com",
    tagline:
        "Software engineer building full-stack web applications, from database design through frontend delivery.",
    summary:
        "Software engineer with hands-on experience across the TypeScript, Python, and PHP/Laravel stacks, building full-stack web applications from database design through frontend delivery. I'm comfortable working end-to-end on a problem, from data modeling to system design to production deployment, and I'm currently sharpening my skills in scalable backend architecture and applied data science through independent projects.",
    contactHeadline: "Got something that needs building? Let's talk.",
    queryResult: [
        { column: "role", value: role },
        { column: "currently", value: "SWE Intern, Mahkamah Konstitusi" },
        { column: "stack", value: "TypeScript, Python, and PHP/Laravel" },
        { column: "gpa", value: "3.85" },
    ],
    facts: [
        { label: "Based in", value: "Bekasi, West Java" },
        { label: "Currently", value: "Software Engineer Intern at Mahkamah Konstitusi RI" },
        { label: "Certified", value: "Associate Data Engineer" },
        { label: "Speaks", value: "Indonesian (native), English (professional)" },
    ],
    cvPath: "/cv/CV_SWE_Evandri%20Ridho%20Hasmono.pdf",
    socials: [
        { label: "GitHub", href: "https://github.com/evandri30", icon: FaGithub },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/evandriridho", icon: FaLinkedin },
    ],
};
