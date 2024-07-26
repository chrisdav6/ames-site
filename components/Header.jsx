'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';

export default function Header() {
  const [hover, setHover] = useState(false);

  return (
    <header className='flex items-center justify-between gap-6 w-full py-5 px-10 xl:px-60 bg-white border-b'>
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
          <NavItem name='Products' hover={hover} />
          <div
            className='hidden group-hover:flex flex-col gap-2 absolute px-4 py-4 bg-white w-[350px] border'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              href='/products/8300-high-speed-profiler'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              8300 High Speed Profiler
            </Link>
            <Link
              href='/products/transverse-profiling-system'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Transverse Profiling System
            </Link>
            <Link
              href='/products/6300-lightweight-profiler'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              6300 Lightweight Profiler
            </Link>
            <Link
              href='/products/4200-profilograph'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              4200 Profilograph
            </Link>
            <Link
              href='/products/laser-texture-scanner-model-9400'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Laser Texture Scanner 9400/9400HD
            </Link>
            <Link
              href='/products/laser-texture-scanner-model-9500'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Rapid Laser Texture Scanner 9500
            </Link>
            <Link
              href='/products/real-time-profiler'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Real-Time Profiler
            </Link>
            <Link
              href='/products/pro-gps-dmi-250'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Pro GPS-DMI 250
            </Link>
            <Link
              href='/products/ames-pro-gps-dmi-laptop'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Pro GPS-DMI Laptop
            </Link>
            <Link
              href='/products/ames-pro-gps-dmi-hd-imaging'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Pro GPS-DMI HD Imaging
            </Link>
            <Link
              href='/products/lmi-gocator-laser'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              LMI Gocator Laser System
            </Link>
            <Link
              href='/products/ames-accutexture-100'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Ames AccuTexture 100
            </Link>
            <Link
              href='/products/software-data-analysis'
              className='p-1 hover:bg-amesRed hover:text-white text-left'
            >
              Profiler Software and Data Analysis
            </Link>
          </div>
        </button>

        <Link href='/support'>
          <NavItem name='Support' />
        </Link>
        <Link href='/sales'>
          <NavItem name='Sales' />
        </Link>
        <Link href='/about'>
          <NavItem name='About' />
        </Link>
        <Link href='/resources'>
          <NavItem name='Resources' />
        </Link>
        <Link href='/contact'>
          <NavItem name='Contact' />
        </Link>
      </nav>

      {/* MOBILE MENU */}
      <nav className='hidden'></nav>
    </header>
  );
}
