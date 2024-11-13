import Image from 'next/image';

export default function TeamCard({ img, alt, name, text1, text2, text3 }) {
  return (
    <div className='flex flex-col lg:flex-row md:items-center gap-6'>
      {/* Image Container */}
      <div className='max-w-[250px] 2xl:max-w-[225px] mx-auto'>
        <Image
          src={img}
          width={1000}
          height={1000}
          alt={alt}
          className='border-2'
        />
      </div>
      {/* Description */}
      <div>
        <h3 className='font-bold text-xl mb-3'>{name}</h3>
        <div className='flex flex-col gap-4'>
          {text1 && <p>{text1}</p>}
          {text2 && <p>{text2}</p>}
          {text3 && <p>{text3}</p>}
        </div>
      </div>
    </div>
  );
}
