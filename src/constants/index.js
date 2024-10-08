import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    linkedin,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github1,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    certificatejs,
    certificatereactb,
    certificatefcc,
    vibeclub,
    carrent,
    jobit,
    tripguide,
    dashboard,
    rapidr,
    threejs,
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

];

const services = [{
        title: "Mern Stack Developer ",
        icon: web,
        link: "#"
    },
    {
        title: "UI/UX Designer",
        icon: backend,
        link: "#"
    },
    {
        title: "My Github",
        icon: github1,
        link: "https://github.com/adityaS011/",
    },
    {
        title: "My LinkedIn",
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


];

const experiences = [{
        title: "Software Engineer Intern",
        company_name: "Mysa Innovations",
        icon: starbucks,
        iconBg: "#383E56",
        date: "April 2024 - September 2024",
        points: [
            "Developed and optimized key features using Next.js, React, TypeScript, and Tailwind CSS at an early-stage FinTech startup.",
            "Streamlined state management with Redux, Jotai, and Context API, improving data flow.",
            "Integrated RESTful APIs for real-time financial updates.",
            "Led the development of a platform, automating PDF pre-fills using TypeScript, Next.js, and Pdf-lib, reducing manual entry by 80%."
        ],
    },
    {
        title: "Freelance Website Developer",
        company_name: "Go Medicos",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Oct 2022 - Nov 2022",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
            "Collaborating with client and content creator to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Working on SEO and other user-traffic factors.",
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
            "Implemented interactive features and dynamic elements with JavaScript to enhance user engagement.:",
            "Ensured a responsive design across various devices using Bootstrap's grid system and components.",
            "Collaborated with the development team, participating in code reviews and addressing bugs for optimization.",
        ],
    },

];

const testimonials = [{
        testimonial: "As an engineering student juggling coursework and web development gigs, I've mastered the art of coding efficiency. Discover shortcuts and code snippets to speed up your development process and boost productivity. ",
        name: "Efficient Coding with Shortcuts & Snippets",
        designation: "#CodingShortcuts #WebDevHacks",
        company: "",
        image: "",
    },
    {
        testimonial: "Being both a web developer and an engineering student, I understand the importance of choosing the right JavaScript framework. Dive into this brief comparison of React, Angular, and Vue to find the best fit for your next project. ",
        name: "JavaScript Frameworks: A Quick Comparison",
        designation: "#JavaScript #WebDevelopment",
        company: "",
        image: "",
    },
    {
        testimonial: "As a freelancer and engineering student, I've found that optimizing the user experience (UX) is crucial. From intuitive navigation to responsive design, Good UX  will ensure your website leaves a lasting impression.",
        name: "Streamlining UX: Crucial and impressive",
        designation: "#WebDevTips #UXDesign",
        company: "",
        image: "",
    },
];

const projects = [{
        name: "Vibe Club",
        description: "A platform to connect people, engage in activities or celebrations and craft meaningful connections.",

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
        name: "Ecommerce Clone",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",

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
        source_code_link: "https://mern-clone-flipkart-p2p.netlify.com/",
    },
    {
        name: "Next.js Dasboard App",
        description: "Developed a Dashboard with dynamic UI elements using React and Next.js for enhanced modularity and maintainability. Leveraged Next.js API Routes for facilitating efficient data fetching and handling.",
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
    {
        name: "College Chapter Website",
        description: "Designed a wesbite for GeeksforGeeks student Chapter of our college .Designed engaging interfaces and adapted various Bootstrap features..",
        tags: [{
                name: "html",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://bbdec-gfg-sc.netlify.app/",
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