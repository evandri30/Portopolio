import { StaticImageData } from "next/image";

export type ProjectProps = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    color: string;
    image: StaticImageData | null;
}