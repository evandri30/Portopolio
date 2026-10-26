import type { Certification, Education, Experience } from "@/types";

export const experience: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "Mahkamah Konstitusi Republik Indonesia",
        period: "Sep 2026 – Present",
        current: true,
        highlights: [
            "Develop and maintain features for SIMPONI, an internal management system, using PHP with the Prado framework.",
            "Build internal data tools and APIs that retrieve and process data from PostgreSQL and MySQL databases.",
            "Write SQL queries daily, from standard queries to vector similarity search in PostgreSQL.",
        ],
        tech: ["PHP", "Prado", "PostgreSQL", "MySQL", "SQL"],
    },
    {
        role: "IT Intern, IT Solution Team",
        company: "PT Pelita Air Service",
        period: "Nov 2025 – Jan 2026",
        current: false,
        highlights: [
            "Contributed to the SparePart Monitoring application, digitizing a fully paper-based inventory process.",
            "Built internal web pages in Laravel Blade from Figma designs and connected them to the backend for real-time data.",
            "Collaborated via Git and Jira across the full SDLC, from requirement gathering to data integration.",
        ],
        tech: ["Laravel", "Blade", "Figma", "Git", "Jira"],
    },
];

export const education: Education[] = [
    {
        institution: "Gunadarma University",
        degree: "Bachelor's Degree, Informatics",
        location: "Bekasi, Indonesia",
        period: "Sep 2022 – Aug 2026",
        gpa: 3.85,
        gpaScale: 4,
        coursework: [
            "Web Programming",
            "Database Systems (SQL, Oracle, data modeling & normalization)",
            "Software Engineering",
        ],
        // Source: public/skripsi/skripsi.pdf (abstract, ch. 3–5). Metrics match the CV.
        thesis: {
            title: "Development of a Web-Based SIBI Sign Language Detection System Using YOLOv8 with the CRISP-DM Methodology",
            titleOriginal:
                "Pengembangan Sistem Deteksi Bahasa Isyarat SIBI Berbasis Web Menggunakan YOLOv8 dengan Metodologi CRISP-DM",
            status: "Undergraduate thesis, defended Aug 2026",
            description:
                "Built a web app that recognizes the 26 SIBI alphabet hand signs live from a webcam. Trained YOLOv8n on 3,137 annotated and augmented images, following CRISP-DM from business understanding to deployment, and served it with FastAPI, PostgreSQL and a React.js frontend, packaged in Docker on a VPS.",
            tech: ["YOLOv8", "FastAPI", "PostgreSQL", "React.js", "Docker"],
            metrics: [
                { label: "Precision", value: 98.34, decimals: 2, suffix: "%" },
                { label: "Recall", value: 98.62, decimals: 2, suffix: "%" },
                { label: "mAP50", value: 98.23, decimals: 2, suffix: "%" },
            ],
            supervisor: "Dr. Rina Noviana, S.Kom., MMSI.",
            pdfPath: "/skripsi/skripsi.pdf",
        },
    },
];

export const certifications: Certification[] = [
    { name: "Data Analysis: Full Stack Intensive Bootcamp", issuer: "MySkills", date: "Jul 29, 2026" },
    { name: "Associate Data Engineer", issuer: "Universitas Gunadarma", date: "Jun 6, 2026" },
    { name: "React & Backend with AI", issuer: "Dicoding", date: "Jan 14, 2026" },
];
