import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import Link from 'next/link';
import { FiSend } from 'react-icons/fi';
import { LuConstruction } from 'react-icons/lu';

export const metadata = {
  title: 'Ames Engineering | Sales',
  description:
    'We aim to serve as consultants to our customers. If you have a question or problem you are trying to solve, our sales team is just a phone call away.',
};

export default function Sales() {
  return (
    <div>
      <div className='w-full px-10 2xl:px-80 pt-14'>
        <div id='sales'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Sales
          </h3>

          <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
            <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
              <p>
                Are you new to the world of road profiling and laser texture
                scanning? Our sales team is just a phone call away. If you have
                a question about one of our products or problem you are trying
                to solve, a conversation to talk through your options can be
                helpful. We aim to serve as consultants to our customers.
              </p>

              <p className='mt-4 font-bold'>
                For sales inquiries, contact us at{' '}
                <a
                  href='tel:5152928194'
                  className='hover:text-amesRed hover:underline transition duration-300'
                >
                  515-292-8194
                </a>{' '}
                or{' '}
                <Link
                  href='/sales/salesRequest'
                  className='hover:text-amesRed hover:underline transition duration-300'
                >
                  submit a sales request
                </Link>{' '}
                today!
              </p>
            </div>
            <div>
              <Image
                src='/images/sales.jpg'
                width={1000}
                height={1000}
                alt='Ames Sales'
                className='shadow-md'
              />
            </div>
          </div>
        </div>

        <div id='equipmentDelivery' className='mt-8'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Equipment Delivery
          </h3>

          <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
            <div className='hidden lg:block'>
              <Image
                src='/images/delivery.jpg'
                width={1000}
                height={1000}
                alt='Ames Equipment Delivery'
                className='shadow-md'
              />
            </div>
            <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
              <p>
                Customer satisfaction for us means delivering, installing, and
                training on all equipment related purchases. We will schedule
                deliveries at your desired time and location and plan for a
                customer orientation period with data collection, best
                practices, equipment care and maintenance, and Q&A time.
              </p>

              <p className='mt-4 font-bold'>
                Most of our products can be shipped to you, installing and
                training on-site!
              </p>
            </div>
            <div className='lg:hidden'>
              <Image
                src='/images/delivery.jpg'
                width={1000}
                height={1000}
                alt='Ames Equipment Delivery'
                className='shadow-md'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20 w-full'>
        <CTABanner
          text='Questions About Our Products?'
          subText='Contact our sales team today!'
          btnText='Get In Touch!'
          icon={<LuConstruction className='w-14 h-14' />}
          btnIcon={<FiSend className='hidden group-hover:flex w-4 h-4' />}
        />
      </div>
    </div>
  );
}
