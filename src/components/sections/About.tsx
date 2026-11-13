import Reveal from "@/components/ui/Reveal";
import ScrollText from "@/components/ui/ScrollText";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
    return (
        <section id="about" className="py-24 sm:py-32">
            <SectionHeading title="About" />
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
                <ScrollText
                    text={profile.summary}
                    className="max-w-[34ch] text-2xl leading-snug font-medium tracking-tight text-text sm:text-3xl sm:max-w-[36ch] lg:text-[2.1rem]"
                />
                <dl className="divide-y divide-line border-y border-line">
                    {profile.facts.map(({ label, value }, i) => (
                        <Reveal key={label} y={12} delay={i * 0.07} className="py-4">
                            <dt className="font-mono text-xs text-muted">{label}</dt>
                            <dd className="mt-1 text-text">{value}</dd>
                        </Reveal>
                    ))}
                </dl>
            </div>
        </section>
    );
}
