import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Custom404() {
  return (
    <div className='flex items-center justify-center w-full px-10 2xl:px-80 pt-14'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-3xl text-center'>
          <span className='font-bold block text-5xl'>Oops!</span> You seem to be
          on the wrong path!
        </h1>
        <Image
          src='/images/wrongway.png'
          width={1000}
          height={1000}
          alt='404 Not Found!'
          className='max-w-[350px] rounded-lg shadow-lg'
        />

        <Link href='/'>
          <Button className='text-xl'>
            Let us help you get back on track!
          </Button>
        </Link>
      </div>
    </div>
  );
}
