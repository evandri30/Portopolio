import type { IconType } from "react-icons";

export type NavLink = {
    name: string;
    href: `#${string}`;
};

export type SocialLink = {
    label: string;
    href: string;
    icon: IconType;
    /** Tailwind classes applied on hover (brand color). */
    hoverClass: string;
};

export type Profile = {
    name: string;
    shortName: string;
    location: string;
    email: string;
    summary: string;
    /** Lines cycled by the typing effect in the hero. */
    roles: string[];
    cvPath: string;
    socials: SocialLink[];
};

export type Project = {
    title: string;
    subtitle?: string;
    period: string;
    description: string;
    tech: string[];
    link: string | null;
    /** Tailwind background classes shown behind the image / placeholder. */
    color: string;
    image: string | null;
};

export type Experience = {
    role: string;
    company: string;
    period: string;
    highlights: string[];
};

export type Education = {
    institution: string;
    degree: string;
    location: string;
    period: string;
    gpa: string;
    coursework: string[];
};

export type Certification = {
    name: string;
    issuer: string;
    date: string;
};

export type Skill = {
    name: string;
    icon: IconType;
    /** Brand color, e.g. "#3178C6". */
    color: string;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};
