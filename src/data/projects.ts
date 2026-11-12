import type { Project } from "@/types";

// Newest first. Union of the PROJECTS sections of both CVs (SWE and DE).
// DeteksiSIBI is also the thesis, so it appears in education[].thesis (src/data/experience.ts) too.
export const projects: Project[] = [
    {
        title: "Tokopaedi",
        subtitle: "E-Commerce Data Analysis",
        period: "Aug 2026 – Sep 2026",
        description:
            "MySkill final project in a 7-person team: wrote SQL across 6 related tables for monthly sales, same-month YoY channel growth, and organic funnel conversion, and built a Looker Studio dashboard tracking Rp8.69B sales, Rp2.01B net profit, and Rp1.51M AOV. Using Python (pandas), found that weekend campaign days averaged 29.93% lower daily sales than weekdays (Oct–Dec 2022) and identified 820 checked-out but unpaid customers for re-targeting.",
        tech: ["SQL", "Python", "pandas", "Looker Studio", "BigQuery"],
        link: null,
    },
    {
        title: "Hospital Database Design",
        subtitle: "BNSP Associate Data Engineer Assessment",
        period: "Jul 2026",
        description:
            "Designed a relational database for a hospital case study (RS Afiat): modeled the ERD, defined data types and constraints, then created and populated the tables in SQL.",
        tech: ["SQL", "ERD", "Data Modeling"],
        link: null,
    },
    {
        title: "DeteksiSIBI",
        subtitle: "Real-Time Sign Language Detection",
        period: "May 2026 – Jul 2026",
        description:
            "Built a full-stack web app that detects all 26 SIBI alphabet signs from a webcam: trained YOLOv8 on a 3,000+ image Kaggle dataset, augmented, and served it at ~60 ms inference per frame via FastAPI, PostgreSQL, and a React frontend.",
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
            "Built a tomato disease classifier with MobileNetV2 transfer learning, covering preprocessing, augmentation, and deployment as an interactive Streamlit app.",
        tech: ["Python", "MobileNetV2", "Streamlit"],
        metrics: [{ label: "Accuracy", value: 90.5, decimals: 1, suffix: "%" }],
        link: "https://tomato-leaf-diseases-evandri.streamlit.app/",
    },
    {
        title: "Bank Lead Intelligence Portal",
        subtitle: "BLIP",
        period: "Oct 2025 – Dec 2025",
        description:
            "Led a 5-person team and built the React frontend of a MERN sales platform that scores how likely a bank customer is to take a credit product; refactored the integration with FastAPI-based ML services and drove tech stack decisions.",
        tech: ["MERN", "FastAPI", "JavaScript"],
        link: null,
    },
    {
        title: "Rizquna Bakery",
        subtitle: "Full-Stack Ordering Platform",
        period: "Mar 2025 – Aug 2025",
        description:
            "Built a MERN ordering platform with authentication, cart, Midtrans payment integration, and an admin dashboard for order and delivery tracking.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Midtrans"],
        link: null,
    },
];
