import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata = {
  title: 'Ames Engineering | Home',
  description:
    'Ames Engineering is at the forefront in the development of sensor technology for pavement measurements. Pavement profiling equipment for construction.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col'>
        <Header />
        <Toaster />
        <main className='flex flex-1 overflow-x-hidden'>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-15H2YYSECB' />
    </html>
  );
}
