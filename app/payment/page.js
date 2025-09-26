import { redirect } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export const metadata = {
  title: 'Ames Engineering | Payment',
  description: 'Pay your Ames Engineering invoice online',
};

export default function Payment() {
  redirect('https://api.ipospays.com/v1/sl/jWfeo_170925135559');

  return (
    <div className='w-full h-[600px]'>
      <div className='flex items-center justify-center h-full'>
        <h1 className='flex items-center gap-4 text-2xl'>
          <FaSpinner className='animate-spin h-10 w-10' />
          Redirecting to Payment Site...
        </h1>
      </div>
    </div>
  );
}
