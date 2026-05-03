import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white/75 text-[17px] leading-7'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {name}
          </p>
          <p className='mt-1 text-white/45 text-[12px]'>
            {designation}  {company}
          </p>
        </div>

        {/* <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /> */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 rounded-[32px] border border-white/10 bg-white/[0.025]'>
      <div
        className={`rounded-[32px] ${styles.padding} min-h-[260px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-white/45`}>Positioning</p>
          <h2 className='text-white font-black tracking-tight md:text-[60px] sm:text-[48px] xs:text-[38px] text-[30px] leading-tight'>
            Why I can operate well in product teams.
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pt-4 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
