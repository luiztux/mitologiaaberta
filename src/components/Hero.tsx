import { motion, easeOut } from 'framer-motion';
import { magazines } from '../data/data';
import { logo } from '../assets/Assets';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // anima cada filho com atraso
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const Hero = () => {
  return (
    <div className='relative bg-gradient-to-b from-mine-shaft-900 to-mine-shaft-950 py-12 px-4 flex flex-col items-center justify-center'>
      {/* Logo */}
      <div className='absolute flex items-center z-10 shadow-2xl shadow-mine-shaft-600'>
        <img src={logo} alt='Logo' className='md:w-72 w-52 h-auto' />
      </div>

      {/* Revistas com animação */}
      <motion.div
        className='grid grid-cols-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 md:gap-6 max-w-6xl'
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {magazines.map((magazine) => (
          <motion.div
            key={magazine.id}
            variants={itemVariants}
            className='md:w-32 md:h-44 w-12 h-24 bg-zinc-800 rounded-lg overflow-hidden shadow-lg'
          >
            <img
              src={magazine.image}
              alt={magazine.title}
              className='w-full h-full object-cover'
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
