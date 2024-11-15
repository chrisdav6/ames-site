import TradeshowCard from '@/components/TradeshowCard';

export const metadata = {
  title: 'Ames Engineering | Tradeshows',
  description:
    'We are very active promoting our profiling and laser equipment during tradeshow season. Check the dates, see our products at a location near you!',
};

export default function Tradeshows() {
  return (
    <div className='w-full px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Tradeshows
        </h3>

        <p className='mt-6 text-center md:text-left text-lg'>
          Ames Engineering will be attending the following events. Be sure to
          see us at a show near you!
        </p>

        <div className='flex flex-col gap-8 mt-8 text-center md:text-left text-lg'>
          <TradeshowCard
            date='November 19 - 21, 2024'
            img='/images/seaupg-logo.png'
            alt='SEAUPG'
            url='http://www.seaupg.org'
            name='SEAUPG - Mobile, AL - Booth #3'
            text1='The SEAUPG annual meeting is held in the fall of each year. Hosted by state Departments of Transportation from each sub-group in rotation. SEAUPG Annual Meetings & Exhibits allow interaction between agencies, users, producers and material/equipment suppliers throughout the Southeastern states as well as the nation and abroad.'
            hr={true}
          />
          <TradeshowCard
            date='December 3 - 4, 2024'
            img='/images/wisconsin-asphalt-logo.png'
            alt='WAPA'
            url='https://www.wispave.org/event/wapas-65th-annual-conference-and-business-meeting'
            name='WAPA’s 65th Annual Conference and Business Meeting - Wisconsin Dells, WI'
            text1='The Wisconsin Asphalt Pavement Association (WAPA) annual conference tackles subjects on a wide range of issues related to asphalt design, construction, maintenance, technical specifications, costs, marketing, and public policy at all levels of government (local, state, and federal).'
            twitterURL='https://x.com/wispave'
            hr={true}
          />
          <TradeshowCard
            date='December 10 - 11, 2024'
            img='/images/mn-logo.png'
            alt='Minnesota Asphalt Pavement Association'
            url='https://www.asphaltisbest.com/events/EventDetails.aspx?id=1853252&group='
            name='2024 Minnesota Asphalt Conference - St. Cloud, MN'
            text1='The Minnesota Asphalt Pavement Association (MAPA) and the Minnesota Association of Asphalt Paving Technologists (MAAPT) hold thier annual conference. Featuring educational sessions, breakouts, hospitality room, and an awards dinner.'
            facebookURL='https://www.facebook.com/MnAsphaltPavementAssoc'
            twitterURL='https://x.com/mnasphalt'
            instagramURL='https://www.instagram.com/mnasphalt'
            linkedInURL='https://www.linkedin.com/company/minnesota-asphalt-pavement-association'
            hr={true}
          />
          <TradeshowCard
            date='December 11 - 13, 2024'
            img='/images/apai-logo.png'
            alt='Asphalt Pavement Association of Indiana'
            url='https://www.asphaltindiana.org/events.php'
            name='APAI Winter Conference and Expo - Muncie, IN'
            text1='The Asphalt Pavement Association of Indiana annual winter conference and trade show. Held each December, over 600 individuals and 50 vendors participate and discuss production and construction of quality asphalt pavements.'
            facebookURL='https://www.facebook.com/AsphaltPavementAssociationIndiana'
            twitterURL='https://x.com/asphaltindiana'
            linkedInURL='https://www.linkedin.com/company/asphalt-pavement-association-of-indiana-apai'
            hr={true}
          />
          <TradeshowCard
            date='January 5 - 9, 2025'
            img='/images/trb-logo.png'
            alt='Transportation Research Board'
            url='https://trb-annual-meeting.nationalacademies.org'
            name='TRB 104th Annual Meeting - Washington, DC - Booth #524'
            text1={`The Transportation Research Board's (TRB) Annual Meeting is the largest global gathering of transportation professionals and researchers with a focus on innovative solutions for all modes of transportation. The meeting program will cover all transportation modes, with more than 5,000 presentations in nearly 800 sessions and workshops, addressing topics of interest to policy makers, administrators, practitioners, researchers, and representatives of government, industry, and academic institutions.`}
            facebookURL='https://www.facebook.com/NASEMTRB'
            twitterURL='https://x.com/nasemtrb'
            linkedInURL='https://www.linkedin.com/company/the-national-academies'
            hr={true}
          />
        </div>
      </div>
    </div>
  );
}
