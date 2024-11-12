import Link from 'next/link';

export default function CTABanner({ text, subText, btnText, icon, btnIcon }) {
  return (
    <section className='2xl:px-80 2xl:mt-14'>
      <div className='flex flex-col text-center md:flex-row md:text-left items-center justify-between bg-[#F0F0F0] p-10 2xl:p-5'>
        <div className='flex items-center gap-2 text-[#202020]'>
          <div className='hidden lg:block'>{icon}</div>
          <div>
            <h3 className='text-3xl md:text-2xl font-bold'>{text}</h3>
            <p className='text-xl md:text-md mt-2 md:mt-0'>{subText}</p>
          </div>
        </div>
        <div className='mt-5 md:mt-0 min-w-fit'>
          <Link
            href='/sales/salesRequest'
            className='flex items-center gap-1 w-fit px-5 py-4 text-lg md:text-md md:px-3 md:py-2 border border-[#CC0000] bg-[#CC0000] text-white hover:bg-white hover:text-[#CC0000] transition duration-300 group'
          >
            {btnText}
            <span>{btnIcon}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
