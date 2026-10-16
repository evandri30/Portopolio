import type { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Tokopaedi",
        subtitle: "E-Commerce Data Analysis",
        period: "Aug 2026 – Sep 2026",
        description:
            "Bootcamp final project: analyzed e-commerce sales data with SQL and Python, and visualized the findings in a Looker Studio dashboard.",
        tech: ["SQL", "Python", "Looker Studio"],
        link: null,
        color: "bg-amber-950/40 border-b border-amber-900/30",
        image: null,
    },
    {
        title: "DeteksiSIBI",
        subtitle: "Real-Time Sign Language Detection",
        period: "May 2026 – Jul 2026",
        description:
            "Real-time SIBI sign language detection system. Trained a YOLOv8 model (98.34% precision, 98.62% recall, 98.23% mAP50) served via FastAPI + PostgreSQL with a React.js webcam frontend.",
        tech: ["YOLOv8", "FastAPI", "PostgreSQL", "React.js"],
        link: "https://deteksisibi.my.id/",
        color: "bg-green-950/40 border-b border-green-900/30",
        image: "/images/sibi.png",
    },
    {
        title: "Tomato Leaf Disease Classifier",
        period: "Mar 2026 – Apr 2026",
        description:
            "Trained a MobileNetV2 classifier (90.5% accuracy) with data preprocessing and augmentation, deployed as an interactive Streamlit web app.",
        tech: ["Python", "MobileNetV2", "TensorFlow", "Streamlit"],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
        color: "bg-red-950/40 border-b border-red-900/30",
        image: "/images/tomatoleaf.png",
    },
    {
        title: "SparePart Monitoring",
        subtitle: "PT Pelita Air Service (internship)",
        period: "Nov 2025 – Jan 2026",
        description:
            "Internal application that digitized a fully paper-based spare-part inventory process. Built Laravel Blade pages from Figma designs and connected them to the backend for real-time data.",
        tech: ["PHP", "Laravel", "Blade", "MySQL"],
        link: null,
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: "/images/spm.png",
    },
    {
        title: "Bank Lead Intelligence Portal (BLIP)",
        period: "Oct 2025 – Dec 2025",
        description:
            "Built the frontend for a MERN-based internal sales platform delivering AI-driven customer recommendations; refactored backend integration with FastAPI-based AI services and contributed to overall tech stack decisions.",
        tech: ["MERN", "FastAPI", "JavaScript"],
        link: null,
        color: "bg-green-950/40 border-b border-green-900/30",
        image: "/images/blip2.jpeg",
    },
    {
        title: "Rizquna Bakery",
        subtitle: "Full-Stack Ordering Platform",
        period: "Mar 2025 – Aug 2025",
        description:
            "Capstone project: full-stack MERN bakery ordering platform with product management, authentication, shopping cart, Midtrans payment integration, and an admin dashboard for order/delivery tracking.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Midtrans"],
        link: null,
        color: "bg-blue-950/40 border-b border-blue-900/30",
        image: "/images/rizqunabakery.png",
    },
];
