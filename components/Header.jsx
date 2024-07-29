import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';

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
];

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-6 w-full py-5 px-10 xl:px-40 bg-white border-b'>
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
          <div className='hidden group-hover:flex flex-col gap-2 absolute p-2 bg-white border'>
            {productLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className='px-2 py-1 hover:bg-amesRed hover:text-white text-left text-nowrap'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </button>

        <button className='relative group'>
          <NavItem name='Support' />
          <div className='hidden group-hover:flex flex-col gap-2 absolute p-2 bg-white border'>
            {supportLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className='px-2 py-1 hover:bg-amesRed hover:text-white text-left text-nowrap'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </button>

        <button className='relative group'>
          <NavItem name='Sales' />
          <div className='hidden group-hover:flex flex-col gap-2 absolute p-2 bg-white border'>
            {salesLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className='px-2 py-1 hover:bg-amesRed hover:text-white text-left text-nowrap'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </button>

        <button className='relative group'>
          <NavItem name='About' />
          <div className='hidden group-hover:flex flex-col gap-2 absolute p-2 bg-white border'>
            {aboutLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className='px-2 py-1 hover:bg-amesRed hover:text-white text-left text-nowrap'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </button>

        <button className='relative group'>
          <NavItem name='Resources' />
          <div className='hidden group-hover:flex flex-col gap-2 absolute right-0 p-2 bg-white border'>
            {resourcesLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className='px-2 py-1 hover:bg-amesRed hover:text-white text-left text-nowrap'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </button>

        <button className='relative group'>
          <NavItem name='Contact' />
          <div className='hidden group-hover:flex flex-col gap-2 absolute right-0 p-2 bg-white border'>
            {contactLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className='px-2 py-1 hover:bg-amesRed hover:text-white text-left text-nowrap'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <nav className='hidden'></nav>
    </header>
  );
}
