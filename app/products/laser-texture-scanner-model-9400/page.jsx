import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';

export const metadata = {
  title: 'Ames Engineering | Laser Texture Scanner 9400/9400HD',
  description:
    'Measure the Microtexture or Macrotexture of any surface with this laser scanner and view the resulting 3D image on a computer.',
};

export default function LaserTextureScannerModel9400() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Laser Texture Scanner 9400/9400HD
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/LaserTextureScannerProductImage.jpg'
          fill
          alt='Laser Texture Scanner 9400/9400HD'
          className='w-full object-cover object-[-150px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link
            href='/pdf/AmesLaserTextureScanner9400Brochure.pdf'
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
          The Model{' '}
          <span className='font-bold'>9400 Laser Texture Scanner</span> scans
          and precisely measures the texture characteristics of any surface.
          This is our most accurate texture scanner with the ability to measure
          both Microtexture and Macrotexture, including excellent correlation
          with the Sand Patch Test. With the push of a button the unit
          automatically begins the scanning process, providing the operator with
          immediate and accurate texture measurements. Once a scan has been
          completed, the scanner calculates and displays the following indices
          on the sunlight readable LCD display:
        </p>

        <div className='mt-6 font-bold '>
          <span className='block mt-2'>- Mean Profile Depth (MPD)</span>
          <span className='block'>- Texture Profile Index (TPI)</span>
          <span className='block'>- Estimated Texture Depth (ETD)</span>
          <span className='block'>
            - Slope and/or Elevation Variance with user selectable band pass
            filter
          </span>
        </div>

        <p className='mt-6'>
          The completed scan data is easily downloaded to a PC through the
          Ethernet interface via the included Ames Texture Scanner software. The
          Texture Scanner software is capable of viewing and analyzing the
          proprietary LTS files, exporting to simple CSV data files, and
          configuring both scan densities and the performed texture index
          calculations. The scanner is lightweight, portable and is powered by
          high cycle rechargeable batteries that can provide up to one hundred
          scans per charge.
        </p>

        <p className='mt-6'>
          Check out our article featured in{' '}
          <Link
            href='/pdf/CP2CenterNewsAmes.pdf'
            target='_blank'
            className='font-bold text-amesRed'
          >
            CP2 News Center
          </Link>{' '}
          about the Ames Texture Scanner!
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/operatingScanner.jpg'
            alt='Laser Texture Scanner Operation'
            caption='Operating Scanner'
          />
          <PhotoWithCaption
            image='/images/LaserTextureScannerProductGrid.jpg'
            alt='Laser Texture Scanner Display'
            caption='Texture Scanner Display'
          />
          <PhotoWithCaption
            image='/images/croppedGravelScreenshot.jpg'
            alt='Cropped Gravel Screenshot'
            caption='Gravel Texture'
          />
        </div>

        <div className='mt-8'>
          <div></div>
          <div>
            <p className='underline'>9400 and 9400HD Common Characteristics</p>
            <span className='block mt-2'>
              - Calculates Mean Profile (MPD), Texture Profile Index (TPI),
              Estimated Texture Depth (ETD), RMS, Ra, Rq, Skewness, Kurtosis and
              VAR.
            </span>
            <span className='block'>
              - Scanner immediately displays the results on a sunlight readable
              LCD display
            </span>
            <span className='block'>- Scan Area: 104.00 mm x 72.00 mm</span>
            <span className='block'>
              - Software application has the ability to crop the original scans
              into smaller areas of interest
            </span>
            <span className='block'>
              - Exportable CSV files are available for import into other
              applications
            </span>
            <span className='block'>- Built in GPS Receiver</span>
            <span className='block'>
              - Index units can be set to Metric or Imperial
            </span>
            <span className='block'>
              - Backlit LCD for easy night-time viewing
            </span>
            <span className='block'>
              - Data Storage: 2GB internal Flash, Downloadable to a PC through
              an Ethernet interface
            </span>
            <span className='block'>
              - Product Dimensions 152.4 mm x 228.6 mm x 205 mm(L x W x H)
              Weight: 4.2kg
            </span>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-8'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#9400specs'>LTS9400 Specs</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#9400HDspecs'>LTS9400HD Specs</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#9400Advantages'>9400HD Advantages</Link>
        </Button>
      </div>

      <div id='9400specs' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          LTS9400 Specs
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Vertical Resolution: 0.015 mm</li>
          <li>- Measurement Range 50 mm</li>
          <li>- Maximum Length Resolution: 0.015 mm</li>
          <li>- Maximum Width Resolution: 0.0635 mm</li>
          <li>- Triangulation Angle at center of range: 32°</li>
          <li>- Dot size at center of range: 50 um</li>
          <li>- Dot size at Max and Min range: 220 um</li>
          <li>- Max laser sampling speed: 1 Khz</li>
        </ul>
      </div>

      <div id='9400HDspecs' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          LTS9400HD Specs
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Vertical Resolution: 0.003 mm</li>
          <li>- Measurement Range 30 mm</li>
          <li>- Maximum Length Resolution: 0.00635 mm</li>
          <li>- Maximum Width Resolution: 0.0247 mm</li>
          <li>- Triangulation Angle at center of range: 22°</li>
          <li>- Dot size at center of range: 25 um</li>
          <li>- Dot size at Max and Min range: 60 um</li>
          <li>- Max laser sampling speed: 5 Khz</li>
        </ul>
      </div>

      <div id='9400Advantages' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          9400HD Advantages
        </h3>

        <div className='flex flex-col md:flex-row mt-4 gap-4'>
          <PhotoWithCaption
            image='/images/9400Scan.jpg'
            alt='9400 Laser Texture Scan'
            caption='9400 Scan'
          />
          <PhotoWithCaption
            image='/images/9400HDScan.jpg'
            alt='9400HD Laser Texture Scan'
            caption='9400HD Scan'
          />
        </div>

        <ul className='text-lg mt-4'>
          <li>- 3X faster scan speed at the highest resolution</li>
          <li>
            - 5X better vertical resolution and 2X better length resolution
          </li>
          <li>
            - Collects both elevation height data and scan intensity image
          </li>
          <li>
            - Laser sensor automatically detects invalid spikes and removes them
            from the scan data
          </li>
          <li>
            - More powerful laser allows more accurate measurement of dark
            surfaces
          </li>
        </ul>
      </div>
    </div>
  );
}
