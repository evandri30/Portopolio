import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Profile } from "@/types";

const role = "Software & Data Engineer";

export const profile: Profile = {
    name: "Evandri Ridho Hasmono",
    shortName: "Evandri",
    role,
    location: "Bekasi, West Java",
    email: "evandriridhoh@gmail.com",
    tagline:
        "Software engineer who builds internal tools and APIs, and a data engineer who writes SQL every day.",
    summary:
        "Informatics graduate (GPA 3.85) and certified Associate Data Engineer with hands-on experience building internal data tools and APIs on PostgreSQL and MySQL. I write SQL daily, from standard queries to vector similarity search, and use Python and Looker Studio to process, analyze, and visualize data. I also bring full-stack development experience in PHP, Node.js, and React to support internal applications and data integration.",
    contactHeadline: "Got data that needs a pipeline? Let's talk.",
    queryResult: [
        { column: "role", value: role },
        { column: "currently", value: "SWE Intern, Mahkamah Konstitusi" },
        { column: "stack", value: "JS/TS, PHP, and Python" },
        { column: "gpa", value: "3.85" },
    ],
    facts: [
        { label: "Based in", value: "Bekasi, West Java" },
        { label: "Currently", value: "Software Engineer Intern at Mahkamah Konstitusi RI" },
        { label: "Certified", value: "Associate Data Engineer" },
        { label: "Speaks", value: "Indonesian (native), English (professional)" },
    ],
    cvPath: "/cv/cv_evandri.pdf",
    socials: [
        { label: "GitHub", href: "https://github.com/evandri30", icon: FaGithub },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/evandriridho", icon: FaLinkedin },
    ],
};
