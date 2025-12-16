import { FaHollyBerry } from 'react-icons/fa6';

const HolidayMessage = () => {
  return (
    <div className='bg-amesRed p-2 text-white text-center'>
      <div className='flex items-center justify-center gap-3 px-10 2xl:px-80'>
        <FaHollyBerry className='hidden xl:block w-5 h-5' />
        <p>
          Our offices will be closed for the holidays from 12/24 and reopening
          1/2. From the Ames Engineering family to you, Happy Holidays and Happy
          New Year!
        </p>
        <FaHollyBerry className='hidden xl:block w-5 h-5' />
      </div>
    </div>
  );
};

export default HolidayMessage;
