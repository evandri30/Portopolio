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
        "Software and data engineer building AI-powered web applications and the data pipelines behind them.",
    summary:
        "Software and data engineer (Informatics, GPA 3.85) and BNSP-certified Associate Data Engineer who builds AI-powered web applications end to end. At Mahkamah Konstitusi, I solo-built an LLM essay pre-grading system and a RAG chatbot for the internal HR system, including a pipeline that indexed ~1,000 pages into a PostgreSQL (pgvector) schema I designed and an API that serves HR data without exposing the production database. I work across TypeScript (Next.js, React), Python (FastAPI), PHP (Laravel), SQL, PostgreSQL, and Docker.",
    contactHeadline: "Got something that needs building? Let's talk.",
    queryResult: [
        { column: "role", value: role },
        { column: "currently", value: "SWE Intern, Mahkamah Konstitusi" },
        { column: "stack", value: "Python, TypeScript, SQL, PostgreSQL" },
        { column: "gpa", value: "3.85" },
        { column: "certified", value: "Associate Data Engineer (BNSP)" },
    ],
    facts: [
        { label: "Based in", value: "Bekasi, West Java" },
        { label: "Currently", value: "Software Engineer Intern at Mahkamah Konstitusi RI" },
        { label: "Certified", value: "Associate Data Engineer" },
        { label: "Speaks", value: "Indonesian (native), English (professional)" },
    ],
    // One CV per role; the site itself is the union of both.
    cvs: [
        { label: "Software Engineer CV", path: "/cv/CV_Evandri_Ridho_Hasmono_SWE.pdf" },
        { label: "Data Engineer CV", path: "/cv/CV_Evandri_Ridho_Hasmono_DE.pdf" },
    ],
    socials: [
        { label: "GitHub", href: "https://github.com/evandri30", icon: FaGithub },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/evandriridho", icon: FaLinkedin },
    ],
};
