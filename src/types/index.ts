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

/** One column of the hero's mock SQL result row. */
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
    /** Headline role, used in the hero, page title and OG image. */
    role: string;
    location: string;
    email: string;
    /** One-line intro under the hero name. */
    tagline: string;
    summary: string;
    /** Closing headline of the contact section. */
    contactHeadline: string;
    /** Columns the hero query "returns" for the profile row. */
    queryResult: QueryColumn[];
    /** Short key/value facts next to the summary. */
    facts: Fact[];
    cvPath: string;
    socials: SocialLink[];
};

export type Metric = {
    label: string;
    /** Numeric value, rendered with a count-up. */
    value: number;
    /** Decimal places to show. */
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
    image: string | null;
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

export type SpokenLanguage = {
    name: string;
    level: string;
};
