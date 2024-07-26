import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Ames Engineering | Home',
  description:
    'Ames Engineering is at the forefront in the development of sensor technology for pavement measurements. Pavement profiling equipment for construction.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
