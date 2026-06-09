import { StaticImageData } from "next/image";

export type ProjectProps = {
    title: string;
    description: string;
    tech: string[];
    link: string | null;
    color: string;
    image: string | StaticImageData | null;
}