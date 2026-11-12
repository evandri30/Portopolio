"use client";

import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightPanel from "@/components/ui/SpotlightPanel";
import { skillCategories, spokenLanguages } from "@/data/skills";
import type { SkillCategory } from "@/types";

const allSkills = skillCategories.flatMap((c) => c.skills);

export default function Skills() {
    return (
        <section id="skills" className="py-24 sm:py-32">
            <SectionHeading title="Skills" rows={allSkills.length} />

            <Marquee speed={36} className="mx-[calc(50%-50vw)] mb-16">
                {allSkills.map(({ name, icon: Icon, color }) => (
                    <span key={name} className="flex items-center gap-3 px-6 text-2xl font-semibold tracking-tight text-text/90 sm:text-3xl">
                        <Icon style={{ color }} className="size-7 shrink-0 sm:size-8" aria-hidden="true" />
                        {name}
                    </span>
                ))}
            </Marquee>

            <div className="grid gap-6 lg:grid-cols-2">
                {skillCategories.map((category, i) => (
                    <Reveal key={category.title} delay={i * 0.08}>
                        <CategoryPanel category={category} />
                    </Reveal>
                ))}
                <Reveal className="rounded-xl border border-line p-6">
                    <h3 className="font-mono text-sm text-muted">Languages</h3>
                    <dl className="mt-4 space-y-3">
                        {spokenLanguages.map(({ name, level }) => (
                            <div key={name} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                                <dt className="text-lg text-text">{name}</dt>
                                <dd className="font-mono text-xs text-muted">{level}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </section>
    );
}

function CategoryPanel({ category }: { category: SkillCategory }) {
    return (
        <SpotlightPanel className="h-full p-6">
            <div className="flex items-baseline justify-between">
                <h3 className="font-mono text-sm text-muted">{category.title}</h3>
                <span className="font-mono text-xs text-muted/70">{category.skills.length}</span>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                {category.skills.map(({ name, icon: Icon, color }) => (
                    <li key={name} className="group flex items-center gap-2.5 text-text/85">
                        <Icon
                            style={{ color }}
                            className="size-[18px] shrink-0 opacity-80 transition-[opacity,transform] duration-300 group-hover:scale-110 group-hover:opacity-100"
                            aria-hidden="true"
                        />
                        <span className="truncate">{name}</span>
                    </li>
                ))}
            </ul>
        </SpotlightPanel>
    );
}
