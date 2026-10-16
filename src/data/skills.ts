import {
    SiJavascript, SiTypescript, SiPhp, SiPython, SiNodedotjs, SiExpress,
    SiLaravel, SiHtml5, SiCss, SiReact, SiNextdotjs, SiTailwindcss,
    SiBootstrap, SiSass, SiMongodb, SiMysql, SiPostgresql, SiPrisma,
    SiGit, SiGithub, SiPostman, SiEslint, SiGnubash, SiFigma, SiFastapi, SiDocker,
} from "react-icons/si";
import type { SkillCategory } from "@/types";

// Mirrors the SKILLS section of the CV.
export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#1572B6" },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#F5F5F5" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#F5F5F5" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "Sass", icon: SiSass, color: "#CC6699" },
        ],
    },
    {
        title: "Data & Tools",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Prisma", icon: SiPrisma, color: "#F5F5F5" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#F5F5F5" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
];
