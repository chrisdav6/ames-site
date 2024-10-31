'use client';
import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function TestimonialCarousel() {
  const plugin = useRef(Autoplay({ delay: 8000, stopOnInteraction: true }));

  return (
    <Carousel
      className='mt-8'
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className='italic'>
          <div className='bg-gray-100 p-6 w-fit'>
            <p className='flex flex-col'>
              I talked to several users of these units. It turns out that just
              about everyone in our construction offices use them.
              <span className='block ml-none md:ml-auto text-amesRed mt-3'>
                — Manager, Iowa DOT
              </span>
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className='italic'>
          <div className='bg-gray-100 p-6 w-fit'>
            <p className='flex flex-col'>
              I thought, finally, somebody has this right!
              <span className='block ml-none md:ml-auto text-amesRed mt-3'>
                — Fleet Manager, DOT
              </span>
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className='italic'>
          <div className='bg-gray-100 p-6 w-fit'>
            <p className='flex flex-col'>
              We received the three GPS-DMI units today. I walked out into the
              parking lot and plugged our Nitestar heads into the GPS unit.
              <br />
              Went through your simple calibration procedure and road tested.
              The units worked as perfectly as you advertised.
              <span className='block ml-none md:ml-auto text-amesRed mt-3'>
                — District Equipment Manager, PENNDOT
              </span>
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
