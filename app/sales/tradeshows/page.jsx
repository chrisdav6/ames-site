import GoogleTradeshowMap from '@/components/GoogleTradeshowMap';
import TradeshowCard from '@/components/TradeshowCard';

export const metadata = {
  title: 'Ames Engineering | Tradeshows',
  description:
    'We are very active promoting our profiling and laser equipment during tradeshow season. Check the dates, see our products at a location near you!',
};

export default function Tradeshows() {
  return (
    <div>
      <GoogleTradeshowMap />

      <div className='w-full px-10 2xl:px-80 pt-14'>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Tradeshows
        </h3>

        <p className='mt-6 text-center md:text-left text-lg'>
          Ames Engineering will attend the following events. Be sure to see us
          at a show near you!
        </p>

        <div className='flex flex-col gap-8 mt-8 text-center md:text-left text-lg'>
          {/* <TradeshowCard
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
            date='November 19 - 21, 2024'
            img='/images/seaupg-logo.png'
            alt='SEAUPG'
            url='http://www.seaupg.org'
            name='SEAUPG - Mobile, AL - Booth #3'
            text1='The SEAUPG annual meeting is held in the fall of each year. Hosted by state Departments of Transportation from each sub-group in rotation. SEAUPG Annual Meetings & Exhibits allow interaction between agencies, users, producers and material/equipment suppliers throughout the Southeastern states as well as the nation and abroad.'
            hr={true}
          />
          */}
          <TradeshowCard
            date='December 3 - 4, 2024'
            img='/images/wisconsin-asphalt-logo.png'
            alt='WAPA'
            url='https://www.wispave.org/wapas-65th-annual-conference-and-business-meeting'
            name='WAPA’s 65th Annual Conference and Business Meeting - Wisconsin Dells, WI'
            text1='The Wisconsin Asphalt Pavement Association (WAPA) annual conference tackles subjects on a wide range of issues related to asphalt design, construction, maintenance, technical specifications, costs, marketing, and public policy at all levels of government (local, state, and federal).'
            twitterURL='https://x.com/wispave'
            youtubeURL='https://www.youtube.com/channel/UC51A1W2jB-YrkYiI8YaiSew'
            hr={true}
          />
          <TradeshowCard
            date='December 10 - 11, 2024'
            img='/images/mn-logo.png'
            alt='Minnesota Asphalt Pavement Association'
            url='https://www.asphaltisbest.com/page/conference'
            name='2024 Minnesota Asphalt Conference - St. Cloud, MN'
            text1='The Minnesota Asphalt Pavement Association (MAPA) and the Minnesota Association of Asphalt Paving Technologists (MAAPT) hold thier annual conference. Featuring educational sessions, breakouts, hospitality room, and an awards dinner.'
            facebookURL='https://www.facebook.com/MnAsphaltPavementAssoc'
            twitterURL='https://x.com/mnasphalt'
            instagramURL='https://www.instagram.com/mnasphalt'
            linkedInURL='https://www.linkedin.com/company/minnesota-asphalt-pavement-association'
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
            youtubeURL='https://www.youtube.com/@nationalacademies'
            hr={true}
          />
          <TradeshowCard
            date='January 6 - 8, 2025'
            img='/images/mapa-logo.png'
            alt='Missouri Asphalt Paving Association'
            url='https://moasphalt.org/events'
            name='35th Annual MAPA Conference - Columbia, MO'
            text1='The Missouri Asphalt Paving Association conference is your chance to get caught up on the outlook of the industry and check out the new innovative technologies available from exhibitors on the showroom floor, bringing you information on the most current industry news. Along with education, the conference gives you a fantastic opportunity to network with peers and meet other industry professionals'
            facebookURL='https://www.facebook.com/MoAsphalt'
            twitterURL='https://x.com/MoAsphalt'
            linkedInURL='https://www.linkedin.com/company/moasphalt'
            hr={true}
          />
          <TradeshowCard
            date='January 28 - 30, 2025'
            img='/images/pavex.png'
            alt='PAVE/X Pavement Experience'
            url='https://www.pavexshow.com'
            name='PAVE/X: The Pavement Experience - Chattanooga, TN - Booth #1035'
            text1='Through this new, unique event PAVE/X Pavement Experience aims to help contractors and business owners propel their business and expertise forward with live equipment demonstrations, an in-depth educational program and deeper connection opportunities on an expansive trade show floor.'
            facebookURL='https://www.facebook.com/PAVEXShow'
            instagramURL='https://www.instagram.com/pavexshow'
            linkedInURL='https://www.linkedin.com/company/pave-x-show'
            hr={true}
          />
          <TradeshowCard
            date='February 19 - 20, 2025'
            img='/images/rmaces-logo.png'
            alt='Rocky Mountain Asphalt Conference & Equipment Show'
            url='https://whova.com/web/lJQ-iWM97zLvsS%40GTUGkBcEBL2hv--Nzwq5VzVuKgMs%3D'
            name='52nd Annual RMACES - Denver, CO'
            text1='The 52nd Annual Rocky Mountain Asphalt Conference & Equipment Show. With over 100 vendors and exhibitors, this is your chance to connect with the best in the business and elevate your brand to new heights. Contractors, suppliers, governmental agency representatives, and consultants from the Rocky Mountain West hold an annual conference in Colorado to discuss new developments and quality advancements of asphalt pavements.'
            facebookURL='https://www.facebook.com/profile.php?id=100046331990282'
            instagramURL='https://www.instagram.com/colorado_asphalt_pavement_asso'
            linkedInURL='https://www.linkedin.com/company/colorado-asphalt-pavement-associaiton'
            hr={true}
          />
          <TradeshowCard
            date='February 26 - 27, 2025'
            img='/images/michigan-asphalt-logo.png'
            alt='Michigan Asphalt Paving Association'
            url='https://mms.apa-mi.org//Calendar/moreinfo.php?eventid=137288'
            name='APAM 68th Annual Paving Conference - Mt. Pleasant, MI'
            text1='The Michigan Asphalt Paving Association annual asphalt paving conference. This event is considered one of the most informative in the construction industry, featuring a full day of information and educational sessions.'
            facebookURL='https://www.facebook.com/AsphaltPavementAssociationOfMichigan'
            twitterURL='https://x.com/AsphaltPerforms'
            instagramURL='https://www.instagram.com/asphaltperforms'
            linkedInURL='https://www.linkedin.com/company/asphalt-pavement-association-of-michigan-inc'
            hr={true}
          />
          <TradeshowCard
            date='March 18 - 19, 2025'
            img='/images/ohio-logo.png'
            alt='Flexible Pavements of Ohio'
            url='https://www.flexiblepavements.org/OhioAsphaltExpo'
            name='Ohio Asphalt Expo - Columbus, OH'
            text1='The Asphalt Expo is a premiere asphalt pavement event with multiple concurrent educational sessions and an indoor and outdoor trade show and exhibition. If you construct, inspect,manage or maintain local or private transportation infrastructure the Ohio Asphalt Expo has the information you need to ensure a successful, long-lasting asphalt pavement.'
            facebookURL='https://www.facebook.com/flexiblepavements'
            twitterURL='https://x.com/Ohio_Asphalt'
            instagramURL='https://www.instagram.com/flexpaveoh'
            linkedInURL='https://www.linkedin.com/company/flexible-pavements-of-ohio'
            youtubeURL='https://www.youtube.com/user/FlexiblePavementOhio'
            hr={true}
          />
          <TradeshowCard
            date='March 25 - 27, 2025'
            img='/images/woa-logo.png'
            alt='World of Asphalt'
            url='https://www.worldofasphalt.com'
            name='World of Asphalt - St. Louis, MO - Booth #1008'
            text1={`World of Asphalt is the leading asphalt trade show and conference. Over 450 of the industry's leading manufacturers and service providers in the aggregate, asphalt, pavement maintenance, and traffic safety industry sectors come together at World of Asphalt to showcase their latest products and technologies. The conference features learning opportunities with leading industry experts to discuss solutions to issues affecting the asphalt industry.`}
            facebookURL='https://www.facebook.com/WorldofAsphalt'
            twitterURL='https://x.com/WorldofAsphalt'
            instagramURL='https://www.instagram.com/world.of.asphalt'
            linkedInURL='https://www.linkedin.com/company/world-of-asphalt'
            youtubeURL='https://www.youtube.com/user/WorldofAsphalt'
            hr={true}
          />
          <TradeshowCard
            date='April 8 - 9, 2025'
            img='/images/maine-logo.png'
            alt='Maine Asphalt Paving Association'
            url='https://maine-apa.org/paving-seminar'
            name='MAPA 20th Annual Spring Paving Seminar - Bangor, ME'
            text1={`Maine Asphalt Paving Association's 18th Annual Spring Paving Seminar. Invigorating workshops, networking opportunities and the largest Industry equipment show in Maine. MAPA works to encourage and promote the safe and environmentally sound use of bituminous asphalt products throughout the state of Maine.`}
            facebookURL='https://www.facebook.com/profile.php?id=100063700834665'
            youtubeURL='https://www.youtube.com/channel/UC_Sx_eaSqmNYtj7n5iYofjw'
            hr={true}
          />
          <TradeshowCard
            date='July 8 - 11, 2025'
            img='/images/napa-logo.png'
            alt='National Asphalt Pavement Association'
            url='https://www.asphaltpavement.org/programs/napa-events/napa-midyear-meeting'
            name='NAPA Midyear Meeting - Louisville, KY'
            text1='The NAPA Midyear Meeting is three comprehensive days of committee meetings and educational sessions focused on advancing the asphalt pavement industry. Throughout this meeting, NAPA leadership gathers input, makes decisions, and reaffirms the strategic direction of our industry, members, and stakeholders.'
            facebookURL='https://www.facebook.com/AsphaltPavement'
            twitterURL='https://x.com/NAPATweets'
            instagramURL='https://www.instagram.com/goasphalt'
            linkedInURL='https://www.linkedin.com/company/asphaltpavement'
            youtubeURL='https://www.youtube.com/channel/UCDroWs5yMvWHi1mEjHPOAIw'
            hr={true}
          />
          <TradeshowCard
            date='September 8 - 11, 2025'
            img='/images/txapa-logo.png'
            alt='Texas Asphalt Pavement Association'
            url='https://texasasphalt.org/events/2025-annual-meeting'
            name={`TXAPA's 50th Annual Meeting - San Antonio, TX`}
            text1={`TXAPA holds its annual meeting over four days in mid-September, combining education, networking, and fun. The agenda features award-winning speakers and entertainers and includes technical sessions, ample networking time, a golf tournament, casino night, and a live and silent auction benefiting the TXAPA Scholarship Program. The size of the meeting has grown significantly since the first one in 1974. In 2019, more than 600 TXAPA members, TxDOT personnel, and their spouses attended. The meeting venue is always one of Texas’ premier destination resorts.`}
            facebookURL='https://www.facebook.com/TexasAsphalt'
            twitterURL='https://x.com/TexasAsphalt'
            instagramURL='https://www.instagram.com/texasasphaltpavement'
            linkedInURL='https://www.linkedin.com/company/texas-asphalt-pavement-association'
            youtubeURL='https://www.youtube.com/channel/UCg9R6YxcVok22oBpf3PN8zg'
            hr={true}
          />
          <TradeshowCard
            date='March 3 - 7, 2026'
            img='/images/conexpo-logo.png'
            alt='CONEXPO-CON/AGG'
            url='https://www.conexpoconagg.com'
            name='ConExpo - Las Vegas, NV'
            text1={`Held once every 3 years, CONEXPO-CON/AGG is North America’s largest construction trade show representing asphalt, aggregates, concrete, earthmoving, lifting, mining, utilities and more. 2,800 exhibitors, 2,500,000 square feet and 150 education sessions! Bringing contractors, dealers, distributors, service providers, engineers and producers together in one place. No other show connects attendees from every major construction sector.`}
            facebookURL='https://www.facebook.com/conexpoconagg'
            twitterURL='https://x.com/conexpoconagg'
            instagramURL='https://www.instagram.com/conexpoconagg'
            linkedInURL='https://www.linkedin.com/company/conexpoconagg'
            youtubeURL='https://www.youtube.com/user/conexpoconagg'
            hr={true}
          />
          <TradeshowCard
            date='2027'
            img='/images/ncat-conference.png'
            alt='National Center for Asphalt Technology'
            url='https://eng.auburn.edu/research/centers/ncat/testtrack/conference.html'
            name='NCAT Test Track Conference - Auburn, AL'
            text1='Held every three years, the Test Track Conference is a forum to present research findings from the previous cycle of accelerated pavement testing. During the two and a half day program, participants learn about advancements in asphalt pavement design, construction, technologies, and maintenance that are more cost effective and improve performance. The conference also provides a valuable networking opportunity and sets the stage for further cooperation among federal, state, and local agencies as well as the private sector.'
            facebookURL='https://www.facebook.com/NCATAuburn'
            twitterURL='https://x.com/ncatauburn'
            instagramURL='https://www.instagram.com/auburnasphalt'
            linkedInURL='https://www.linkedin.com/company/ncatauburn'
            youtubeURL='https://www.youtube.com/channel/UC5grTAnUU_oE9F2FPpEdgJw'
          />
        </div>
      </div>
    </div>
  );
}
