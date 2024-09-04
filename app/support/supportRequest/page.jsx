import { SupportForm } from '@/components/forms/SupportForm';

export const metadata = {
  title: 'Ames Engineering | Support Request',
  description:
    'Fill out this brief form for assistance with technical support and equipment maintenance, ',
};

export default function SupportRequest() {
  return (
    <div className='w-full px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Service Request
        </h3>
        <div className='text-center md:text-left text-lg mt-4'>
          <p>
            Do you need service, calibration or parts for one of our products?
          </p>
          <p className='font-bold'>Email us, we’re happy to help!</p>
        </div>
      </div>

      <div>
        <SupportForm />
      </div>
    </div>
  );
}
