import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Ames Engineering | Rapid Laser Texture Scanner 9500',
  description:
    'Measure the Macrotexture of any surface quickly with this laser scanner and view the resulting 3D image on a computer.',
};

export default function RapidLaserTextureScannerModel9500() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Rapid Laser Texture Scanner 9500
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/LaserTextureScanner9500ProductImage.jpg'
          fill
          alt='Laser Texture Scanner 9500'
          className='w-full object-cover'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link
            href='/pdf/AmesLaserTextureScanner9500Brochure.pdf'
            target='_blank'
          >
            Brochure
          </Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/sales/salesRequest'>Sales</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/support/supportRequest'>Service</Link>
        </Button>
      </div>

      {/* Product Description */}
      <div className='mt-6 text-lg text-center md:text-left'>
        <p>
          The portable Model{' '}
          <span className='font-bold'>9500 Laser Texture Scanner</span> is a
          rapid macrotexture scanner that replaces the Sand Patch Test (ETD) and
          Circular Texture Meter (MPD). The scanner requires a host computer to
          operate (not included) and completes a full scan of a 4″ × 4″ area in
          approximately 90 seconds, providing fast results on the host computer.
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/9500InUse.jpg'
            alt='Laser Texture Scanner 9500 In Operation'
            caption='9500 In Operation'
          />
          <PhotoWithCaption
            image='/images/9500FrontView.jpg'
            alt='Laser Texture Scanner 9500 Front View'
            caption='9500 Front View'
          />
          <PhotoWithCaption
            image='/images/croppedGravelScreenshot.jpg'
            alt='Laser Texture Scanner 9500 3D Analysis'
            caption='3D Analysis'
          />
        </div>

        {/* Table */}
        <div className='mt-16 mb-12'>
          <Table className='text-lg bg-gray-100'>
            <TableHeader className='bg-amesRed'>
              <TableRow>
                <TableHead className='text-white'>Features</TableHead>
                <TableHead className='text-center'>AMES 9400HD</TableHead>
                <TableHead className='text-center'>AMES 9500</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>
                  Calculates Mean Profile Depth (MPD), Estimated Texture Depth
                  (ETD), RMS, Ra, Rq, Skewness, Kurtosis & VAR
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>Software Needed</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Index Units Can Be Set to Metric or Imperial
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>Software Needed</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Built In GPS Receiver
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium max-w-2'>
                  Backlit LCD for Easy Night-time Viewing
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium max-w-2'>
                  Includes Sun Shroud with a Cutout Window and Measurement
                  Rulers
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>Scan Area</TableCell>
                <TableCell className='text-center'>
                  104.00 mm x 72.00 mm
                </TableCell>
                <TableCell className='text-center'>4” x 4”</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Collects Both Elevation Height Data and Scan Intensity Image
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Scanner Immediately Displays the Results On a Sunlight
                  Readable LCD Built-in Display (1997 ISO Version)
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>Analysis Software</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>Texture Scans</TableCell>
                <TableCell className='text-center'>
                  Macro<sup>1</sup> &amp; Micro<sup>2</sup> Texture
                </TableCell>
                <TableCell className='text-center'>Macro texture</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>Sampling Distance</TableCell>
                <TableCell className='text-center'>
                  Programmable (5 Presets)
                </TableCell>
                <TableCell className='text-center'>Fixed</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>Laser Type</TableCell>
                <TableCell className='text-center'>
                  1 Single Point Laser
                </TableCell>
                <TableCell className='text-center'>4 Inch Line Laser</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Requires Low Pass Filter
                </TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Microsoft Windows Tablet Included
                </TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  External USB Port Available
                </TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  A Windows Based Computer Can Be Used to Directly Control the
                  Scanner
                </TableCell>
                <TableCell className='text-center'>
                  <div className='inline-flex items-start'>
                    <Check className='text-green-500' size={40} />
                    <span className='m-0 p-0 leading-none'>*</span>
                  </div>
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>File Storage</TableCell>
                <TableCell className='text-center'>
                  All Files Are Stored On the Scanner for Later Download
                </TableCell>
                <TableCell className='text-center'>
                  All Files Are Stored On the Microsoft Windows Tablet
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className='mt-5'>
            <p className='text-sm'>
              * Can be controlled from a computer, but is easier to operate
              directly on the scanner.
            </p>
            <p className='text-sm'>
              <sup>1</sup> Macro texture: .5 mm and above
            </p>
            <p className='text-sm'>
              <sup>2</sup> Micro texture: .5mm and below
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <div>
            <h3 className='text-xl font-extrabold text-amesRed underline'>
              Common Applications
            </h3>
            <span className='block mt-2'>- Sand Patch Test Alternative</span>
            <span className='block'>- Bridge Decks</span>
            <span className='block'>- Paving Stones</span>
            <span className='block'>- Aircraft Carrier Decks</span>
            <span className='block'>- Fault Measurement</span>
            <span className='block'>- Built in GPS Receiver</span>
            <span className='block'>- Polished Concrete Surfaces</span>
            <span className='block'>- Racetracks & Tire Wear</span>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-8'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#calcOverview'>Calculations Overview</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#3DSuite'>3D Analysis Suite</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#Features'>Features</Link>
        </Button>
      </div>

      <div id='calcOverview' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Calculations Overview
        </h3>

        <ul className='text-lg mt-2'>
          <li>- Mean Profile Depth (MPD)</li>
          <li>- Estimated Texture Depth (ETD)</li>
          <li>- Power Spectral Density (PSD)</li>
          <li>- Root Mean Square (RMS)</li>
          <li>- Band Pass Selectable Elevation & Slope Variance</li>
        </ul>
      </div>

      <div id='3DSuite' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          3D Analysis Suite
        </h3>

        <ul className='text-lg mt-2'>
          <li>- A comprehensive Windows based 3D analysis suite</li>
          <li>- In-depth viewing and analyzing of scan data</li>
          <li>
            - Point-to-point measurement, surface model, point model, and black
            & white
          </li>
        </ul>
      </div>

      <div id='Features' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Features
        </h3>

        <ul className='text-lg mt-2'>
          <li>
            - Calculates Mean Profile (MPD), Estimated Texture Depth (ETD), RMS,
            Ra, Rq, Skewness, Kurtosis and VAR
          </li>
          <li>- Scan Area: 4″ x 4″</li>
          <li>- Laser type: 4″ Line Laser</li>
          <li>- Length Resolution: 4”/2048: 0.00195” = .0496 mm</li>
          <li>- Width Resolution: 4”/2448: 0.00163” = .0415 mm</li>
          <li>- Vertical Resolution: 0.01 mm</li>
          <li>- Scan Time for full scan: 90 seconds</li>
          <li>
            - Collects both elevation height data and scan intensity image
          </li>
          <li>
            - Data stored in binary .LTS file for downloading to PC for
            interpretation using Ames windows-based 3D viewing software
          </li>
          <li>
            - Exportable CSV files are available for import into other
            applications
          </li>
          <li>- Built in GPS Receiver</li>
          <li>- Index units: Metric or Imperial</li>
          <li>
            - Windows software application has the ability to crop the original
            scans into smaller areas of interest
          </li>
          <li>- Product Dimensions 305 mm x 151 mm x 290 mm(L x W x H)</li>
          <li>- Weight: 4.2kg</li>
          <li>- Data Storage: Reserved for calibration files only.</li>
          <li>- Backlit LCD for easy night-time viewing</li>
          <li>
            - Scanner comes with included rugged Windows 2-in-1 laptop for easy
            remote data collection
          </li>
          <li>
            - External USB port is available for USB memory sticks that can be
            used to easily transfer data to a desktop computer for further data
            analysis
          </li>
          <li>
            - A Windows desktop computer can also be used to directly control
            the scanner for use in a lab setting
          </li>
          <li>
            - Windows software application has the ability to crop the 4” x 4”
            scans into smaller areas of interest
          </li>
          <li>
            - Includes sun shroud to block out ambient light when performing
            scans outside
          </li>
          <li>
            - The sun shroud also has a cutout window with measurement rulers
            which are useful in locating the actual area that will be scanned
          </li>
        </ul>
      </div>
    </div>
  );
}
