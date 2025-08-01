import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { bird } from '../assets/Assets';
import { Footer } from './Footer';

export const Contact = () => {
  return (
    <div className='bg-mine-shaft-900 text-white py-16 px-4 w-full'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Ilustração */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='md:flex justify-center hidden'
        >
          <img
            src={bird}
            alt='Pássaro entregando uma carta'
            className='w-80 h-auto'
          />
        </motion.div>

        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-8'
        >
          <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold mb-2'>Contate-nos</h2>
            <p className='text-lg'>
              Fale com a equipe da Revista Mitologia Aberta
            </p>
          </div>

          <div className='bg-mine-shaft-800 md:p-6 p-2 rounded-lg shadow-lg space-y-4'>
            <div>
              <h4 className='text-xl font-semibold'>Mitologia Aberta</h4>
              <div className='flex items-center gap-3 mt-2'>
                <Icon
                  icon='material-symbols:mail-rounded'
                  className='md:text-2xl text-xl text-serenade-400'
                />
                <a
                  href='mailto:hermes@mitologiaaberta.com.br'
                  className='hover:underline text-sm'
                >
                  hermes@mitologiaaberta.com.br
                </a>
              </div>
            </div>

            <div>
              <h4 className='text-xl font-semibold'>
                Editora Amarath
              </h4>
              <div className='flex items-center gap-3 mt-2'>
                <Icon
                  icon='material-symbols:home-rounded'
                  className='md:text-4xl text-4xl text-serenade-400'
                />
                <span className='text-sm'>
                  Rua Henrique Dias, 56 - Jardim Aclimação - Santo André - SP CEP: 09171-580
                </span>
              </div>
              {/* <div className='flex items-center gap-3 mt-2'>
                <Icon
                  icon='material-symbols:phone-in-talk-rounded'
                  className='md:text-3xl text-2xl text-serenade-400'
                />
                <span className='text-sm'>(11) 3721-3491</span>
              </div> */}
            </div>

            <div>
              <h4 className='text-xl font-semibold'>Redes Sociais</h4>
              <div className='flex gap-4 mt-2'>
                <a
                  href='https://www.facebook.com/RevistaMitologiaAberta/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-serenade-400'
                >
                  <Icon icon='ic:baseline-facebook' className='text-xl' />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCQ6qFlP2bOHv34Lxhnl0yow'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-serenade-400'
                >
                  <Icon icon='mdi:youtube' className='text-xl' />
                </a>
                <a
                  href='https://www.instagram.com/mitologiaaberta/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-serenade-400'
                >
                  <Icon icon='mdi:instagram' className='text-xl' />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};
