import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'Ames Engineering | Inertial Road Profilers FAQ',
  description:
    'The questions we get asked most frequently about our Inertial Profilers and profiling in general.',
};

export default function InertialRoadProfilersFAQ() {
  return (
    <div className='px-10 2xl:px-80 pt-14'>
      <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
        Inertial Road Profilers FAQ
      </h3>

      <h4 className='text-xl font-bold mt-10 text-center md:text-left'>
        What is an Inertial Profiler? High Speed and Lightweight Profilers?
      </h4>

      <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
        <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
          <p>
            Inertial Road Profilers, like the Profilographs that came before
            them, measure the longitudinal profile of a road in order to
            determine the smoothness of that road. Profilographs, however, had
            some major downfalls that Profilers seek to correct. Whereas a
            Profilograph is limited to walking speed, Profilers are capable of
            speeds anywhere from 10 miles per hour up to highway speeds,
            depending on the model. There are improvements in the data being
            collected as well. A profilograph has a strange response curve which
            can cause some features to be exaggerated and others
            under-represented, while Profilers have a predictable reponse curve
            which is much closer to the actual road.
          </p>
        </div>
        <div>
          <Image
            src='/images/faq-1.jpg'
            width={1000}
            height={1000}
            alt='Ames Inertial Profiler FAQ'
            className='shadow-md'
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 mt-10 text-center md:text-left text-lg'>
        <div className='hidden lg:block'>
          <Image
            src='/images/faq-2.jpg'
            width={1000}
            height={1000}
            alt='Ames Inertial Profiler FAQ'
            className='shadow-md'
          />
        </div>
        <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
          <p>
            A High Speed Profiler is just that, a profiler that operates at
            highway speeds. They are typically mounted to the front or back of a
            pickup truck or van. These are useful because data can be collected
            very quickly and without closing off lanes to traffic.
          </p>
          <p className='mt-10'>
            Lightweight Profilers, on the other hand, are a lightweight version
            of a profiler meant for surfaces that would be damaged by a heavy
            truck driving over them. They are limited to about 20 miles per
            hour. Other than that, they operate the same as our High Speed
            Profilers.
          </p>
        </div>
        <div className='lg:hidden'>
          <Image
            src='/images/faq-2.jpg'
            width={1000}
            height={1000}
            alt='Ames Inertial Profiler FAQ'
            className='shadow-md'
          />
        </div>
      </div>

      {/* Accordions */}
      <div className='mt-10 text-xl'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-left font-black'>
              Why would a construction company want a Profiler anyway?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  Profilers are used to monitor the roughness of the newly
                  constructed roads. The sooner a contractor can perform
                  smoothness measurements on a pavement after it is constructed,
                  the more quickly problems with the construction methods can be
                  discovered. DOT agencies often have pay incentives that are
                  based on the smoothness results collected with a profiler, so
                  understanding how to construct smooth roads is important when
                  considering how to bid a project.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-left font-black'>
              What types of measurements are DOTs looking for? What is IRI? And
              the reporting interval?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  IRI – International Ride Index – is a simulation of the
                  suspension of one wheel in a car that adds up over a given
                  distance, typically 528 feet or 100 meters. The units are
                  usually inches per mile or millimeters per kilometer.
                </p>
                <p className='mt-5'>
                  In most cases the DOT is looking for segment IRI calculations,
                  which is what their incentive pay is based on. In some cases
                  the DOT might require localized roughness calculations to also
                  be calculated. When doing localized roughness calculations the
                  same IRI simulation is used, but on a much shorter interval.
                  Typically a 25 foot interval is used so that areas of high
                  localized roughness can be identified and possible corrective
                  measures can be applied.
                </p>
                <p className='mt-5'>
                  The reporting interval is usually 528 feet or 100 meters, or
                  for localized roughness calculations 25 feet.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-left font-black'>
              Is a Profiler different from a Vehicle Mounted Profilograph?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  Profilers are sometimes called “Vehicle Mounted
                  Profilographs,” but they use very different technologies to
                  measure roadway profile. Rather than the physical beam with a
                  pivot in the center that Profilographs use, Profilers take
                  advantage of Laser and Accelerometer technology to read the
                  changing height of the roadway. The Laser and Accelerometer
                  work in tandem to cancel out the vehicle’s suspension travel.
                  This results in a profile that is just the surface of the
                  road.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className='text-left font-black'>
              How well does a Profiler compare to a Profilograph?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p className='mb-5'>
                  International Ride Index, the main calculation that Profilers
                  do, actually measures the roadway better than Profilographs.
                  This is because Profilographs, being a physical beam, have
                  very odd responses to different feature lengths. Take a look
                  at this plot of a Profilograph’s response:
                </p>
                <Image
                  src='/images/faqfig2.jpg'
                  width={500}
                  height={500}
                  alt='FAQ Figure 2'
                  className='md:min-w-[600px] border-2'
                />
                <p className='font-medium mt-2 text-sm'>
                  Source:{' '}
                  <a
                    href='https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/pccp/05068/002.cfm'
                    target='_blank'
                    className='hover:underline hover:text-amesRed'
                  >
                    FHWA Report FHWA-HRT-05-068, October 2005
                  </a>
                </p>
                <p className='my-5'>
                  Notice in the above plot how the response is much lower than
                  we would want at about 13 feet, and much greater than we want
                  above about 25 feet. This means that there will be 13 foot
                  features that can be missed, and 25 foot features that will be
                  greatly exaggerated. Now compare that to the plot of the
                  International Ride Index response:
                </p>
                <Image
                  src='/images/faqfig9.jpg'
                  width={500}
                  height={500}
                  alt='FAQ Figure 9'
                  className='md:min-w-[600px] border-2'
                />
                <p className='font-medium mt-2 text-sm'>
                  Source:{' '}
                  <a
                    href='https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/pccp/05068/002.cfm'
                    target='_blank'
                    className='hover:underline hover:text-amesRed'
                  >
                    FHWA Report FHWA-HRT-05-068, October 2005
                  </a>
                </p>
                <p className='mt-5'>
                  This plot is in meters, but when converted to feet, the
                  response is from approximately 6.5 feet to 65 feet and, while
                  still not perfectly flat, is much closer to flat than the
                  profilograph’s response. Of course, if a Profilograph response
                  is required, our Ames Profiler software does have a
                  Profilograph simulation analysis option which models the odd
                  response characteristics shown above.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger className='text-left font-black'>
              When would a Profiler be used instead of a Profilograph?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  Unless there is a specification that requires the use of a
                  profilograph, we recommend using a profiler in all cases. It
                  is more efficient, more accurate, and safer.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger className='text-left font-black'>
              When would a High Speed Profiler be needed instead of a
              Lightweight Profiler or vice versa?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  A High Speed Profiler is well suited to surveying preexisting
                  roadways covering a large area. Any time profile data needs to
                  be collected at high speeds or in dangerous traffic
                  conditions, a high speed profiler is preferable and safer.
                  With a high speed profiler system, there is also no need for a
                  trailer for transportation like there is with a lightweight
                  profiler, saving fuel costs as well as space. The frame can be
                  unbolted and loaded into the pickup bed or back of the van for
                  safe transportation.
                </p>
                <p className='mt-5'>
                  On the other hand, a Lightweight Profiler is needed any time
                  it would be beneficial to profile a roadway earlier than it
                  will support a full-size vehicle. A Lightweight Profiler
                  exerts about 8 Pounds Per Square Inch of pressure on the
                  ground, approximately the same as a human. A full size car or
                  truck exerts 30 PSI or more. On a concrete pavement section,
                  that means it would be possible to profile the section the day
                  after it is laid instead of waiting a week or more.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-7'>
            <AccordionTrigger className='text-left font-black'>
              What types of sensors are available? Which one is best?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  We offer two types of sensors, Line and Single Point Laser
                  Sensors.
                </p>
                <p className='mt-5'>
                  Line Laser sensors, like our Gocator sensors, excel on
                  concrete surfaces with longitudinal tining or any texture that
                  might falsely affect the profile and smoothness numbers. They
                  do this by measuring a number of points along the line and
                  doing “bridging” between them. This way, the laser closely
                  simulates the contact patch of a tire.
                </p>
                <p className='mt-5'>
                  Single Point Laser sensors, like our AccuTexture 100 AR550
                  sensors, excel on asphalt and smoother surfaces. Like the name
                  implies, these sensors only measure a single point. This
                  allows us to offer an option to add texture capability to our
                  single point lasers, measuring both profile and texture at the
                  same time.
                </p>
                <p className='mt-5'>
                  Which sensor is best depends on what surfaces you intend to
                  measure and whether collecting texture data is important. Both
                  types of sensors can be used on our Portable High Speed
                  Profiler system. In fact, the sensors are so easily changed
                  that it is possible to use both types of sensors, swapping
                  them out depending on the surface!
                </p>
                <p className='mt-5'>
                  Our Lightweight Profilers can also be outfitted with either
                  line laser sensors or single point sensors, but the vast
                  majority of lightweight profilers we sell are outfitted with
                  line laser sensors.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-8'>
            <AccordionTrigger className='text-left font-black'>
              What John Deere Gator model are Ames Lightweight Profilers based
              on?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  Our Lightweight Profilers are based on John Deere Traditional
                  Series (TS) Gators.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-9'>
            <AccordionTrigger className='text-left font-black'>
              What kinds of vehicles do these High Speed Profilers mount to?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  Any vehicle with a front or rear mounted 2″ trailer hitch
                  receiver can be outfitted with our Portable High Speed
                  Profiler system. A front mounted hitch is preferrable because
                  the machine stays cleaner than a rear mounted system,
                  especially in wet weather. Because having clean sensor lenses
                  is very important to profiler performance, we recommend a
                  front-mounted system.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-10'>
            <AccordionTrigger className='text-left font-black'>
              Do I need to get out and start a generator every time I use my
              Lightweight? How is the Profiler powered?
            </AccordionTrigger>
            <AccordionContent>
              <div className='text-xl'>
                <p>
                  No, our lightweight profilers do not need generators! Ours are
                  powered directly off the Gator. No more need to fill up the
                  generator and pull the starting cord!
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
