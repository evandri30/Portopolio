import React from "react";

export type SkillProps = {
    name: string;
    icon: React.ReactNode;
}

export type SkillCategoryProps = {
    title: string;
    skills: SkillProps[];
}