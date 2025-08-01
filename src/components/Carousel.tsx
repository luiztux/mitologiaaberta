import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { Icon } from '@iconify/react';
import { magazines } from '../data/data';
import { Tooltip } from 'antd';
import { usePdfModalContext } from '../contexts/modal/PdfModalContext';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export const Carousel = () => {
  const { handleOpenModal } = usePdfModalContext();
  const [selectedMagazineId, setSelectedMagazineId] = useState<number | null>(
    null
  );
  const swiperRef = useRef<any>(null); // Para controlar o swiper externamente
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
  }, []);

  const handleMagazineClick = (id: number) => {
    setSelectedMagazineId(selectedMagazineId === id ? null : id);
  };

  return (
    <div className='flex flex-col my-10 w-full p-2'>
      <div className='md:px-32 p-2 text-center md:text-start'>
        <h2 className='text-zinc-600 text-3xl'>edições</h2>
      </div>

      <div className='bg-serenade-600 h-1.5 w-1/2 mx-auto md:w-36 rounded-md md:ml-20' />
      {isMobile && (
        <div className='w-full mt-10 text-sm text-center'>
          <span>
            Arraste para ver mais revistas ou toque em uma revista para ver mais
            detalhes
          </span>
        </div>
      )}

      <div className='relative md:max-w-4xl w-full mt-10 mx-auto'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1.15,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.15,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow]}
          className='w-full'
        >
          {magazines.map((magazine) => (
            <SwiperSlide key={magazine.id} className='flex justify-center'>
              <div
                className={`relative w-72 h-96 transform transition-transform duration-500 ${
                  selectedMagazineId === magazine.id ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleMagazineClick(magazine.id)}
              >
                <Tooltip title='Arraste para ver mais ou clique para detalhes'>
                  <div className='absolute inset-0 backface-hidden'>
                    <img
                      src={magazine.image}
                      alt={magazine.title}
                      className='w-full h-full object-cover rounded-lg'
                    />

                    {selectedMagazineId === magazine.id && (
                      <div className='absolute inset-0 bg-neutral-950/80 text-white text-center flex flex-col items-center justify-center p-4 rounded-lg transform rotate-y-180 space-y-1.5'>
                        <h3 className='text-lg font-bold mb-2'>
                          {magazine.title}
                        </h3>
                        <p className='text-sm'>
                          Lançamento: {magazine.release}
                        </p>
                        <p className='text-sm'>
                          Artista da capa: {magazine.artista}
                        </p>
                        <p className='text-sm mt-2'>{magazine.preface}</p>
                        <button
                          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer'
                          type='button'
                          onClick={() => handleOpenModal(magazine.url)}
                        >
                          Abrir
                        </button>
                      </div>
                    )}
                  </div>
                </Tooltip>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões personalizados abaixo do swiper */}
        <div className='mt-6 flex justify-center gap-6'>
          <button
            type='button'
            title='Anterior'
            onClick={() => swiperRef.current?.slidePrev()}
            className='bg-zinc-800 text-white px-4 py-2 rounded-full hover:bg-serenade-600 transition cursor-pointer'
          >
            <Icon
              icon='material-symbols:arrow-back-ios-new-rounded'
              className='text-xl'
            />
          </button>

          <button
            type='button'
            title='Próximo'
            onClick={() => swiperRef.current?.slideNext()}
            className='bg-zinc-800 text-white px-4 py-2 rounded-full hover:bg-serenade-600 transition cursor-pointer'
          >
            <Icon
              icon='material-symbols:arrow-forward-ios-rounded'
              className='text-xl'
            />
          </button>
        </div>
      </div>
    </div>
  );
};
