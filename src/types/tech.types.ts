type TechCategory = 'blue' | 'purple' | 'emerald';

export type TechStackItem = {
    id: string;
    title: string;
    description: string;
    category: TechCategory;
    icon: React.ReactNode;
}
