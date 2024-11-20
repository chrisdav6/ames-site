import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Ames Engineering | Research Reports',
  description:
    'Research reports we have been involved with or that have used our systems.',
};

export default function ResearchReports() {
  return (
    <div className='px-10 2xl:px-80 pt-14'>
      <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
        Research Reports
      </h3>

      <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
        <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl'>
          <p>
            Ames Engineering is at the forefront in the development of sensor
            technology for pavement measurements. Over the years, we have worked
            side-by-side with the paving industry and government agencies to
            develop systems that yield exceptional data accuracy and
            performance. Recent research reports are listed below, and we invite
            you to review them.
          </p>
        </div>
        <div>
          <Image
            src='/images/research.jpg'
            width={1000}
            height={1000}
            alt='Ames Research Reports'
            className='shadow-md'
          />
        </div>
      </div>

      {/* Reports */}
      <div className='flex flex-col gap-10 mt-20 text-center md:text-left'>
        <div>
          <h2 className='text-xl font-bold underline'>
            Indiana DOT and Purdue University Quality Assurance Procedures for
            Chip Seal Operations
          </h2>
          <p className='text-lg mt-5'>
            In 2018 the Joint Transportation Research Program between IDOT and
            Purdue University has released a study titled “Quality Assurance
            Procedures for Chip Seal Operations Using Macrotexture Metrics”
            which uses the Ames AccuTexture 100 sensors to study how Mean
            Profile Depth can be used as a metric to evaluate the quality of
            chip seal surfaces. This procedure could be used in place of visual
            inspection procedures in order to increase the reliability of data,
            the safety of personnel, and save time and money.
          </p>
          <p className='text-sm mt-5'>
            <a
              href='https://docs.lib.purdue.edu/jtrp/1671'
              target='_blank'
              className='hover:underline hover:text-amesRed'
            >
              2018 IDOT/Purdue University JTRP Chip Seal Quality Assurance Study
            </a>
          </p>
          <p className='text-sm mt-1 text-gray-500 max-w-[800px]'>
            Zhao, G., Li, S., Jiang, Y., & Lee, J. (2018). Quality assurance
            procedures for chip seal operations using macrotexture metrics
            (Joint Transportation Research Program Publication No.
            FHWA/IN/JTRP2018/12). West Lafayette, IN: Purdue University.
            https://doi.org/10.5703/1288284316779
          </p>
        </div>

        <div>
          <h2 className='text-xl font-bold underline'>
            Validation of ODOT’s Laser Macrotexture System
          </h2>
          <p className='text-lg mt-5'>
            ODOT Office of Pavement Engineering (OPE) has been operating an
            inertial road profiler with a laser macrotexture subsystem, and
            collecting a large amount of data using the profiler. Recent
            advances in technology have allowed for the use of laser-based
            systems that can directly measure pavement macrotexture, not only
            statically, but also at highway speeds. The volumetric, or sand
            patch method (ASTM E 965), has historically been used as the main
            technique for measuring macrotexture. These different methods do not
            all measure the same surface properties and often generate different
            measurements. Because of these differences, it is crucial to
            determine the most suitable method for measuring pavement
            macrotexture. Thus, there is a need to validate the laser Mean
            Profile Depth (MPD) estimate of macrotexture against the sand patch
            test data. Knowing whether the laser MPD data is right in line with
            the sand patch estimates of macrotexture, overestimating or
            underestimating the macrotexture, or knowing on what types of
            surfaces the system provides reliable data, would allow ODOT to use
            the laser MPD data for proactive safety purposes on the Ohio highway
            network.
          </p>
          <p className='text-sm mt-5'>
            <a
              href='https://www.dot.state.oh.us/Divisions/Planning/SPR/Research/reportsandplans/Reports/2008/Pavement/134373_Executive_Summary.pdf'
              target='_blank'
              className='hover:underline hover:text-amesRed'
            >
              2008 ODOT MacroTexture Study Summary
            </a>
          </p>
          <p className='text-sm mt-1'>
            <a
              href='https://www.dot.state.oh.us/Divisions/Planning/SPR/Research/reportsandplans/Reports/2008/Pavement/134373_Report_Final.pdf'
              target='_blank'
              className='hover:underline hover:text-amesRed'
            >
              2008 ODOT MacroTexture Study Full Report
            </a>
          </p>
        </div>

        <div>
          <h2 className='text-xl font-bold underline'>
            FHWA Reference Profiler Research Study at MN Road 2007
          </h2>
          <p className='text-lg mt-5'>
            In the fall of 2007 the Federal Highway Administration sponsored a
            study researching the accuracy and repeatability of reference
            profilers at the Minnesota Department of Transportation’s research
            facility in Albertville, MN. Ames Engineering was invited to
            participate in the study with our lightweight profiler equipped with
            a TriODS and RoLine sensor. The results of the study show the TriODS
            and RoLine sensor have excellent accuracy and repeatability with two
            of the reference profilers. These continued strong results of Ames
            Engineering profilers again demonstrate how well we achieve the
            highest level of quality for our customers. Please take a few
            minutes to read through the FHWA’s full report listed below.
          </p>
          <p className='text-sm mt-5'>
            <Link
              href='pdf/ReferenceProfilers.pdf'
              target='_blank'
              className='hover:underline hover:text-amesRed'
            >
              2007 FHWA Reference Profiler Full Report
            </Link>
          </p>
          <p className='text-sm mt-1'>
            <Link
              href='pdf/ReferenceProfilerSummary.pdf'
              target='_blank'
              className='hover:underline hover:text-amesRed'
            >
              2007 FHWA Reference Profiler Highlights
            </Link>
          </p>
        </div>

        <div>
          <h2 className='text-xl font-bold underline'>
            ACPA Profiler Repeatability 2005
          </h2>
          <p className='text-lg mt-5'>
            We at Ames Engineering understand that the purchase of a
            road-profiling device can be an expensive and confusing proposition.
            Published device comparisons can be difficult to find and
            understand, particularly when it comes to the issue of textured
            surfaces. In 2005 the American Concrete Paving Association (ACPA)
            funded a study conducted by the University of Michigan
            Transportation Research Institute (UMTRI). UMTRI has been involved
            in transportation research issues for over 40 years and has been
            very involved in the development of improvements in road profiling
            technology. In this study, manufacturers of profiling equipment were
            invited to test their equipment on four different textured concrete
            road surfaces. Four manufacturers participated in collection of test
            data during this study and the results have been published. We
            encourage you to read this report and make your own informed
            decision.
          </p>
          <p className='text-sm mt-5'>
            <Link
              href='pdf/RT702.pdf'
              target='_blank'
              className='hover:underline hover:text-amesRed'
            >
              2005 ACPA Profiler Repeatability Tests
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
