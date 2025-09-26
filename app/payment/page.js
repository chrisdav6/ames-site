'use client';
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

export default function Payment() {
  const router = useRouter();
  window.open('https://api.ipospays.com/v1/sl/jWfeo_170925135559', '_blank');
  router.push('/');

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
