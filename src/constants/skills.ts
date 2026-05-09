import { createElement } from "react";
import { SkillCategoryProps } from "../types/skill.types";
import {
    SiJavascript, SiTypescript, SiPhp, SiPython, SiNodedotjs, SiExpress,
    SiLaravel, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss,
    SiBootstrap, SiSass, SiMongodb, SiMysql, SiPostgresql, SiPrisma,
    SiGit, SiGithub, SiPostman, SiEslint, SiGnubash, SiFlask, SiFigma
} from "react-icons/si";

export const skillCategories: SkillCategoryProps[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: createElement(SiHtml5, { className: "w-6 h-6 text-[#E34F26]" }) },
            { name: "CSS", icon: createElement(SiCss3, { className: "w-6 h-6 text-[#1572B6]" }) },
            { name: "JavaScript", icon: createElement(SiJavascript, { className: "w-6 h-6 text-[#F7DF1E]" }) },
            { name: "TypeScript", icon: createElement(SiTypescript, { className: "w-6 h-6 text-[#3178C6]" }) },
            { name: "React", icon: createElement(SiReact, { className: "w-6 h-6 text-[#61DAFB]" }) },
            { name: "Next.js", icon: createElement(SiNextdotjs, { className: "w-6 h-6 text-slate-100" }) },
            { name: "Tailwind", icon: createElement(SiTailwindcss, { className: "w-6 h-6 text-[#06B6D4]" }) },
            { name: "Bootstrap", icon: createElement(SiBootstrap, { className: "w-6 h-6 text-[#7952B3]" }) },
            { name: "Sass", icon: createElement(SiSass, { className: "w-6 h-6 text-[#CC6699]" }) },
        ]
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "PHP", icon: createElement(SiPhp, { className: "w-6 h-6 text-[#777BB4]" }) },
            { name: "Python", icon: createElement(SiPython, { className: "w-6 h-6 text-[#3776AB]" }) },
            { name: "Node.js", icon: createElement(SiNodedotjs, { className: "w-6 h-6 text-[#339933]" }) },
            { name: "Express.js", icon: createElement(SiExpress, { className: "w-6 h-6 text-slate-100" }) },
            { name: "Laravel", icon: createElement(SiLaravel, { className: "w-6 h-6 text-[#FF2D20]" }) },
            { name: "Flask", icon: createElement(SiFlask, { className: "w-6 h-6 text-[#000000]" }) },
            { name: "MongoDB", icon: createElement(SiMongodb, { className: "w-6 h-6 text-[#47A248]" }) },
            { name: "MySQL", icon: createElement(SiMysql, { className: "w-6 h-6 text-[#4479A1]" }) },
            { name: "PostgreSQL", icon: createElement(SiPostgresql, { className: "w-6 h-6 text-[#4169E1]" }) },
            { name: "Prisma", icon: createElement(SiPrisma, { className: "w-6 h-6 text-slate-100" }) },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", icon: createElement(SiGit, { className: "w-6 h-6 text-[#F05032]" }) },
            { name: "GitHub", icon: createElement(SiGithub, { className: "w-6 h-6 text-slate-100" }) },
            { name: "Postman", icon: createElement(SiPostman, { className: "w-6 h-6 text-[#FF6C37]" }) },
            { name: "ESLint", icon: createElement(SiEslint, { className: "w-6 h-6 text-[#4B32C3]" }) },
            { name: "Bash", icon: createElement(SiGnubash, { className: "w-6 h-6 text-[#4EAA25]" }) },
            { name: "Figma", icon: createElement(SiFigma, { className: "w-6 h-6 text-[#F24E1E]" }) },
        ]
    }
];
