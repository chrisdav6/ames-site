import Link from 'next/link';
import Image from 'next/image';

export default function ProductGridItem({
  href,
  src,
  alt,
  title,
  subTitle,
  absoulteText,
}) {
  return (
    <Link
      href={href}
      className='flex flex-col w-full bg-gray-200 group hover:shadow-lg'
    >
      <div className='relative w-full h-fit'>
        {absoulteText && (
          <div className='absolute top-5 left-0 bg-[#CC0000] py-2 px-3 text-white font-bold z-10'>
            {absoulteText}
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          className='object-cover xl:group-hover:brightness-75 transition duration-300 max-h-[225px]'
          width={1000}
          height={1000}
        />
      </div>
      <div className='text-center p-4 xl:group-hover:bg-[#CC0000] xl:group-hover:text-white transition duration-300'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-lg'>{subTitle}</p>
      </div>
    </Link>
  );
}
