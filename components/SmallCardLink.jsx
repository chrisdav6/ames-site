import Link from 'next/link';
import Image from 'next/image';

export default function SmallCardLink({ href, src, alt, title, subTitle }) {
  return (
    <Link
      href={href}
      className='flex flex-col w-full bg-gray-200 group hover:shadow-lg'
    >
      <div className='relative w-full h-fit'>
        <Image
          src={src}
          alt={alt}
          className='object-cover xl:group-hover:brightness-75 transition duration-300 max-h-[225px]'
          width={1000}
          height={1000}
        />
      </div>
      <div className='text-center p-2 xl:group-hover:bg-[#CC0000] xl:group-hover:text-white transition duration-300'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='text-md'>{subTitle}</p>
      </div>
    </Link>
  );
}
