import { FaChartBar, FaCode } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiPhp, SiPython, SiNodedotjs, SiExpress,
    SiLaravel, SiHtml5, SiCss, SiReact, SiNextdotjs, SiTailwindcss,
    SiBootstrap, SiSass, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiPrisma,
    SiGit, SiGithub, SiLooker, SiGooglebigquery, SiPostman, SiEslint, SiGnubash, SiFigma, SiFastapi, SiDocker,
    SiPandas, SiNumpy, SiStreamlit,
} from "react-icons/si";
import type { SkillCategory, SpokenLanguage } from "@/types";

// Union of the SKILLS sections of both CVs (SWE and DE), plus BigQuery (owner request, not on the CVs).
// Prado, Matplotlib and Seaborn have no brand logo, so they use a generic icon.
export const skillCategories: SkillCategory[] = [
    {
        title: "Languages & Frameworks",
        skills: [
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express.js", icon: SiExpress, color: "#E4E9F0" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "Prado", icon: FaCode, color: "#8B98AB" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#E4E9F0" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#663399" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "Sass", icon: SiSass, color: "#CC6699" },
        ],
    },
    {
        title: "Data & Tools",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Redis", icon: SiRedis, color: "#FF4438" },
            { name: "Prisma", icon: SiPrisma, color: "#E4E9F0" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#E4E9F0" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "ESLint", icon: SiEslint, color: "#8080F2" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
    {
        title: "Data & Analytics",
        skills: [
            { name: "pandas", icon: SiPandas, color: "#E4E9F0" },
            { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
            { name: "Matplotlib", icon: FaChartBar, color: "#8B98AB" },
            { name: "Seaborn", icon: FaChartBar, color: "#8B98AB" },
            { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
            { name: "Looker Studio", icon: SiLooker, color: "#4285F4" },
            { name: "BigQuery", icon: SiGooglebigquery, color: "#669DF6" },
        ],
    },
];

export const spokenLanguages: SpokenLanguage[] = [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Professional" },
];
