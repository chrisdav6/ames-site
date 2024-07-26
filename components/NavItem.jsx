'use client';

import { usePathname } from 'next/navigation';

export default function NavItem({ name, hover }) {
  const pathname = usePathname();
  const activeStyle = pathname.replace('/', '');

  return (
    <div
      className={` text-black-900 px-4 py-2 transition duration-300 hover:bg-red-500 hover:text-white ${
        activeStyle === name.toLowerCase() &&
        'bg-red-500 text-white transition duration-300'
      } ${hover && 'bg-red-500 text-white transition duration-300'}`}
    >
      {name}
    </div>
  );
}
