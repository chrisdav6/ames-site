import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { FaHollyBerry } from 'react-icons/fa6';

export const metadata = {
  title: 'Ames Engineering | Home',
  description:
    'Ames Engineering is at the forefront in the development of sensor technology for pavement measurements. Pavement profiling equipment for construction.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        {/* Holiday Message */}
        <div className='bg-amesRed p-2 text-white text-center'>
          <div className='flex items-center justify-center gap-3 px-10 2xl:px-80'>
            <FaHollyBerry className='hidden xl:block w-5 h-5' />
            <p>
              Our offices will be closed for the holidays from 12/24 and
              reopening 1/2. From the Ames Engineering family to you, Happy
              Holidays and Happy New Year!
            </p>
            <FaHollyBerry className='hidden xl:block w-5 h-5' />
          </div>
        </div>
        {/* Holiday Message */}

        <Header />
        <Toaster />
        <main className='flex flex-1 overflow-x-hidden'>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-15H2YYSECB' />
    </html>
  );
}
