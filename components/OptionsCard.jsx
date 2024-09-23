import Image from 'next/image';
import Link from 'next/link';

export default function OptionsCard({ href, src, alt, title, text }) {
  return (
    <div className='flex flex-col lg:flex-row items-start lg:justify-start w-full '>
      <div>
        <Image
          src={src}
          alt={alt}
          className='object-cover md:max-h-[200px] md:max-w-[200px] w-100 md:mr-4 shadow-md'
          width={1000}
          height={1000}
        />
      </div>
      <div className='text-center md:text-left mt-5 md:mt-3 lg:mt-0'>
        {href ? (
          <Link href={href}>
            <h2 className='text-lg font-bold'>{title}</h2>
          </Link>
        ) : (
          <h2 className='text-lg font-bold'>{title}</h2>
        )}
        <p className='text-md'>{text}</p>
      </div>
    </div>
  );
}
