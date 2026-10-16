import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
    return (
        <section id="about" className="py-20 overflow-hidden">
            <Reveal>
                <SectionHeading title="About Me" />
                <div className="bg-neutral-900/30 p-8 sm:p-10 rounded-3xl shadow-lg border border-neutral-900">
                    <p className="text-neutral-300 leading-relaxed text-lg">{profile.summary}</p>
                </div>
            </Reveal>
        </section>
    );
}
