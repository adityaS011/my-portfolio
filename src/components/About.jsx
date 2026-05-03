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
    "Early-stage SaaS experience at Atomicwork, building product-facing frontend surfaces where speed, clarity, and iteration matter.",
    "FinTech product experience at Mysa, working on detail-heavy flows where state, validation, API reliability, and UI precision matter.",
    "Comfortable owning frontend work through ambiguity: clarifying requirements, shaping UI states, integrating APIs, and polishing the final experience.",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white/45`}>Introduction</p>
        <h2 className='max-w-4xl text-white font-black tracking-tight md:text-[60px] sm:text-[48px] xs:text-[38px] text-[30px] leading-tight'>
          Frontend engineer for product teams.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-white/60 text-[18px] max-w-3xl leading-[32px]'
      >
        I am a frontend engineer who has worked inside early-stage SaaS and
        FinTech teams, where product requirements move fast and the UI still
        has to feel stable, clear, and trustworthy. I care about the whole
        frontend surface: component design, state management, API integration,
        edge cases, responsiveness, and the interaction details that make a
        product feel mature.
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
