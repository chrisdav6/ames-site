import Image from 'next/image';
import SmallCard from '@/components/SmallCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Ames Engineering | Data Collection and Analysis Software',
  description:
    'Our proprietary software and data collection tools set us apart from competing profiler manufacturers.',
};

export default function ProfilerSoftwareAndDataAnalysis() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Profiler Software and Data Analysis
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/Accutexture100ProductImage.jpg'
          fill
          alt='Ames AccuTexture 100'
          className='w-full object-cover object-[-150px] md:object-center'
          priority
        />
      </div>

      {/* Product Description */}
      <div className='mt-6 text-lg text-center md:text-left'>
        <p>
          Our proprietary{' '}
          <span className='font-bold'>
            Ames Profiler Software and Data Collection Tools
          </span>{' '}
          set us apart from competing profiler manufacturers. These tools
          combined with our focus on designing and manufacturing high performing
          equipment ensure the customer experience. Each year, we spend
          significant resources updating and refining our supporting software
          programs to optimize data collection and interpretation.
        </p>

        <section className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 justify-center w-full mt-8'>
          <Dialog>
            <DialogTrigger>
              <SmallCard
                src='/images/dataCollection.jpg'
                alt='Data Collection'
                title='Data Collection'
              />
            </DialogTrigger>
            <DialogContent className='min-w-fit'>
              <div className='hidden'>
                <DialogTitle>Data Collection</DialogTitle>
                <DialogDescription>Ames Data Collection</DialogDescription>
              </div>
              <Image
                src='/images/dataCollection.jpg'
                width={1000}
                height={1000}
                alt='Data Collection'
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <SmallCard
                src='/images/dataViewer.jpg'
                alt='Data Viewer'
                title='Data Viewer'
              />
            </DialogTrigger>
            <DialogContent className='min-w-fit'>
              <div className='hidden'>
                <DialogTitle>Data Viewer</DialogTitle>
                <DialogDescription>Ames Data Viewer</DialogDescription>
              </div>
              <Image
                src='/images/dataViewer.jpg'
                width={1000}
                height={1000}
                alt='Data Viewer'
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <SmallCard
                src='/images/gpsTracer.jpg'
                alt='GPS Tracer'
                title='GPS Tracer'
              />
            </DialogTrigger>
            <DialogContent className='min-w-fit'>
              <div className='hidden'>
                <DialogTitle>GPS Tracer</DialogTitle>
                <DialogDescription>Ames GPS Tracer</DialogDescription>
              </div>
              <Image
                src='/images/gpsTracer.jpg'
                width={1000}
                height={1000}
                alt='GPS Tracer'
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <SmallCard
                src='/images/transverseDataViewer.jpg'
                alt='Transverse Data Viewer'
                title='Transverse Data Viewer'
              />
            </DialogTrigger>
            <DialogContent className='min-w-fit'>
              <div className='hidden'>
                <DialogTitle>Transverse Data Viewer</DialogTitle>
                <DialogDescription>
                  Ames Transverse Data Viewer
                </DialogDescription>
              </div>
              <Image
                src='/images/transverseDataViewer.jpg'
                width={1000}
                height={1000}
                alt='Transverse Data Viewer'
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <SmallCard
                src='/images/transverse3DViewer.jpg'
                alt='Transverse 3D Viewer'
                title='Transverse 3D Viewer'
              />
            </DialogTrigger>
            <DialogContent className='min-w-fit'>
              <div className='hidden'>
                <DialogTitle>Transverse 3D Viewer</DialogTitle>
                <DialogDescription>Ames Transverse 3D Viewer</DialogDescription>
              </div>
              <Image
                src='/images/transverse3DViewer.jpg'
                width={1000}
                height={1000}
                alt='Transverse 3D Viewer'
              />
            </DialogContent>
          </Dialog>
        </section>
      </div>

      <div className='mt-8 text-lg text-center md:text-left'>
        <p>
          Today, our standard computer hardware and software components for our
          high-speed and lightweight profilers include:
        </p>
      </div>

      <div id='computerHardware' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Hardware
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Panasonic Toughbook laptop with a 500 GB hard drive and 4 GB of
            RAM
          </li>
          <li>
            - Color SVGA anti-reflective, outdoor readable touch display screen
          </li>
          <li>
            - Ethernet connection from laptop to data acquisition computer
          </li>
          <li>
            - Combination Ethernet and RS-485 serial network between data
            acquisition computer and all modules
          </li>
          <li>
            - USB thermal strip printer available for plotting pavement profile
            on site
          </li>
          <li>
            - All electronic components housed in water resistant and dust tight
            enclosures
          </li>
          <li>
            - Field replacement of any component does not require re-calibration
            of the system
          </li>
          <li>
            - Capable of field installing a second sensor to profile both wheel
            tracks simultaneously
          </li>
        </ul>
      </div>

      <div id='computerSoftware' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          ComputerSoftware
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Microsoft Windows operating system</li>
          <li>- Display profile in real time while data is being collected</li>
          <li>
            - Calculates Profile Index (PI), International Roughness Index
            (IRI), Half-car Roughness Index (HRI), Ride Quality
          </li>
          <li>- Index (RQI), and Ride Number (RN)</li>
          <li>
            - Plots true profile, California profilograph profile, and rolling
            straightedge profile
          </li>
          <li>- Equipped with variable high and low pass filter options</li>
          <li>- Contains automatic bump detection software</li>
          <li>
            - Capable of displaying “true” profile, rolling straightedge, and
            California type profilograph profile on screen
          </li>
          <li>
            - Identifies location of “out-of-specification” bumps and dips
          </li>
          <li>- Bumps can be located easily using system’s odometer mode</li>
          <li>
            - Equipped with the following export file options: profile elevation
            points, Michigan ERD format,
            <br /> Texas PRO format, comma separated variable (CSV) format and
            generated report tables format (HTML)
          </li>
        </ul>
      </div>
    </div>
  );
}
