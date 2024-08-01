'use client';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { FaShippingFast } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';
import { PiPhoneCallBold } from 'react-icons/pi';
import { FaRegThumbsUp } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export default function Footer() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  //Scroll to top
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className='flex flex-col items-center justify-center w-full bg-[#202020] text-white'>
      {/* 3 Part Section */}
      <section className='grid lg:grid-cols-3 w-full xl:px-40'>
        <Link href='/sales/equipmentDelivery'>
          <div className='flex items-center gap-4 bg-[#FF403F] p-5'>
            <div className='hidden 2xl:block'>
              <FaShippingFast className='w-14 h-14' />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>Equipment Delivery</h3>
              <p className='text-xl'>Equipment Delivery Available</p>
            </div>
          </div>
        </Link>
        <Link href='/support#training'>
          <div className='flex items-center gap-4 bg-[#DC3130] p-5'>
            <div className='hidden 2xl:block'>
              <FaChalkboardTeacher className='w-14 h-14' />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>Training</h3>
              <p className='text-xl'>Operator Training Available</p>
            </div>
          </div>
        </Link>
        <Link href='/sales/salesRequest'>
          <div className='flex items-center gap-4 bg-[#CC0000] p-5'>
            <div className='hidden 2xl:block'>
              <BiPurchaseTagAlt className='w-14 h-14' />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>Purchase</h3>
              <p className='text-xl'>On-Site Demonstrations</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Lower Footer Section */}
      <section className='grid lg:grid-cols-3 gap-10 py-6 w-full px-10 xl:px-40'>
        {/* Left */}
        <div className='p-5 text-center lg:text-left'>
          <h3 className='text-2xl font-bold'>Contact Us</h3>
          <hr className='w-48 h-[2px] mx-auto border-0 mt-2 bg-[#42b3e5] lg:mx-0' />

          <div className='mt-5'>
            <address className='text-lg not-italic text-[#909090]'>
              Ames Engineering
              <br />
              1293 XE Place
              <br />
              Ames, IA 50014
              <br />
              <a
                href='tel:5152928194'
                className='flex items-center mx-auto lg:mx-0 w-fit gap-1 hover:text-[#42b3e5] transition duration-300 group'
              >
                515-292-8194
                <span className='hidden lg:group-hover:block'>
                  <PiPhoneCallBold />
                </span>
              </a>
            </address>
            <div className='text-lg mt-5 text-[#909090]'>
              <p>
                <Link
                  href='/sales/salesRequest'
                  className='flex items-center mx-auto lg:mx-0 w-fit gap-1 hover:text-[#42b3e5] transition duration-300 group'
                >
                  Contact Sales
                  <span className='hidden lg:group-hover:block'>
                    <FaTelegramPlane />
                  </span>
                </Link>
              </p>
              <p className='-mt-1'>
                <Link
                  href='/support/supportRequest'
                  className='flex items-center mx-auto lg:mx-0 w-fit gap-1 hover:text-[#42b3e5] transition duration-300 group'
                >
                  Contact Support
                  <span className='hidden lg:group-hover:block'>
                    <FaTelegramPlane />
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-center gap-2 lg:justify-start'>
            <a
              href='https://www.facebook.com/p/Ames-Engineering-Inc-100068806555835'
              target='_blank'
            >
              <FaFacebook className='w-7 h-7 text-[#909090] hover:text-[#0865FE] transition duration-300' />
            </a>
            <a href='https://x.com/AmesEngineering' target='_blank'>
              <FaXTwitter className='w-7 h-7 text-[#909090] hover:text-[#000000] transition duration-300' />
            </a>
            <a
              href='https://www.instagram.com/ames_engineering'
              target='_blank'
            >
              <FaInstagram className='w-7 h-7 text-[#909090] hover:text-[#fc5cfc] transition duration-300' />
            </a>
            <a href='https://www.youtube.com' target='_blank'>
              <IoLogoYoutube className='w-7 h-7 text-[#909090] hover:text-[#F40000] transition duration-300' />
            </a>
          </div>
        </div>
        {/* Center */}
        <div className='p-5 text-center lg:text-left'>
          <h3 className='text-2xl font-bold'>On Site Demonstrations</h3>
          <hr className='w-48 h-[2px] mx-auto border-0 mt-2 bg-[#42b3e5] lg:mx-0' />

          <div className='mt-5'>
            <p className='text-lg text-[#909090] leading-6'>
              Interested in one of our products? We love giving demonstration on
              our various technologies and sensors. Set up an appointment today!
              <Link
                href='/sales/salesRequest'
                className='flex items-center justify-center lg:justify-start w-fit gap-2 bg-amesRed py-4 px-6 mt-5 mx-auto lg:mx-0 hover:bg-[#CC0000] transition duration-300 text-white group'
              >
                Let's Do This!
                <span className='hidden lg:group-hover:block'>
                  <FaRegThumbsUp />
                </span>
              </Link>
            </p>
          </div>
        </div>
        {/* Right */}
        <div className='p-5 text-center lg:text-left'>
          <h3 className='text-2xl font-bold'>Engineering</h3>
          <hr className='w-48 h-[2px] mx-auto border-0 mt-2 bg-[#42b3e5] lg:mx-0' />

          <div className='mt-5'>
            <p className='text-lg text-[#909090] leading-6'>
              Ames Engineering is at the forefront in the development of sensor
              technology for pavement measurements. Over the years, we have
              worked side-by-side with the paving industry and government
              agencies to develop systems that yield exceptional data accuracy
              and performance. Recent research reports are listed below, and we
              invite you to review them...{' '}
              <Link
                href='/resources'
                className='hover:text-[#42b3e5] transition duration-300 underline'
              >
                (Read More)
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Copyright Footer Section */}
      <section className='flex flex-col md:flex-row items-center justify-between w-full py-8 px-10 xl:px-40 bg-[#151515]'>
        <div>
          <p>
            &copy; 2024 Ames Engineering, LLC -
            <Link
              href='/privacy-policy'
              className='hover:text-[#42b3e5] transition duration-300 underline ml-1'
            >
              Privacy Policy
            </Link>
          </p>
        </div>
        <div>
          <button
            onClick={scrollToTop}
            href='/'
            className='flex items-center gap-2 hover:text-[#42b3e5] transition duration-300'
          >
            <p>Go To Top</p>
            <IoIosArrowDropupCircle />
          </button>
        </div>
      </section>
    </footer>
  );
}
