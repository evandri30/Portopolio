import type { Project } from "@/types";

// Same order as the PROJECTS section of the CV (newest first).
export const projects: Project[] = [
    {
        title: "Tokopaedi",
        subtitle: "E-Commerce Data Analysis",
        period: "Aug 2026 – Sep 2026",
        description:
            "Bootcamp final project: analyzed e-commerce sales data with SQL and Python, and visualized the findings in a Looker Studio dashboard.",
        tech: ["SQL", "Python", "Looker Studio"],
        link: null,
        image: null,
    },
    {
        title: "DeteksiSIBI",
        subtitle: "Real-Time Sign Language Detection",
        period: "May 2026 – Jul 2026",
        description:
            "Real-time SIBI sign language detection system. Trained a YOLOv8 model served via FastAPI + PostgreSQL, with a React.js webcam frontend.",
        tech: ["YOLOv8", "FastAPI", "PostgreSQL", "React.js"],
        metrics: [
            { label: "Precision", value: 98.34, decimals: 2, suffix: "%" },
            { label: "Recall", value: 98.62, decimals: 2, suffix: "%" },
            { label: "mAP50", value: 98.23, decimals: 2, suffix: "%" },
        ],
        link: "https://deteksisibi.my.id/",
        image: "/images/sibi.png",
    },
    {
        title: "Tomato Leaf Disease Classifier",
        period: "Mar 2026 – Apr 2026",
        description:
            "Trained a MobileNetV2 classifier with data preprocessing and augmentation, deployed as an interactive Streamlit web app.",
        tech: ["Python", "MobileNetV2", "TensorFlow", "Streamlit"],
        metrics: [{ label: "Accuracy", value: 90.5, decimals: 1, suffix: "%" }],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
        image: "/images/tomatoleaf.png",
    },
    {
        title: "Bank Lead Intelligence Portal",
        subtitle: "BLIP",
        period: "Oct 2025 – Dec 2025",
        description:
            "Built the frontend for a MERN-based internal sales platform delivering AI-driven customer recommendations; refactored backend integration with FastAPI-based AI services and contributed to overall tech stack decisions.",
        tech: ["MERN", "FastAPI", "JavaScript"],
        link: null,
        image: "/images/blip2.jpeg",
    },
    {
        title: "Rizquna Bakery",
        subtitle: "Full-Stack Ordering Platform",
        period: "Mar 2025 – Aug 2025",
        description:
            "Capstone project: full-stack MERN bakery ordering platform with product management, authentication, shopping cart, Midtrans payment integration, and an admin dashboard for order and delivery tracking.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Midtrans"],
        link: null,
        image: "/images/rizqunabakery.png",
    },
];
