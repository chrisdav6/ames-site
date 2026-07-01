// 'use client';
// import { useRouter } from 'next/navigation';
// import { FaSpinner } from 'react-icons/fa';

// export default function Payment() {
//   const router = useRouter();
//   router.push('https://api.ipospays.com/v1/sl/jWfeo_170925135559');

//   return (
//     <div className='w-full h-[600px]'>
//       <div className='flex items-center justify-center h-full'>
//         <h1 className='flex items-center gap-4 text-2xl'>
//           <FaSpinner className='animate-spin h-10 w-10' />
//           Redirecting to Payment Site...
//         </h1>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';

// export const metadata = {
//   title: 'Ames Engineering | Payment',
//   description: 'Pay your Ames Engineering Invoice Online',
// };

export default function Payment() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='min-h-[600px]'>
      <div className='w-full px-10 2xl:px-80 pt-16'>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Payment Terms & Conditions - Understanding Your Payment Options
        </h3>

        <p className='text-lg mt-8'>
          <strong>If you are paying by credit card via this link,</strong>{' '}
          please note that a 3% credit card surcharge will be{' '}
          <u>automatically</u> applied to this transaction. You will{' '}
          <u>enter the invoice total balance amount due</u> onto the payment
          page (do not calculate the new amount yourself). The final 'PAY' value
          will automatically calculate as the invoice amount x 1.03; this is the
          new total amount that will be charged to your card.
        </p>

        <p className='mt-5 mb-1 text-lg'>
          By checking the box below, you agree to:
        </p>

        <div className='flex items-center text-lg'>
          <input
            type='checkbox'
            name='payment'
            id='checkbox'
            className='scale-125 m-3'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <div>
            <p className='agree'>
              I agree to the terms outlined and confirm that I am authorized to
              accept them on behalf of my company.
            </p>
          </div>
        </div>

        {checked && (
          <div className='text-lg paymentAccept'>
            <p className='mt-4 font-bold mb-2'>
              As a recap, you are agreeing to:
            </p>
            <p className='mb-0'>
              • A 3% surcharge, above the invoice total balance due on the
              invoice, will be processed on the entered card.
            </p>
            <p>
              • Accepting these terms on behalf of the company represent, and
              that I am authorized to accept those terms on behalf of my
              company.
            </p>

            <p className='text-sm mt-8 font-bold mb-2'>
              To avoid this surcharge, you can pay via ACH/EFT/Wire.
            </p>
            <p className='text-sm'>
              Payment details can be found on the invoice received.
              <br />
              If you need an invoice with details, please email{' '}
              <a
                className='underline font-bold'
                href='mailto:accounting@amesengineering.com'
              >
                accounting@amesengineering.com
              </a>{' '}
              to request this information.
            </p>
            <p className='text-sm font-bold mt-2'>
              Thank you for your understanding, cooperation, and continued
              business partnership.
            </p>

            <a
              href='https://api.ipospays.com/v1/sl/jWfeo_170925135559'
              className='inline-block mb-2 mt-10 bg-amesRed text-white px-5 py-3 text-lg'
              role='button'
              aria-disabled='true'
              target='_blank'
            >
              Continue to Payment Site
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
