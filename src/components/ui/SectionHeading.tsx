type SectionHeadingProps = {
    title: string;
    className?: string;
};

export default function SectionHeading({ title, className = "mb-12" }: SectionHeadingProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <div className="w-16 h-1 bg-blue-500 rounded mt-4" aria-hidden="true" />
        </div>
    );
}
