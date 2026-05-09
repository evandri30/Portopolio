import { createElement } from "react";
import { CodeXml, Database, FlaskConical } from 'lucide-react'
import type { TechStackItem } from "@/types"

export const techStackItems: TechStackItem[] = [
    {
        id: "web-dev",
        title: "Web Development",
        description: "Node.js (Express), React, Next.js, Laravel, Flask",
        category: "blue",
        icon: createElement(CodeXml)
    },
    {
        id: "data-science",
        title: "Data Science & AI",
        description: "Python, TensorFlow, YOLO, Streamlit, OpenCV, PyTorch",
        category: "purple",
        icon: createElement(FlaskConical)
    },
    {
        id: "databases",
        title: "Databases",
        description: "MySQL, PostgreSQL, MongoDB",
        category: "emerald",
        icon: createElement(Database)
    }
];