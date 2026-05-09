import type { ProjectProps } from "@/types/index"
import tomatoLeafImage from "@/images/tomatoleaf.png";
import rizqunaBakeryImage from "@/images/rizqunabakery.png";

export const projects: ProjectProps[] = [
    {
        title: "Tomato Leaf Diseases",
        description: "A machine learning model and web interface using Python and CNN to detect agricultural diseases specifically in tomato plants.",
        tech: ["Python", "CNN", "TensorFlow", "Streamlit"],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
        color: "from-red-500/80 to-orange-500/80",
        image: tomatoLeafImage
    },
    {
        title: "Rizquna Bakery",
        description: "Ecommerce website for bakery business. Features include product management, order management, and auth system.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://rizquna-frontend.vercel.app/",
        color: "from-blue-500/80 to-cyan-500/80",
        image: rizqunaBakeryImage
    },
    {
        title: "GameShelf",
        description: "Website for Gamers to Discover, track, and share your favorite video games — all in one place.",
        tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma"],
        link: "#",
        color: "from-purple-500/80 to-pink-500/80",
        image: null
    }
];