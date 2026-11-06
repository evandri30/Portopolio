import type { Project } from "@/types";

// Newest first, same order as the PROJECTS section of the CV.
// DeteksiSIBI is also the thesis, so it appears in education[].thesis (src/data/experience.ts) too.
export const projects: Project[] = [
    {
        title: "Tokopaedi",
        subtitle: "E-Commerce Data Analysis",
        period: "Aug 2026 – Sep 2026",
        description:
            "MySkill bootcamp final project: analyzed e-commerce sales data with SQL and Python and built a Looker Studio dashboard of the findings.",
        tech: ["SQL", "Python", "Looker Studio", "BigQuery"],
        link: null,
    },
    {
        title: "DeteksiSIBI",
        subtitle: "Real-Time Sign Language Detection",
        period: "May 2026 – Jul 2026",
        description:
            "Built a full-stack real-time SIBI sign language detection system: trained a YOLOv8 model and deployed it via FastAPI + PostgreSQL with a React.js frontend for webcam-based detection.",
        tech: ["YOLOv8", "FastAPI", "PostgreSQL", "React.js"],
        metrics: [
            { label: "Precision", value: 98.34, decimals: 2, suffix: "%" },
            { label: "Recall", value: 98.62, decimals: 2, suffix: "%" },
            { label: "mAP50", value: 98.23, decimals: 2, suffix: "%" },
        ],
        link: null,
    },
    {
        title: "Tomato Leaf Disease Classifier",
        period: "Mar 2026 – Apr 2026",
        description:
            "Built an end-to-end tomato disease classification system using transfer learning with MobileNetV2, covering data preprocessing, augmentation, and deployment as an interactive Streamlit web app.",
        tech: ["Python", "MobileNetV2", "Streamlit"],
        metrics: [{ label: "Accuracy", value: 90.5, decimals: 1, suffix: "%" }],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
    },
    {
        title: "Bank Lead Intelligence Portal",
        subtitle: "BLIP",
        period: "Oct 2025 – Dec 2025",
        description:
            "Built the frontend for a MERN-based internal sales platform delivering AI-driven customer recommendations; refactored backend integration with FastAPI-based AI services and contributed to overall tech stack decisions.",
        tech: ["MERN", "FastAPI", "JavaScript"],
        link: null,
    },
    {
        title: "Rizquna Bakery",
        subtitle: "Full-Stack Ordering Platform",
        period: "Mar 2025 – Aug 2025",
        description:
            "Built a full-stack MERN bakery ordering platform as a capstone project: product management, authentication, shopping cart, Midtrans payment integration, and an admin dashboard for order/delivery tracking.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Midtrans"],
        link: null,
    },
];
