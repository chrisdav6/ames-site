'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';
import { FiMenu } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const productLinks = [
  {
    name: '8300 High Speed Profiler',
    href: '/products/8300-high-speed-profiler',
  },
  {
    name: 'Transverse Profiling System',
    href: '/products/transverse-profiling-system',
  },
  {
    name: '6300 Lightweight Profiler',
    href: '/products/6300-lightweight-profiler',
  },
  {
    name: '4200 Profilograph',
    href: '/products/4200-profilograph',
  },
  {
    name: 'Laser Texture Scanner 9400/9400HD',
    href: '/products/laser-texture-scanner-model-9400',
  },
  {
    name: 'Rapid Laser Texture Scanner 9500',
    href: '/products/laser-texture-scanner-model-9500',
  },
  {
    name: 'Real-Time Profiler',
    href: '/products/real-time-profiler',
  },
  {
    name: 'Pro GPS-DMI Overview',
    href: '/products/ames-gps-dmi',
  },
  {
    name: 'Pro GPS-DMI 250',
    href: '/products/pro-gps-dmi-250',
  },
  {
    name: 'Pro GPS-DMI Laptop',
    href: '/products/ames-pro-gps-dmi-laptop',
  },
  {
    name: 'Pro GPS-DMI HD Imaging',
    href: '/products/ames-pro-gps-dmi-hd-imaging',
  },
  {
    name: 'LMI Gocator Laser System',
    href: '/products/lmi-gocator-laser',
  },
  {
    name: 'Ames AccuTexture 100',
    href: '/products/ames-accutexture-100',
  },
  {
    name: 'Profiler Software and Data Analysis',
    href: '/products/software-data-analysis',
  },
];

const supportLinks = [
  {
    name: 'Technical Support',
    href: '/support/#techsupport',
  },
  {
    name: 'Software Support',
    href: '/support/#softwaresupport',
  },
  {
    name: 'Training',
    href: '/support/#training',
  },
  {
    name: 'Support Request',
    href: '/support/supportRequest',
  },
  {
    name: 'Parts Request',
    href: '/support/supportRequest',
  },
];

const salesLinks = [
  {
    name: "Let's Work Together!",
    href: '/sales',
  },
  {
    name: 'Sales Request',
    href: '/sales/salesRequest',
  },
  {
    name: 'Equipment Delivery',
    href: '/sales/equipmentDelivery',
  },
];

const aboutLinks = [
  {
    name: 'Our Company',
    href: '/about',
  },
  {
    name: 'Our Team',
    href: '/about/our-team',
  },
];

const resourcesLinks = [
  {
    name: 'Research Reports',
    href: '/resources',
  },
  {
    name: 'Inertial Road Profilers FAQ',
    href: '/resources/inertial-road-profilers-faq',
  },
];

const contactLinks = [
  {
    name: 'Main Contact',
    href: '/contact',
  },
  {
    name: 'Contact Sales',
    href: '/sales/salesRequest',
  },
  {
    name: 'Contact Support',
    href: '/support/supportRequest',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Ames-Engineering-Inc-100068806555835',
    external: true,
    icon: <FaFacebook />,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/AmesEngineering',
    external: true,
    icon: <FaXTwitter />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ames_engineering',
    external: true,
    icon: <FaInstagram />,
  },
  {
    name: 'Youtube',
    href: 'https://youtube.com',
    external: true,
    icon: <IoLogoYoutube />,
  },
];

export default function Header() {
  const [showMobile, setShowMobile] = useState(false);
  const [closeHover, setCloseHover] = useState(false);

  const handleMobileIconClick = () => {
    setShowMobile(!showMobile);
  };

  const handleMobileClose = () => {
    if (showMobile) setShowMobile(false);
  };

  const handleCloseHoverOnClick = () => {
    setCloseHover(true);
    setTimeout(() => {
      setCloseHover(false);
    }, 200);
  };

  return (
    <header className='sticky top-0 z-20'>
      <div className='hidden md:flex items-center justify-between gap-6 w-full py-6 px-10 xl:px-40 bg-white border-b'>
        <div>
          <Link href='/'>
            <Image
              src='/images/ames-logo.svg'
              width={200}
              height={200}
              alt='Ames Engineering Logo'
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className='hidden md:flex items-center gap-2 text-sm lg:text-base xl:gap-4 xl:text-lg'>
          <button className='relative group'>
            <NavItem name='Products' />
            <div
              className={`hidden group-hover:flex flex-col gap-1 absolute p-2 bg-white border ${
                closeHover && 'group-hover:hidden'
              }`}
              onClick={handleCloseHoverOnClick}
            >
              {productLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 hover:bg-amesRed hover:text-white text-base text-left text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Support' />
            <div
              className={`hidden group-hover:flex flex-col gap-1 absolute p-2 bg-white border ${
                closeHover && 'group-hover:hidden'
              }`}
              onClick={handleCloseHoverOnClick}
            >
              {supportLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 hover:bg-amesRed hover:text-white text-base text-left text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Sales' />
            <div
              className={`hidden group-hover:flex flex-col gap-1 absolute p-2 bg-white border ${
                closeHover && 'group-hover:hidden'
              }`}
              onClick={handleCloseHoverOnClick}
            >
              {salesLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 hover:bg-amesRed hover:text-white text-base text-left text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='About' />
            <div
              className={`hidden group-hover:flex flex-col gap-1 absolute p-2 bg-white border ${
                closeHover && 'group-hover:hidden'
              }`}
              onClick={handleCloseHoverOnClick}
            >
              {aboutLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 hover:bg-amesRed hover:text-white text-base text-left text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Resources' />
            <div
              className={`hidden group-hover:flex flex-col gap-1 absolute right-0 p-2 bg-white border ${
                closeHover && 'group-hover:hidden'
              }`}
              onClick={handleCloseHoverOnClick}
            >
              {resourcesLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 hover:bg-amesRed hover:text-white text-base text-left text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Contact' />
            <div
              className={`hidden group-hover:flex flex-col gap-1 absolute right-0 p-2 bg-white border ${
                closeHover && 'group-hover:hidden'
              }`}
              onClick={handleCloseHoverOnClick}
            >
              {contactLinks.map((link, idx) => (
                <Link
                  target={link.external && '_blank'}
                  key={idx}
                  href={link.href}
                  className={`px-2 py-1 hover:bg-amesRed hover:text-white text-base text-left text-nowrap ${
                    link.icon && 'flex items-center gap-1'
                  }`}
                >
                  {link.icon && link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div className='flex flex-col items-center justify-between gap-6 w-full py-5 px-10 xl:px-40 bg-white border-b md:hidden'>
        <div className='flex items-center justify-between w-full'>
          <div>
            <Link href='/'>
              <Image
                onClick={handleMobileClose}
                src='/images/ames-logo.svg'
                width={200}
                height={200}
                alt='Ames Engineering Logo'
              />
            </Link>
          </div>

          <button onClick={handleMobileIconClick}>
            {showMobile ? (
              <IoClose className='w-8 h-8' />
            ) : (
              <FiMenu className='w-8 h-8' />
            )}
          </button>
        </div>

        <nav
          className={`${
            showMobile ? 'flex' : 'hidden'
          } flex-col items-center gap-1 text-sm lg:text-base xl:gap-4 xl:text-lg transition-all duration-1000 md:hidden`}
        >
          <button className='relative group'>
            <NavItem name='Products' mobile={true} />
            <div className='flex flex-col gap-1 p-2 bg-white'>
              {productLinks.map((link, idx) => (
                <Link
                  onClick={handleMobileClose}
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Support' mobile={true} />
            <div className='flex flex-col gap-1 p-2 bg-white'>
              {supportLinks.map((link, idx) => (
                <Link
                  onClick={handleMobileClose}
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Sales' mobile={true} />
            <div className='flex flex-col gap-1 p-2 bg-white'>
              {salesLinks.map((link, idx) => (
                <Link
                  onClick={handleMobileClose}
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='About' mobile={true} />
            <div className='flex flex-col gap-1 p-2 bg-white'>
              {aboutLinks.map((link, idx) => (
                <Link
                  onClick={handleMobileClose}
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Resources' mobile={true} />
            <div className='flex flex-col gap-1 p-2 bg-white'>
              {resourcesLinks.map((link, idx) => (
                <Link
                  onClick={handleMobileClose}
                  key={idx}
                  href={link.href}
                  className='px-2 py-1 text-nowrap'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </button>

          <button className='relative group'>
            <NavItem name='Contact' mobile={true} />
            <div className='flex flex-col gap-1 p-2 bg-white'>
              {contactLinks.map((link, idx) => (
                <Link
                  onClick={handleMobileClose}
                  target={link.external && '_blank'}
                  key={idx}
                  href={link.href}
                  className={`px-2 py-1 text-nowrap ${
                    link.icon && 'flex items-center justify-center gap-1'
                  }`}
                >
                  {link.icon && link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
