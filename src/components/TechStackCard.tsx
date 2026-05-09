import type { TechStackItem } from '@/types';
import { colorStyles } from '@/utils/colorStyles';

type TechStackCardProps = {
    item: TechStackItem;
}

export default function TechStackCard({ item }: TechStackCardProps) {
    const { title, description, category, icon } = item;


    const style = colorStyles[category] || colorStyles.blue;

    return (
        <div className={`bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 ${style.border} transition-all duration-300 group`}>
            <div className="flex flex-col gap-3">
                <div className={`w-10 h-10 rounded-xl ${style.bg} ${style.text} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
                <h4 className="text-slate-200 font-medium">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
