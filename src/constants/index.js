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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
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

const services = [
  {
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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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

const experiences = [
  {
    title: "Freelance Website Developer",
    company_name: "Self Emplooyed",
    icon: starbucks,
    iconBg: "#383E56",
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
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "As an engineering student juggling coursework and web development gigs, I've mastered the art of coding efficiency. Discover shortcuts and code snippets to speed up your development process and boost productivity. ",
    name: "Efficient Coding with Shortcuts & Snippets",
    designation: "#CodingShortcuts #WebDevHacks",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Being both a web developer and an engineering student, I understand the importance of choosing the right JavaScript framework. Dive into this brief comparison of React, Angular, and Vue to find the best fit for your next project. ",
    name: "JavaScript Frameworks: A Quick Comparison",
    designation: "#JavaScript #WebDevelopment",
    company: "",
    image: "",
  },
  {
    testimonial:
      "As a freelancer and engineering student, I've found that optimizing the user experience (UX) is crucial. From intuitive navigation to responsive design, Good UX  will ensure your website leaves a lasting impression.",
    name: "Streamlining UX: Crucial and impressive",
    designation: "#WebDevTips #UXDesign",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Ecommerce Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    
      tags: [
      {
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
    name: "Crypto Exchange",
    description:
      "User-friendly web3 cryptocurrency exchange platform, enabling efficient trading across various blockchain networks. Embracing decentralized technology.",
    tags: [
      {
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
    description:
      "Designed a wesbite for GeeksforGeeks student Chapter of our college .Designed engaging interfaces and adapted various Bootstrap features..",
    tags: [
      {
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
const certificates = [
  {
    name: "Coursera",
    description:
      "React Basics -Meta",
    tags: [
      {
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
    description:
      "Programming with JavaScript-Meta",
    tags: [
      {
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
    description:
      "Responsive Designing with HTML, CSS",
    tags: [
      {
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
