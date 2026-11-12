import { ArrowUpRight, FileText } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightPanel from "@/components/ui/SpotlightPanel";
import { certificatesUrl, certifications, education } from "@/data/experience";

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
                    <a
                        href={certificatesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-6 inline-flex items-center gap-1 border-b border-amber/40 pb-0.5 text-sm font-medium text-amber transition-colors hover:border-amber"
                    >
                        View certificates
                        <ArrowUpRight
                            className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            aria-hidden="true"
                        />
                    </a>
                </Reveal>
            </div>

            {education.map(
                ({ institution, thesis }) =>
                    thesis && (
                        <Reveal key={`${institution}-thesis`} className="mt-16">
                            <SpotlightPanel className="p-6 sm:p-10">
                                <p className="font-mono text-sm text-muted">{thesis.status}</p>
                                <h3 className="mt-3 max-w-4xl text-2xl leading-tight font-semibold tracking-tight text-text [font-stretch:90%] sm:text-[2.1rem]">
                                    {thesis.title}
                                </h3>
                                <p lang="id" className="mt-3 max-w-4xl text-muted italic">
                                    {thesis.titleOriginal}
                                </p>

                                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
                                    <p className="max-w-2xl leading-relaxed text-text/85">{thesis.description}</p>
                                    <dl className="flex flex-wrap gap-x-8 gap-y-4 lg:flex-col">
                                        {thesis.metrics.map((m) => (
                                            <div key={m.label} className="flex flex-col-reverse">
                                                <dt className="font-mono text-xs text-muted">{m.label}</dt>
                                                <dd className="text-3xl font-semibold tracking-tight text-amber">
                                                    <CountUp value={m.value} decimals={m.decimals} suffix={m.suffix} />
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>

                                <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                                    <p className="text-sm text-muted">Supervised by {thesis.supervisor}</p>
                                    <a
                                        href={thesis.pdfPath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2 rounded-full border border-amber/50 px-5 py-2.5 text-sm font-medium text-amber transition-colors hover:border-amber hover:bg-amber/10"
                                    >
                                        <FileText className="size-4" aria-hidden="true" />
                                        Read the thesis (PDF)
                                        <ArrowUpRight
                                            className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </SpotlightPanel>
                        </Reveal>
                    ),
            )}
        </section>
    );
}
