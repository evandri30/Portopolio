import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
    title: string;
    /** Row count shown as a query result next to the title, e.g. 2 → "2 rows". */
    rows?: number;
    className?: string;
};

export default function SectionHeading({ title, rows, className = "mb-14" }: SectionHeadingProps) {
    return (
        <Reveal className={`flex items-end justify-between gap-6 border-b border-line pb-5 ${className}`}>
            <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl [font-stretch:90%]">
                {title}
            </h2>
            {rows !== undefined && (
                <p className="shrink-0 pb-1.5 font-mono text-xs text-muted">
                    {rows} {rows === 1 ? "row" : "rows"}
                </p>
            )}
        </Reveal>
    );
}
