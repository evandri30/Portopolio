import type { IconType } from "react-icons";

export type NavLink = {
    name: string;
    href: `#${string}`;
};

export type SocialLink = {
    label: string;
    href: string;
    icon: IconType;
};

export type QueryColumn = {
    column: string;
    value: string;
};

export type Fact = {
    label: string;
    value: string;
};

export type Profile = {
    name: string;
    shortName: string;
    role: string;
    location: string;
    email: string;
    tagline: string;
    summary: string;
    contactHeadline: string;
    queryResult: QueryColumn[];
    facts: Fact[];
    cvPath: string;
    socials: SocialLink[];
};

export type Metric = {
    label: string;
    value: number;
    decimals: number;
    suffix: string;
};

export type Project = {
    title: string;
    subtitle?: string;
    period: string;
    description: string;
    tech: string[];
    metrics?: Metric[];
    link: string | null;
};

export type Experience = {
    role: string;
    company: string;
    period: string;
    current: boolean;
    highlights: string[];
    tech: string[];
};

export type Education = {
    institution: string;
    degree: string;
    location: string;
    period: string;
    gpa: number;
    gpaScale: number;
    thesis?: Thesis;
};

export type Thesis = {
    /** English title. */
    title: string;
    /** Title as submitted (Indonesian). */
    titleOriginal: string;
    /** Short status line, e.g. "Undergraduate thesis, defended Aug 2026". */
    status: string;
    description: string;
    metrics: Metric[];
    supervisor: string;
    pdfPath: string;
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

export type SpokenLanguage = {
    name: string;
    level: string;
};
