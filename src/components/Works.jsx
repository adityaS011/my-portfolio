/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "./Carousel";

const ProjectCard = ({
  index,
  name,
  description,
  highlights = [],
  tags = [],
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", Math.min(index * 0.12, 0.6), 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2.5 shadow-card backdrop-blur-xl sm:w-[360px] sm:p-3 w-full'
      >
        <div className='relative w-full h-[132px] sm:h-[210px] cursor-pointer overflow-hidden rounded-2xl bg-[#050816] p-2' onClick={() => window.open(source_code_link, "_blank")}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full rounded-xl object-contain opacity-95 transition duration-500 hover:scale-[1.02] hover:opacity-100'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center'>
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain opacity-80'
              />
            </div>
          </div>
        </div>

        <div className='mt-3 sm:mt-5'>
          <h3 className='text-white font-semibold tracking-tight text-[20px] leading-7 sm:text-[24px]'>{name}</h3>
          <p className='mt-1.5 text-white/55 text-[13px] leading-5 line-clamp-2 sm:mt-2 sm:min-h-[84px] sm:text-[14px] sm:leading-6 sm:line-clamp-none'>{description}</p>
        </div>

        {highlights.length > 0 && (
          <ul className='mt-3 space-y-1.5 sm:mt-4 sm:space-y-2'>
            {highlights.map((highlight, highlightIndex) => (
              <li
                key={`${name}-${highlight}`}
                className={`${highlightIndex > 1 ? "hidden sm:flex" : "flex"} gap-2 text-[12px] leading-5 text-white/75 sm:text-[13px]`}
              >
                <span className='mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/70' />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className='mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className='rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/65 sm:text-[12px]'
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const TAB_COPY = {
  projects: {
    subhead: "Selected work",
    heading: "Product interfaces, AI workflows, and full-stack builds.",
    paragraph:
      "Selected work that shows how I think through product UI and ship complete experiences: responsive layouts, reusable components, API-driven states, AI workflow interfaces, and practical frontend decisions across React, Next.js, TypeScript, Node.js, and MERN.",
  },
  certifications: {
    subhead: "Credentials",
    heading: "Certifications",
    paragraph:
      "Courses and credentials that back the fundamentals: React, JavaScript, and responsive web design.",
  },
};

const Works = () => {
  const [activeTab, setActiveTab] = useState(() =>
    typeof window !== "undefined" && window.location.hash === "#certifications"
      ? "certifications"
      : "projects"
  );

  useEffect(() => {
    const onHashChange = () => {
      setActiveTab(window.location.hash === "#certifications" ? "certifications" : "projects");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectTab = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", tab === "certifications" ? "#certifications" : "#projects");
  };

  const items = activeTab === "projects" ? projects : certificates;
  const copy = TAB_COPY[activeTab];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white/45`}>{copy.subhead}</p>
        <h2 className='max-w-4xl text-white font-black tracking-tight md:text-[60px] sm:text-[48px] xs:text-[38px] text-[30px] leading-tight'>
          {copy.heading}
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-5 text-white/60 text-[18px] max-w-3xl leading-[32px]'
        >
          {copy.paragraph}
        </motion.p>
      </div>

      <div className='mt-8 inline-flex gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl'>
        <button
          type='button'
          onClick={() => selectTab("projects")}
          className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition ${
            activeTab === "projects" ? "bg-white text-black" : "text-white/60 hover:text-white"
          }`}
        >
          Projects
        </button>
        <button
          type='button'
          onClick={() => selectTab("certifications")}
          className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition ${
            activeTab === "certifications" ? "bg-white text-black" : "text-white/60 hover:text-white"
          }`}
        >
          Certifications
        </button>
      </div>

      <span className='hash-span' id='certifications'>&nbsp;</span>

      <div className='mt-6 sm:mt-10'>
        <Carousel ariaLabel={activeTab === "projects" ? "Projects" : "Certifications"}>
          {items.map((item, index) => (
            <ProjectCard key={`${activeTab}-${index}`} index={index} {...item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
