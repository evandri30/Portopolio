import type { ProjectProps } from "@/types/index"

export const projects: ProjectProps[] = [
    {
        title: "Deteksi SIBI",
        description: "A web application for detecting sign language, enabling users to communicate with people who are deaf or hard of hearing.",
        tech: ["React.js", "FastAPI", "PostgreSQL", "Docker"],
        link: "https://deteksisibi.my.id/",
        color: "bg-green-950/40 border-b border-green-900/30",
        image: "/images/sibi.png"
    },
    {
        title: "Tomato Leaf Diseases",
        description: "An agri-tech web application that leverages a Convolutional Neural Network (CNN) to detect and diagnose diseases in tomato plant leaves, helping farmers identify issues early and take timely action to protect crop health and yield.",
        tech: ["Python", "CNN", "TensorFlow", "Streamlit"],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
        color: "bg-red-950/40 border-b border-red-900/30",
        image: "/images/tomatoleaf.png"
    },
    {
        title: "Rizquna Bakery",
        description: "A full-featured e-commerce platform built with secure JWT-based authentication, dynamic product catalog management, and seamless Midtrans payment gateway integration for smooth and reliable online transactions.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        link: null,
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: "/images/rizqunabakery.png"
    },
    {
        title: "Sparepart Monitoring",
        description: "An internal inventory management system for tracking aircraft and helicopter spare parts, featuring five role-based access levels to ensure secure, structured, and efficient operations across different organizational roles.",
        tech: ["PHP", "Laravel", "MySQL", 'Blade'],
        link: null,
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: "/images/spm.png"
    },
    {
        title: "BLIP Banking Sales",
        description: "An internal machine learning web application that leverages XGBoost to predict customer uptake of banking products, enabling data-driven decision-making for targeted marketing and product strategy.",
        tech: ["MERN", "Python", "XGBoost", "JavaScript"],
        link: null,
        color: "bg-green-950/40 border-b border-green-900/30",
        image: "/images/blip2.jpeg"
    },
];