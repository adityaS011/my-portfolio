import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full rounded-2xl border border-white/10 bg-white/[0.04] shadow-card'
    >
      <div
        className='rounded-2xl py-6 px-10 min-h-[210px] flex justify-evenly items-center flex-col backdrop-blur-xl'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 object-contain cursor-pointer opacity-90'
           onClick={() => window.open(link, "_blank")}
        />


        <h3 className='text-white text-[18px] font-semibold tracking-tight text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const strengths = [
    "Frontend depth in React, Next.js, TypeScript, Tailwind, state management, responsive UI, and component-driven product surfaces.",
    "Product engineering range across SaaS and FinTech workflows, where user flows, validation, API reliability, and UI precision matter.",
    "Full-stack foundations through Node.js, MongoDB, API-driven interfaces, workflow builders, and practical AI product demos.",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white/45`}>Introduction</p>
        <h2 className='max-w-4xl text-white font-black tracking-tight md:text-[60px] sm:text-[48px] xs:text-[38px] text-[30px] leading-tight'>
          Frontend engineer who builds product-quality web apps.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-white/60 text-[18px] max-w-3xl leading-[32px]'
      >
        I am a frontend engineer focused on product-quality web experiences:
        React, Next.js, TypeScript, state management, API integration,
        responsiveness, and the interaction details that make software feel
        clear and dependable. I also work with Node.js, MongoDB, and AI
        workflow interfaces when the product needs more than the UI layer.
      </motion.p>

      <div className='mt-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3'>
        {strengths.map((strength) => (
          <div
            key={strength}
            className='rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-[15px] leading-7 text-white/72 backdrop-blur-xl'
          >
            {strength}
          </div>
        ))}
      </div>

      <div className='mt-14 flex flex-wrap gap-10'>

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />

        ))}

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
