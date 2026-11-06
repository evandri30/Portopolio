import type { Certification, Education, Experience } from "@/types";

export const experience: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "Mahkamah Konstitusi Republik Indonesia",
        period: "Sep 2026 – Present",
        current: true,
        highlights: [
            "Grading AI: Built an AI essay pre-grading system end-to-end (frontend, backend, database) for Pusdik MK's e-learning platform using Next.js, FastAPI, PostgreSQL, Milvus, Redis, and Docker; Qwen scores essay answers in batches as a first pass before final review by human graders.",
            "SIMPONI Chatbot: Developed a RAG chatbot for SIMPONI, MK's internal HR system, using Qwen and PHP (Prado); built the PDF ingestion pipeline (chunking and embedding) and designed the vector schema in PostgreSQL (pgvector).",
            "Data API: Built a Prado API that supplies SIMPONI data to the chatbot without direct production database access.",
        ],
        tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Milvus", "Redis", "Docker", "Qwen", "PHP", "Prado"],
    },
    {
        role: "Frontend Engineer Intern",
        company: "PT Pelita Air Service",
        period: "Nov 2025 – Jan 2026",
        current: false,
        highlights: [
            "Built frontend pages for SparePart Monitoring, a web app that replaced a paper-based spare part inventory process so multiple divisions across the Depok operations site and Jakarta office work from the same data.",
            "Translated Figma designs into Laravel Blade pages (login, signup, home, navigation, settings) and integrated them with backend endpoints, as one of three frontend developers.",
            "Followed the SDLC from requirements to implementation, using Git branching and Jira sprints.",
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
        // Source: public/skripsi/skripsi.pdf (abstract, ch. 3–5). Title, tech and metrics match the CV.
        thesis: {
            title: "Development of a Web-Based SIBI Sign Language Detection System Using YOLOv8 with CRISP-DM",
            titleOriginal:
                "Pengembangan Sistem Deteksi Bahasa Isyarat SIBI Berbasis Web Menggunakan YOLOv8 dengan Metodologi CRISP-DM",
            status: "Undergraduate thesis, defended Aug 2026",
            description:
                "Built a web app that recognizes the 26 SIBI alphabet hand signs live from a webcam. Trained YOLOv8n on 3,137 annotated and augmented images, following CRISP-DM from business understanding to deployment, and served it with FastAPI, PostgreSQL and a React.js frontend, packaged in Docker on a VPS.",
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
    { name: "Associate Data Engineer", issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", date: "Jul 15, 2026" },
    { name: "React & Back-End with AI", issuer: "Asah by Dicoding × Accenture", date: "Jan 14, 2026" },
    { name: "Data Analysis Final Project Mentoring (Certificate of Mastery)", issuer: "MySkill", date: "Sep 2026" },
    { name: "Data Analysis: Fullstack Intensive Bootcamp", issuer: "MySkill", date: "Jul 29, 2026" },
    { name: "Advanced Database Systems Training", issuer: "Universitas Gunadarma", date: "Jun 6, 2026" },
];
