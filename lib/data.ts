
interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    isPrivate?: boolean;
    featured?: boolean;
}

interface Experience {
    company: string;
    role: string;
    location: string;
    period: string;
    description: string[];
    tech: string[];
}

export const EXPERIENCES: Experience[] = [
    {
        company: "ATB Applications LLC (formerly ShaftFitters LLC)",
        role: "Lead Software Engineer",
        location: "USA (Remote)",
        period: "2026 — Present",
        description: [
            "Lead engineer on ShaftFitters, a golf shaft recommendation platform built from golfers' own swing data, owning backend, mobile, and web end to end.",
            "Built the iOS and Android apps in Expo and React Native, with swing-data visualisations in Skia and Reanimated, shipped to the App Store.",
            "Architected the Hono REST API on AWS Lambda and Fly.io with PostgreSQL, Prisma, and Redis, plus BullMQ queues powering the recommendation engine, maintenance, and catalog sync.",
            "Implemented App Store and Google Play subscriptions via RevenueCat with webhook-driven entitlements, plus Stripe payments and pay-as-you-go plans.",
            "Built the Next.js web app and admin console, an affiliate product catalog with supplier purchase orders, and JWT/OTP auth with role-based access.",
            "Ran production: database migrations and go-live audits, Sentry error tracking, PostHog analytics, Resend email, and Expo push notifications."
        ],
        tech: ["React Native", "Expo", "Next.js", "TypeScript", "Hono", "Node.js", "PostgreSQL", "Prisma", "Redis", "BullMQ", "AWS Lambda", "Fly.io", "RevenueCat", "Stripe", "Sentry", "PostHog"]
    },
    {
        company: "Homiee",
        role: "Full Stack Developer",
        location: "Australia (Remote)",
        period: "2025 — 2026",
        description: [
            "Architected and developed core systems for a real estate web platform serving the Australian market.",
            "Designed and built production-grade user interfaces in Next.js and React, including dashboards, video interaction panels, and AI chat interfaces.",
            "Engineered a real-time AI-powered chat system enabling Q/A between users and intelligent agents using NLP-driven workflows.",
            "Developed a Python-based computer vision pipeline to detect buildings of interest in 4K property videos and extract frame-level spatial coordinates.",
            "Implemented frame-synchronized JSON overlay rendering using HTML5 Canvas in React, enabling interactive and clickable video-based insights.",
            "Optimized large detection datasets (200MB+) via whitespace stripping and Gzip compression in Node.js, reducing file size to 2–4MB.",
            "Built chunked 4K video upload pipelines and .ts streaming architecture for resilient, low-latency delivery under unstable network conditions.",
            "Assisted in architecting backend geocoordinate services and AI agent orchestration using OpenAI-based agent systems."
        ],
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Python",
            "MongoDB",
            "Mongoose",
            "AWS",
            "OpenAI",
            "HTML5 Canvas",
            "Gzip"
        ]
    },
    {
        company: "Elobbs Technologies",
        role: "Full-Stack Engineer",
        location: "Remote",
        period: "2023 — 2025",
        description: [
            "Developed and maintained NestJS backend services for a job posting and contract management platform.",
            "Implemented RESTful APIs for job listings, contracts, and user workflows.",
            "Designed secure authentication flows and role-based access control (RBAC) systems.",
            "Built a Google Business Reviews aggregation system using Go (Golang) microservices.",
            "Implemented real-time data synchronization between external APIs and internal dashboards."
        ],
        tech: [
            "TypeScript",
            "NestJS",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Mongoose",
            "Golang",
            "Gin",
            "React",
            "TailwindCSS",
            "Docker",
            "GCP"
        ]
    },
    {
        company: "Shypass",
        role: "Full Stack Developer",
        location: "Zambia",
        period: "2022",
        description: [
            "First professional role, building frontend and backend features across the product with React, Express, and MongoDB."
        ],
        tech: ["ExpressJS", "ReactJS", "JavaScript", "MongoDB"]
    }
];

export const PROJECTS: Project[] = [
    {
        title: "AudienceAce",
        description: "AI-powered B2B lead generation platform utilizing an NLP engine to scan social media for high-intent buyer signals. Features real-time monitoring, smart lead scoring, and automated outreach. (Currently in development)",
        tags: ["NextJS", "NestJS", "Python", "RabbitMQ", "Redis", "TypeORM"],
        link: "https://audienceace.com",
        featured: true
    },
    {
        title: "MetiBuy",
        description: "Premium multi-vendor e-commerce marketplace featuring real-time chat, secure payment processing, and scalable serverless architecture for a high-performance shopping experience.",
        tags: ["Next.JS", "Hono", "GraphQL", "AWS Lambda", "PostgreSQL", "PrismaORM"],
        link: "https://metibuy.shop",
        github: "https://github.com/metina-platforms/metibuy-client",
        featured: true
    },
    {
        title: "MeetingFlow",
        description: "A clean, responsive frontend interface for an AI productivity platform designed to optimize meeting cultures through agenda enforcement, decision tracking, and analytics.",
        tags: ["Frontend", "UI/UX", "TypeScript"],
        link: "https://meetingflow.vercel.app/",
        featured: true
    },
    {
        title: "Exams Made Easy",
        description: "A comprehensive academic resource platform offering subscription-based access to curated study materials, integrated with localized mobile money payment gateways.",
        tags: ["NextJS", "Serverless", "Hono", "PrismaORM", "PostgreSQL"],
        link: "https://exam-made-easy.com",
        featured: true
    },
    {
        title: "Homiee Real Estimate",
        description: "A robust real estate platform handling more than 100+ active listings of houses and apartments with a streamlined user experience.",
        tags: ["TypeScript", "Next.js", "Node.js"],
        featured: false
    },
    {
        title: "Shop Web App",
        description: "Premium full-stack e-commerce architecture prioritizing clean UX, scalability, and production-ready code.",
        tags: ["HonoJS", "PostgreSQL", "NextJS"],
        link: "https://myshop-enichip.vercel.app/",
        featured: false
    },
    {
        title: "Google Business Reviews",
        description: "Microservices dashboard aggregating GMB data for real-time reputation insights.",
        tags: ["Golang", "Gin", "Docker"],
        link: "https://gmbrevs.com/",
        featured: false
    },
    {
        title: "Truck Logistics",
        description: "Enterprise route planning suite with HoS compliance and fleet telemetry.",
        tags: ["React", "Leaflet", "Vite"],
        github: "https://github.com/martin-genomics/truck-logistics-app",
        featured: false
    }
];

export const SKILLS = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "Golang", "SQL", "GraphQL"]
    },
    {
        category: "Frontend & UI",
        items: ["React", "Next.js", "Vite", "UI/UX Design", "Leaflet", "TailwindCSS"]
    },
    {
        category: "Backend Frameworks",
        items: ["Node.js", "NestJS", "Hono", "FastAPI", "Gin", "ExpressJS"]
    },
    {
        category: "Databases & ORMs",
        items: ["PostgreSQL", "Redis", "PrismaORM", "TypeORM", "Mongoose"]
    },
    {
        category: "Cloud & Architecture",
        items: ["AWS (Lambda)", "Serverless", "Docker", "RabbitMQ", "Microservices"]
    },
    {
        category: "AI ",
        items: ["LLMs & Agents", "NLP", "Machine Learning", "RAG Pipelines"]
    },
];
