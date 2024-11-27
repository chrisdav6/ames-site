import { WarrantyForm } from '@/components/forms/WarrantyForm';

export const metadata = {
  title: 'Ames Engineering | Product Warranty Registration',
  description:
    'Fill out this brief form to submit your product warranty registration',
};

export default function ProductRegistration() {
  return (
    <div className='w-full px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-center md:text-left text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Product Warranty Registration
        </h3>
        <div className='text-center md:text-left text-lg mt-4'>
          <p>Welcome to the Ames Engineering product family!</p>
          <p className='font-bold'>Register your product warranty below.</p>
        </div>
      </div>

      <div>
        <WarrantyForm />
      </div>
    </div>
  );
}
