import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, education } from "@/data/experience";

export default function Credentials() {
    return (
        <section id="education" className="py-24 sm:py-32">
            <SectionHeading title="Education & certifications" />

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
                {education.map((ed) => (
                    <Reveal key={ed.institution}>
                        <p className="font-mono text-sm text-muted">{ed.period}</p>
                        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-text">{ed.institution}</h3>
                        <p className="mt-1 text-lg text-muted">
                            {ed.degree}, {ed.location}
                        </p>

                        <div className="mt-8 flex items-baseline gap-3">
                            <CountUp
                                value={ed.gpa}
                                decimals={2}
                                className="text-7xl font-bold tracking-[-0.02em] text-amber [font-stretch:88%] sm:text-8xl"
                            />
                            <span className="font-mono text-sm text-muted">
                                GPA / {ed.gpaScale.toFixed(2)}
                            </span>
                        </div>

                        <h4 className="mt-8 font-mono text-sm text-muted">Coursework</h4>
                        <ul className="mt-3 space-y-2 text-text/85">
                            {ed.coursework.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}

                <Reveal delay={0.1}>
                    <h3 className="font-mono text-sm text-muted">Certifications</h3>
                    <ul className="mt-4 border-t border-line">
                        {certifications.map(({ name, issuer, date }) => (
                            <li key={name} className="group relative border-b border-line py-6">
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-amber transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                                />
                                <p className="text-xl font-medium tracking-tight text-text">{name}</p>
                                <div className="mt-1 flex flex-wrap justify-between gap-x-4 text-muted">
                                    <span>{issuer}</span>
                                    <span className="font-mono text-sm">{date}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
