import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const track = [...technologies, ...technologies];

  return (
    <div className='relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]'>
      <div className='tech-marquee flex w-max items-center gap-6 sm:gap-10'>
        {track.map((technology, index) => (
          <div
            key={`${technology.name}-${index}`}
            className='flex h-16 w-16 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl sm:h-20 sm:w-20'
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='h-full w-full object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
