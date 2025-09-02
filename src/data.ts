import type { Variants, TargetAndTransition } from "framer-motion";
import cloudpeek from "./images/project-images/cloudpeek.png";
import byteBackBargains from "./images/project-images/back-byte-bargains.png";
import ticTacToe from "./images/project-images/tic-tac-toe.png";
import chronosTasks from "./images/project-images/chronos-tasks.png";
import portfolio from "./images/project-images/portfolio.png";

export interface ProjectsType {
    title: string;
    description: string;
    features: string[];
    techStack: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
    variants?: Variants;
    whileHover?: TargetAndTransition;
}
export const projects: ProjectsType[] = [
    {
        title: "CloudPeek",
        description: "A modern React weather app that provides real-time weather data and a 4-day forecast for any city in the world. It features a clean and accessible user interface, dynamic themes that change based on weather conditions, and responsive design.",
        features: [
            "Provides real-time weather data and a 4-day forecast",
            "Dynamic themes that change with weather conditions",
            "Responsive design for desktop and mobile views",
        ],
        techStack: [
            "React",
            "TypeScript",
            "Vite",
            "Bootstrap",
            "OpenWeatherMap API",
        ],
        imageUrl: cloudpeek,
        githubUrl: "https://github.com/Arnold-A-ex/CloudPeek",
        liveUrl: "https://cloud-peek.netlify.app/",
    },
    {
        title: "Tic-Tac-Toe",
        description: "A classic Tic-Tac-Toe game built with React. It features a multiplayer mode against another person and a single-player mode against an AI. The game includes win and tie detection, an undo function, and a restart option.",
        features: [
            "Multiplayer mode (Player vs. Player)",
            "Single-player mode (Player vs. AI)",
            "Win and tie detection logic",
            "Undo and Restart game functions",
        ],
        techStack: [
            "React",
            "React Icons",
            "React Confetti",
            "CSS"
        ],
        imageUrl: ticTacToe,
        githubUrl: "https://github.com/Arnold-A-ex/Tic-Tac-Toe",
        liveUrl: "https://web-tic-tac.netlify.app/",
    },
    {
        title: "Byte-Back-Bargains",
        description: "A single-page application (SPA) built with React.js that simulates a complete e-commerce experience. It allows users to browse products, manage a shopping cart, and use an authentication system. The application is also designed with a responsive layout to work on different devices.",
        features: [
            "Full e-commerce experience simulation",
            "Product browsing and shopping cart management",
            "User authentication system",
            "Responsive design for all device types",
        ],
        techStack: [
            "React",
            "Vite",
            "Bootstrap Icons",
            "Slick Carousel",
            "CSS Modules",
        ],
        imageUrl: byteBackBargains,
        githubUrl: "https://github.com/Arnold-A-ex/Byte-Back-Bargains",
        liveUrl: "https://byte-back-bargains.netlify.app/",
    },
    {
        title: "Portfolio",
        description: "A modern, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. It showcases projects, skills, and contact information with smooth animations.",
        features: [
            "Showcases projects, skills, and contact information",
            "Modern and responsive design",
            "Uses animations for an enhanced user experience"
        ],
        techStack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "React Router DOM",
            "Lucide Icons",
            "OpenWeatherMap API"
        ],
        imageUrl: portfolio,
        githubUrl: "https://github.com/Arnold-A-ex/Portfolio",
        liveUrl: "https://esimnachi.netlify.app/"
    },
    {
    title: "Chronos-Tasks",
    description: "A modern, responsive task management application built with React and Firebase to help users organize their daily activities. It features secure user authentication, real-time task management, and data persistence in a cloud database.",
    features: [
        "Secure user authentication (sign-up, login)",
        "Real-time task management (add, edit, delete, complete)",
        "Data persistence with Firestore",
        "Responsive design and modern user interface"
    ],
    techStack: [
        "React",
        "React Router DOM",
        "Typescript",
        "Firebase",
        "Firestore",
        "Bootstrap"
    ],
    imageUrl: chronosTasks,
    githubUrl: "https://github.com/Arnold-A-ex/Chronos-Tasks",
    liveUrl: "https://chronostasks.vercel.app/"
}
];


