'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageSwiper({ images }) {
  return (
    <Swiper className='h-[500px] w-full overflow-hidden'>
      {images.map((image, idx) => (
        <SwiperSlide key={idx} className='w-full'>
          <div className='w-full'>
            <Image
              src={image.src}
              width={1000}
              height={1000}
              alt={image.alt}
              className='object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
