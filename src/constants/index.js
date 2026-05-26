import {
    backend,
    web,
    javascript,
    typescript,
    linkedin,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github1,
    starbucks,
    tesla,
    shopify,
    certificatejs,
    certificatereactb,
    certificatefcc,
    vibeclub,
    carrent,
    tripguide,
    dashboard,
    flowai,
    rapidr,
    trackly,
    carewise,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "certifications",
        title: "Certifications",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "resume",
        title: "Resume",
        href: "https://drive.google.com/file/d/17bYP4rIpR9r6wCYmHzWc4NgsOgSztCkB/view?usp=sharing",
    },

];

const services = [{
        title: "Full Stack Engineering",
        icon: web,
        link: "#projects"
    },
    {
        title: "Product UI + APIs",
        icon: backend,
        link: "#experience"
    },
    {
        title: "GitHub",
        icon: github1,
        link: "https://github.com/adityaS011/",
    },
    {
        title: "LinkedIn",
        icon: linkedin,
        link: "https://www.linkedin.com/in/adi008/",
    },
];

const technologies = [{
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Git",
        icon: git,
    },


];

const experiences = [{
        title: "Frontend Engineer",
        company_name: "Atomicwork",
        icon: shopify,
        iconBg: "#E6DEDD",
        date: "Product Frontend Work",
        points: [
            "Built product-facing SaaS frontend features in a fast-moving product environment where requirements evolved quickly.",
            "Translated product and design intent into responsive React UI with clear hierarchy, reusable patterns, and consistent interaction states.",
            "Integrated API-driven workflows with thoughtful loading, empty, error, and success states so product screens felt reliable.",
            "Improved frontend quality through iterative UI fixes, usability refinements, and practical component-level decisions."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Mysa Innovations",
        icon: starbucks,
        iconBg: "#383E56",
        date: "April 2024 - September 2024",
        points: [
            "Shipped production frontend features for a FinTech product using Next.js, React, TypeScript, and Tailwind CSS.",
            "Handled complex financial UI flows with Redux, Jotai, and Context API, improving how data moved through the app.",
            "Integrated REST APIs for real-time financial updates while keeping screens clear, responsive, and predictable.",
            "Built form-heavy workflow interfaces with careful validation, state handling, and user-friendly edge-case behavior."
        ],
    },
    {
        title: "Website Developer",
        company_name: "Go Medicos",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Oct 2022 - Nov 2022",
        points: [
            "Built and maintained a responsive client website with HTML, CSS, and JavaScript.",
            "Collaborated directly with the client and content team to translate business needs into a polished web experience.",
            "Improved cross-browser responsiveness and mobile usability across core pages.",
            "Applied SEO basics and traffic-focused improvements to make the site easier to discover."
        ],
    },
    {
        title: "Frontend Intern",
        company_name: "HEXnBIT",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - April 2022",
        points: [
            "Contributed to the development of a travel website using HTML, CSS, JS, and Bootstrap.",
            "Implemented interactive features and dynamic elements with JavaScript to enhance user engagement.",
            "Ensured responsive layouts across devices using Bootstrap's grid system and components.",
            "Collaborated with the development team, participating in code reviews and addressing bugs for optimization.",
        ],
    },

];

const testimonials = [{
        testimonial: "I am strongest where frontend meets product judgment: translating ambiguous workflows into clear, dependable interfaces.",
        name: "Product Ownership",
        designation: "User flows, edge cases, and delivery",
        company: "",
        image: "",
    },
    {
        testimonial: "I think beyond screens: component patterns, API states, empty states, loading behavior, and the details that make product UI feel mature.",
        name: "Frontend Depth",
        designation: "React, TypeScript, UI architecture",
        company: "",
        image: "",
    },
    {
        testimonial: "My projects connect frontend polish with full-stack and AI workflows: React interfaces, Node.js APIs, MongoDB data models, and workflow UIs.",
        name: "Full-Stack Range",
        designation: "Node.js, MongoDB, APIs, AI workflows",
        company: "",
        image: "",
    },
];

const projects = [{
        name: "FlowAI Workflow Builder",
        description: "Visual workflow builder for designing AI-powered automation flows. Built for fast node editing, clear task sequencing, responsive layouts, and product-grade frontend interactions.",
        highlights: ["Interactive AI workflow canvas", "Product engineer AI use case", "Deployed production demo"],
        tags: [{
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "Workflow UI",
                color: "orange-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        image: flowai,
        source_code_link: "https://flowai-workflow-builder.vercel.app/",
    },
    {
        name: "Trackly",
        description: "Task management dashboard with workspace navigation, project metrics, recent activity, team actions, and a clean responsive product UI.",
        highlights: ["Dashboard-first task experience", "Team and activity workflows", "Responsive SaaS-style interface"],
        tags: [{
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "Product UX",
                color: "orange-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        image: trackly,
        source_code_link: "https://intelligent-task-manager.vercel.app/",
    },
    {
        name: "Vibe Club",
        description: "Community platform for discovering events, joining activities, and creating meaningful local connections with a modern full-stack experience.",
        highlights: ["Full-stack social product", "MongoDB-backed data model", "Built with Next.js and TypeScript"],

        tags: [{
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "orange-text-gradient",
            },
            {
                name: "nodeJs",
                color: "pink-text-gradient",
            },
        ],
        image: vibeclub,
        source_code_link: "https://vibe-club-nine.vercel.app/",
    },
    {
        name: "CareWise Healthcare SaaS",
        description: "B2B healthcare SaaS demo with authentication, analytics dashboard, patient management, and notification system for healthcare providers.",
        highlights: ["Healthcare domain expertise", "B2B SaaS architecture", "Auth and analytics integration"],
        tags: [{
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Healthcare",
                color: "green-text-gradient",
            },
            {
                name: "B2B SaaS",
                color: "orange-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        image: carewise,
        source_code_link: "https://carewise-chi.vercel.app/",
    },
    {
        name: "Ecommerce Clone",
        description: "MERN ecommerce clone with product browsing, cart-style flows, and a responsive marketplace interface inspired by real online shopping behavior.",
        highlights: ["MERN stack implementation", "Marketplace-style UI", "Responsive shopping flows"],

        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "expressJs",
                color: "orange-text-gradient",
            },
            {
                name: "nodeJs",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/adityaS011/ecommerce-clone",
    },
    {
        name: "Next.js Dasboard App",
        description: "Developed a Dashboard with dynamic UI elements using React and Next.js for enhanced modularity and maintainability. Leveraged Next.js API Routes for facilitating efficient data fetching and handling.",
        highlights: ["Reusable dashboard modules", "API route data fetching", "Clean data-heavy UI"],
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Next.js",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: dashboard,
        source_code_link: "https://dashboard-graff.netlify.app/",
    },
    {
        name: "Rapid Retail Ecommerce",
        description: "Employed React for modular UI development, emphasizing component reusability and maintainability. Utilized Bootstrap to implement responsive components.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
        ],
        image: rapidr,
        source_code_link: "https://rapid-retail-ecommerce.netlify.app/",
    },
    {
        name: "Crypto Exchange",
        description: "User-friendly web3 cryptocurrency exchange platform, enabling efficient trading across various blockchain networks. Embracing decentralized technology.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodeJs",
                color: "green-text-gradient",
            },
            {
                name: "solidity",
                color: "orange-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://crpyto-transaction-app.netlify.app/",
    },
];
const certificates = [{
        name: "Coursera",
        description: "React Basics -Meta",
        tags: [{
                name: "",
                color: "",
            },
            {
                name: "",
                color: "",
            },
            {
                name: "",
                color: "",
            },

        ],
        image: certificatereactb,
        source_code_link: "https://coursera.org/verify/VNEXQTQEGCBX",
    },
    {
        name: "Coursera",
        description: "Programming with JavaScript-Meta",
        tags: [{
                name: "",
                color: "blue-text-gradient",
            },
            {
                name: "",
                color: "green-text-gradient",
            },
            {
                name: "",
                color: "orange-text-gradient",
            },
        ],
        image: certificatejs,
        source_code_link: "https://coursera.org/verify/AQP39JQY4EZT",
    },

    {
        name: "FreeCodeCamp",
        description: "Responsive Designing with HTML, CSS",
        tags: [{
                name: "",
                color: "blue-text-gradient",
            },
            {
                name: "",
                color: "green-text-gradient",
            },
            {
                name: "",
                color: "orange-text-gradient",
            },
        ],
        image: certificatefcc,
        source_code_link: "https://www.freecodecamp.org/certification/AD_011/responsive-web-design",
    },


];

export { services, technologies, experiences, testimonials, projects, certificates };
