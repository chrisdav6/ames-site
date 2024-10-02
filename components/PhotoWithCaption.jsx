import Image from 'next/image';

export default function PhotoWithCaption({ image, alt, caption }) {
  return (
    <div className='w-full md:w-1/3 lg:w-1/4 relative h-[250px] border-[2px] border-gray-700'>
      <Image src={image} fill alt={alt} className='object-cover' />
      <p className='absolute bottom-0 left-0 py-1 px-2 text-xs bg-[#0F172A] text-white'>
        {caption}
      </p>
    </div>
  );
}
