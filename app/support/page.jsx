import CTABanner from '@/components/CTABanner';
import Image from 'next/image';
import Link from 'next/link';
import { FiSend } from 'react-icons/fi';
import { FaChalkboardTeacher } from 'react-icons/fa';

export const metadata = {
  title: 'Ames Engineering | Support',
  description:
    'For technical support and equipment maintenance, contact us at (515)-292-8194 or email us at techsupport@amesengineering.com.',
};

export default function Support() {
  return (
    <div>
      <div className='w-full px-10 2xl:px-80 pt-14'>
        <div id='techSupport'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Technical Support
          </h3>

          <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
            <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
              <p>
                We build our equipment with pride and aim to serve our customers
                with unmatched service after the sale. We believe that
                responsiveness and flexibility are keys to sustaining long term
                successful relationships. Our technical support ranges from
                on-call daily trouble shooting to onsite operator training.
                Should the need arise we are always just a phone call away.
              </p>

              <p className='mt-4 font-bold'>
                For technical support and equipment maintenance, contact us at{' '}
                <a
                  href='tel:5152928194'
                  className='hover:text-amesRed hover:underline transition duration-300'
                >
                  515-292-8194
                </a>{' '}
                or{' '}
                <Link
                  href='/support/supportRequest'
                  className='hover:text-amesRed hover:underline transition duration-300'
                >
                  submit a service request
                </Link>{' '}
                today!
              </p>
            </div>
            <div>
              <Image
                src='/images/rtpInUse.jpg'
                width={1000}
                height={1000}
                alt='Ames Tech Support'
                className='shadow-md'
              />
            </div>
          </div>
        </div>

        <div id='softwaresupport' className='mt-8'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Software Support
          </h3>

          <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
            <div className='hidden lg:block'>
              <Image
                src='/images/softwareSupport.jpg'
                width={1000}
                height={1000}
                alt='Ames Software Support'
                className='shadow-md'
              />
            </div>
            <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
              <p>
                Our proprietary software programs are designed to work
                seamlessly with our equipment for the most efficient data
                collection and analysis. We’re constantly updating our software
                to drive more productive outcomes for our customers. The
                critical information derived from our programs helps operators
                and site managers make better decisions in real time, and we
                want to make sure they have up-to-date tools.
              </p>
            </div>
            <div className='lg:hidden'>
              <Image
                src='/images/softwareSupport.jpg'
                width={1000}
                height={1000}
                alt='Ames Software Support'
                className='shadow-md'
              />
            </div>
          </div>
        </div>

        <div id='training' className='mt-8'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Training
          </h3>

          <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
            <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
              <p>
                In a world of changing specifications and standards, continued
                education for operators and field leaders improves outcomes,
                profitability, and operational excellence. Our standard training
                and delivery model applies to all new purchases. Additionally,
                we hold regional operator training sessions throughout the year,
                providing customers and non-customers with an opportunity to
                grow their organizational capabilities.
              </p>

              <p className='mt-4'></p>
            </div>
            <div>
              <Image
                src='/images/training.jpg'
                width={1000}
                height={1000}
                alt='Ames Training'
                className='shadow-md'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20 w-full'>
        <CTABanner
          text='Upcoming Training Events'
          subText='Contact our sales team for out training schedule!'
          btnText='Get In Touch!'
          icon={<FaChalkboardTeacher className='w-14 h-14' />}
          btnIcon={<FiSend className='hidden group-hover:flex w-4 h-4' />}
        />
      </div>
    </div>
  );
}
