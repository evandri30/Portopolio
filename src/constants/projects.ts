import type { ProjectProps } from "@/types/index"

export const projects: ProjectProps[] = [
    {
        title: "Tomato Leaf Diseases",
        description: "Agri-tech web app powered by CNN to identify and diagnose tomato plant leaf diseases in real-time.",
        tech: ["Python", "CNN", "TensorFlow", "Streamlit"],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
        color: "bg-red-950/40 border-b border-red-900/30",
        image: "/images/tomatoleaf.png"
    },
    {
        title: "Rizquna Bakery",
        description: "E-commerce platform featuring JWT authentication, product catalogs, and Midtrans payment integration.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: "https://rizquna-frontend.vercel.app/",
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: "/images/rizqunabakery.png"
    },
    {
        title: "Sparepart Monitoring",
        description: "Internal system for monitoring aircraft & helicopter spare parts inventory with 5 role-based access levels.",
        tech: ["PHP", "Laravel", "MySQL", 'Blade'],
        link: null,
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: "/images/spm.png"
    },
    {
        title: "BLIP Banking Sales",
        description: "Internal machine learning web app that predicts banking product uptake using XGBoost.",
        tech: ["MERN", "Python", "XGBoost", "JavaScript"],
        link: null,
        color: "bg-green-950/40 border-b border-green-900/30",
        image: "/images/blip2.jpeg"
    },
];