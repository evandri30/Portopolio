import type { Certification, Education, Experience } from "@/types";

export const experience: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "Mahkamah Konstitusi Republik Indonesia",
        period: "Sep 2026 – Present",
        current: true,
        highlights: [
            "Grading AI: Built solo, end to end, an essay pre-grading system for Pusdik MK's e-learning platform that batch-scores ~200 essays per run with Qwen, giving an overloaded grading team draft scores to review instead of grading from scratch (Next.js, FastAPI, PostgreSQL, pgvector, Redis, Docker; in staging).",
            "SIMPONI Chatbot: Developed a RAG chatbot for SIMPONI, MK's in-house HR system used by the HR bureau (SDMO), so HR staff can query employee data and HR documents in natural language; built a CLI ingestion pipeline (PDF parsing, chunking, embedding) that indexed ~1,000 pages into a pgvector schema I designed.",
            "Data API: Built a Prado (PHP) API that serves SIMPONI employee data to the chatbot, so the LLM layer never touches the production database directly.",
        ],
        tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Docker", "Qwen", "PHP", "Prado"],
    },
    {
        role: "Frontend Engineer Intern",
        company: "PT Pelita Air Service",
        period: "Nov 2025 – Jan 2026",
        current: false,
        highlights: [
            "Built core pages (login, signup, home, inventory, settings) of SparePart Monitoring, a now-live web app that replaced paper-based spare part records for 5 departments across the Tangerang site and Jakarta office.",
            "Translated Figma designs into Laravel Blade views wired to backend endpoints as one of 3 frontend developers, working in Jira sprints with Git branching.",
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

/** Public Google Drive folder holding every certificate PDF. */
export const certificatesUrl = "https://drive.google.com/drive/folders/1U9XM4hhVSfjLBpBMcArVb7x7PSGNEOSP";

export const certifications: Certification[] = [
    { name: "Associate Data Engineer", issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", date: "Jul 15, 2026" },
    { name: "React & Back-End with AI", issuer: "Asah by Dicoding × Accenture", date: "Jan 14, 2026" },
    { name: "Data Analysis Final Project Mentoring (Certificate of Mastery)", issuer: "MySkill", date: "Sep 2026" },
    { name: "Data Analysis: Fullstack Intensive Bootcamp", issuer: "MySkill", date: "Jul 29, 2026" },
    { name: "Advanced Database Systems Training", issuer: "Universitas Gunadarma", date: "Jun 6, 2026" },
];
