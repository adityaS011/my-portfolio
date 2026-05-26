import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const stats = [
    { value: "Frontend", label: "React, TypeScript, product UI" },
    { value: "Product", label: "UX judgment, states, workflows" },
    { value: "Full stack", label: "APIs, Node.js, AI integrations" },
  ];

  const introOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.32], [0, -52]);
  const showcaseOpacity = useTransform(scrollYProgress, [0.2, 0.42, 0.95], [0, 1, 1]);
  const showcaseY = useTransform(scrollYProgress, [0.2, 0.42], [80, 0]);
  const deviceScale = useTransform(scrollYProgress, [0.25, 0.68, 1], [0.82, 1.04, 0.98]);
  const deviceRotate = useTransform(scrollYProgress, [0.25, 0.68, 1], [-7, 0, 4]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.16, 0.42, 0.2]);

  return (
    <section ref={heroRef} className='relative h-[220vh] w-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),rgba(5,8,22,0)_34%),linear-gradient(180deg,#050816_0%,#080a12_100%)]'>
      <div className='sticky top-0 h-screen overflow-hidden'>
        <motion.div
          style={{ opacity: glowOpacity }}
          className='absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[120px]'
        />

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className={`absolute inset-0 z-30 mx-auto flex max-w-6xl flex-col items-center justify-center ${styles.paddingX} pt-24 text-center`}
        >
          <div className='max-w-5xl'>
            <p className='mb-5 text-[12px] sm:text-[14px] uppercase tracking-[0.28em] text-white/55'>
              Full Stack Engineer | React, TypeScript, Node.js
            </p>
            <h1 className='text-[42px] font-black leading-[0.95] tracking-tight text-white xs:text-[54px] sm:text-[76px] lg:text-[96px]'>
              Hi, I&apos;m Aditya.
            </h1>
            <p className='mx-auto mt-6 max-w-3xl text-[19px] font-medium leading-8 text-white/66 sm:text-[24px] sm:leading-9'>
              I build polished web experiences with React, Next.js, TypeScript,
              Tailwind CSS, API integration, state management, Node.js, MongoDB,
              and AI-powered workflow interfaces.
            </p>

            <div className='mt-9 flex flex-wrap justify-center gap-3'>
              <a
                href='#projects'
                className='rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black transition hover:bg-white/85'
              >
                View Work
              </a>
              <a
                href='/AdityaSingh_Resume.pdf'
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10'
              >
                Resume
              </a>
              <a
                href='https://www.linkedin.com/in/adi008/'
                target='_blank'
                rel='noreferrer'
                className='rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: showcaseOpacity, y: showcaseY }}
          className={`pointer-events-none absolute inset-0 z-20 mx-auto grid max-w-7xl items-center gap-5 ${styles.paddingX} py-16 lg:grid-cols-[0.98fr_1.02fr] lg:gap-8 lg:pt-24`}
        >
          <div className='max-w-2xl text-left'>
            <p className='mb-3 text-[12px] uppercase tracking-[0.28em] text-white/45'>
              How I Work
            </p>
            <h2 className='text-[28px] font-black leading-[1.04] tracking-tight text-white xs:text-[38px] sm:text-[50px] xl:text-[56px]'>
              I turn product complexity into usable, reliable interfaces.
            </h2>
            <p className='mt-4 max-w-xl text-[15px] leading-7 text-white/60 sm:text-[16px] sm:leading-7'>
              My edge is not just building screens. It is understanding the
              product problem, designing the right UI states, wiring data
              carefully, handling edge cases, and making the final experience
              feel stable in real production workflows.
            </p>

            <div className='mt-5 grid gap-3 sm:grid-cols-3'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl sm:min-h-[112px]'
                >
                  <p className='text-[18px] font-bold tracking-tight text-white'>{stat.value}</p>
                  <p className='mt-1 text-[13px] leading-5 text-white/50'>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ scale: deviceScale, rotate: deviceRotate }}
            className='relative mx-auto hidden aspect-[4/3] w-full max-w-[500px] lg:block lg:max-w-[610px] xl:max-w-[660px]'
          >
            <div className='absolute inset-0 rounded-[38px] border border-white/15 bg-white/[0.05] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl'>
              <div className='h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0d111c]'>
                <div className='flex h-12 items-center justify-between border-b border-white/10 px-5'>
                  <div className='flex gap-2'>
                    <span className='h-3 w-3 rounded-full bg-white/25' />
                    <span className='h-3 w-3 rounded-full bg-white/15' />
                    <span className='h-3 w-3 rounded-full bg-white/10' />
                  </div>
                  <div className='h-2 w-28 rounded-full bg-white/10' />
                </div>

                <div className='grid h-[calc(100%-48px)] grid-cols-[0.72fr_1fr] gap-4 p-5'>
                  <div className='space-y-4'>
                    <div className='rounded-2xl border border-white/10 bg-white/[0.06] p-4'>
                      <div className='mb-4 h-3 w-24 rounded-full bg-white/20' />
                      <div className='space-y-2'>
                        <div className='h-2 rounded-full bg-white/12' />
                        <div className='h-2 w-3/4 rounded-full bg-white/10' />
                      </div>
                    </div>
                    <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-4'>
                      <div className='mb-4 h-3 w-20 rounded-full bg-white/16' />
                      <div className='grid grid-cols-2 gap-2'>
                        <div className='h-14 rounded-xl bg-white/10' />
                        <div className='h-14 rounded-xl bg-white/[0.06]' />
                      </div>
                    </div>
                  </div>

                  <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5'>
                    <div className='absolute right-6 top-6 h-28 w-28 rounded-full bg-white/15 blur-2xl' />
                    <div className='relative z-10'>
                      <div className='mb-5 h-4 w-36 rounded-full bg-white/22' />
                      <div className='mb-6 h-20 rounded-3xl bg-gradient-to-br from-white/20 to-white/[0.04]' />
                      <div className='space-y-3'>
                        {["Ambiguous product requirements", "Complex state and API flows", "AI workflow interfaces"].map((item) => (
                          <div key={item} className='flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3'>
                            <span className='text-[12px] font-medium text-white/70'>{item}</span>
                            <span className='h-2 w-2 rounded-full bg-white/60' />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
