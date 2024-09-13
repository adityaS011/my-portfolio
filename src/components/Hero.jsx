import { motion } from "framer-motion";
import { styles } from "../styles";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-purple-400'>Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            I’m a web developer passionate about crafting dynamic,
            <br className='sm:block hidden' />
            responsive websites.
          </p>
        </div>
      </div>

      {/* Show the image on small devices */}
      <div className='flex justify-center items-center mt-0 pt-12'>
        <div className='w-3/4 sm:w-1/4 pt-12 mt-12'>
          <img
            src='https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png'
            alt='Web Developer'
            className='pt-12 mt-12'
          />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-purple-400 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-purple-400 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
