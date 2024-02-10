// Carousel.tsx

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface CarouselProps {
  images: string[];
  captions: string[];
}


const Carousel: FC<CarouselProps> = ({ images, captions }) => {

  return (
    <div className="w-[100%] relative h-full flex flex-row">
      <Swiper 
        loop={true}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 1000,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper relative  w-[100%]"
      >
        
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="w-full h-[400px] bg-cover bg-top bg-no-repeat rounded-2xl relative"
            >
              <h2 className="text-8xl text-white font-abel w-[60%] p-4 z-20">
                {captions[index]}
              </h2>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
