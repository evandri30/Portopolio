import type { ProjectProps } from "@/types/index"
import tomatoLeafImage from "@/images/tomatoleaf.png";
import rizqunaBakeryImage from "@/images/rizqunabakery.png";

export const projects: ProjectProps[] = [
    {
        title: "Tomato Leaf Diseases",
        description: "Agri-tech web app powered by CNN to identify and diagnose tomato plant leaf diseases in real-time.",
        tech: ["Python", "CNN", "TensorFlow", "Streamlit"],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
        color: "bg-red-950/40 border-b border-red-900/30",
        image: tomatoLeafImage
    },
    {
        title: "Rizquna Bakery",
        description: "MERN e-commerce platform featuring JWT authentication, product catalogs, and Midtrans payment integration.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://rizquna-frontend.vercel.app/",
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: rizqunaBakeryImage
    }
];