import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { FaShippingFast } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';
import { PiPhoneCallBold } from 'react-icons/pi';

export default function Footer() {
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
      <section className='grid lg:grid-cols-3 py-10 w-full px-10 xl:px-40'>
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
                className='flex items-center justify-center lg:justify-start gap-1 hover:text-[#42b3e5] transition duration-300 group'
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
                  className='flex items-center justify-center lg:justify-start gap-1 hover:text-[#42b3e5] transition duration-300 group'
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
                  className='flex items-center justify-center lg:justify-start gap-1 hover:text-[#42b3e5] transition duration-300 group'
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
        <div className='p-5'>2</div>
        {/* Right */}
        <div className='p-5'>3</div>
      </section>
    </footer>
  );
}
