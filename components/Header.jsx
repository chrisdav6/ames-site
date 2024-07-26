'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';

export default function Header() {
  const [hover, setHover] = useState(false);

  return (
    <header className='flex items-center justify-between gap-6 w-full py-5 px-10 xl:px-48 bg-white border-b'>
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
        <Link href='/products' className='relative group'>
          <NavItem name='Products' hover={hover} />
          <div
            className='hidden group-hover:flex flex-col gap-4 absolute px-4 py-2 bg-white w-[300px] border'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              href='/products/8300-high-speed-profiler'
              className='py-2 hover:border-b border-red-500'
            >
              8300 High Speed Profiler
            </Link>
            <Link href='/' className='py-2 hover:border-b border-red-500'>
              Transverse Profiling System
            </Link>
          </div>
        </Link>
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
