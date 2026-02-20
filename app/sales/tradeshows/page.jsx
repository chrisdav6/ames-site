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

        <div className='flex flex-col gap-10 mt-8 text-center md:text-left text-lg'>
          {/*
          
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
            date='December 9 - 10, 2025'
            img='/images/mn-logo.png'
            alt='Minnesota Asphalt Pavement Association'
            url='https://www.asphaltisbest.com/events/EventDetails.aspx?id=1853252&group='
            name='2025 Minnesota Asphalt Conference - St. Cloud, MN'
            text1='The Minnesota Asphalt Pavement Association (MAPA) and the Minnesota Association of Asphalt Paving Technologists (MAAPT) hold thier annual conference. Featuring educational sessions, breakouts, hospitality room, and an awards dinner.'
            facebookURL='https://www.facebook.com/MnAsphaltPavementAssoc'
            twitterURL='https://x.com/mnasphalt'
            instagramURL='https://www.instagram.com/mnasphalt'
            linkedInURL='https://www.linkedin.com/company/minnesota-asphalt-pavement-association'
            hr={true}
          />

          <TradeshowCard
            date='February 12 - 13, 2026'
            img='/images/rmaces-logo.png'
            alt='Rocky Mountain Asphalt Conference & Equipment Show'
            url='http://www.rmaces.org'
            name='53rd Annual RMACES - Denver, CO'
            text1='The 53rd Annual Rocky Mountain Asphalt Conference & Equipment Show. With over 100 vendors and exhibitors, this is your chance to connect with the best in the business and elevate your brand to new heights. Contractors, suppliers, governmental agency representatives, and consultants from the Rocky Mountain West hold an annual conference in Colorado to discuss new developments and quality advancements of asphalt pavements.'
            facebookURL='https://www.facebook.com/profile.php?id=100046331990282'
            instagramURL='https://www.instagram.com/colorado_asphalt_pavement_asso'
            linkedInURL='https://www.linkedin.com/company/colorado-asphalt-pavement-associaiton'
            youtubeURL='https://www.youtube.com/channel/UCSJR-A8JiJq5Vh6ibbMJEoA'
            hr={true}
          />

          <TradeshowCard
            date='September 4 - 5, 2025'
            img='/images/rathLogo.png'
            alt='International Symposium Towards Holistic Roads and Beyond'
            url='https://www.roadassothai.com/news/931'
            name={`International Symposium Towards Holistic Roads and Beyond - Bangkok, Thailand`}
            text1={`International Symposium Towards Holistic Roads and Beyond co-organized by: Department of Rural Roads (DRR), Roads Association of Thailand (RATh) and the National Committee of PIARC for Thailand. Exhibition hall and workshops to promote the development of highways and logistics.`}
            facebookURL='https://www.facebook.com/roadassothai'
            hr={true}
          />

          <TradeshowCard
            date='October 29 - 30, 2025'
            img='/images/neaupg-logo.png'
            alt='NEAUPG Fall Meeting'
            url='https://neaupg.engr.uconn.edu'
            name='NEAUPG Fall Meeting - Harrisburg, PA'
            text1='North East Asphalt User/Producer Groups annual fall Meeting. Promoting solutions through discussion to improve the quality and performance of asphalt pavement applications in the Northeastern United States. Hosted by NYSDOT with the Binder and Mix Committees meeting.'
            hr={true}
          />

          <TradeshowCard
            date='November 18 - 20, 2025'
            img='/images/seaupg-logo.png'
            alt='SEAUPG'
            url='http://www.seaupg.org'
            name='SEAUPG - Charleston, WV - Booth #21'
            text1='The SEAUPG annual meeting is held in the fall of each year. Hosted by state Departments of Transportation from each sub-group in rotation. SEAUPG Annual Meetings & Exhibits allow interaction between agencies, users, producers and material/equipment suppliers throughout the Southeastern states as well as the nation and abroad.'
            hr={true}
          />

          <TradeshowCard
            date='December 2 - 3, 2025'
            img='/images/iggaLogo.png'
            alt='IGGA'
            url='https://www.igga.net'
            name='IGGA Annual Meeting - Carlsbad, CA'
            text1='The annual International Grooving and Grinding Association meeting is a fantastic opportunity to connect with fellow IGGA members, top manufacturers, and leading contractors from across the industry. The International Grooving & Grinding Association (IGGA) is the sole representative of the grooving, grinding and concrete pavement preservation (CPP) industry.'
            facebookURL='https://www.facebook.com/PavementPres'
            linkedInURL='https://www.linkedin.com/company/international-grooving-&-grinding-assoc-inc'
            youtubeURL='https://www.youtube.com/user/PavementPresResource'
            hr={true}
          />

          <TradeshowCard
            date='December 2 - 4, 2025'
            img='/images/acpaLogo.png'
            alt='ACPA'
            url='https://2025meeting.acpa.org'
            name='62nd Annual ACPA Meeting - Carlsbad, CA'
            text1="The annual ACPA meeting will dive into national and local strategies to grow concrete pavement markets, with exclusive sessions for chapter leaders and promoters. Explore the latest best practices and policy insights in a full day of Concrete Pavement University sessions and Government Affairs programming. Wrap up with insightful CPU sessions focused on innovation and emerging trends, and help shape ACPA's direction in the interactive Lessons and Priorities Forum."
            facebookURL='https://www.facebook.com/paveconcrete63'
            twitterURL='https://x.com/PaveConcrete'
            linkedInURL='https://www.linkedin.com/company/american-concrete-pavement-association'
            youtubeURL='https://www.youtube.com/concretepavements'
            hr={true}
          />
          
          <TradeshowCard
            date='December 2 - 3, 2025'
            img='/images/wisconsin-asphalt-logo.png'
            alt='WAPA'
            url='https://www.wispave.org'
            name='WAPA’s 66th Annual Conference and Business Meeting - Wisconsin Dells, WI'
            text1='The Wisconsin Asphalt Pavement Association (WAPA) annual conference tackles subjects on a wide range of issues related to asphalt design, construction, maintenance, technical specifications, costs, marketing, and public policy at all levels of government (local, state, and federal).'
            twitterURL='https://x.com/wispave'
            youtubeURL='https://www.youtube.com/channel/UC51A1W2jB-YrkYiI8YaiSew'
            hr={true}
          />

          <TradeshowCard
            date='December 10 - 12, 2025'
            img='/images/apai2025.png'
            alt='Asphalt Pavement Association of Indiana'
            url='https://www.asphaltindiana.org/conference'
            name='APAI Winter Conference and Expo - Muncie, IN'
            text1="The Asphalt Pavement Association of Indiana's annual winter conference and trade show. Held each December, with nearly 600 attendees from Indiana's asphalt industry, this event promises to be a high-energy, action-packed showcase of the latest innovations and trends. From educational sessions to networking opportunities and exciting events, be prepared for an experience that will leave you inspired and energized for the year ahead."
            facebookURL='https://www.facebook.com/AsphaltPavementAssociationIndiana'
            twitterURL='https://x.com/asphaltindiana'
            linkedInURL='https://www.linkedin.com/company/asphalt-pavement-association-of-indiana-apai'
            hr={true}
          />

          <TradeshowCard
            date='January 19 - 21, 2026'
            img='/images/penn-asphalt-logo.png'
            alt='Pennsylvania Asphalt Pavement Association'
            url='https://www.pa-asphalt.org/events/papa-main-events/179-2026-66th-annual-papa-conference'
            name='66th Annual PAPA Conference - Hershey, PA - Booth #6'
            text1={`The Pennsylvania Asphalt Pavement Association's annual conference program provides valued updates and information on the latest asphalt technologies from asphalt pavement professionals with local and nationally recognized experts from industry, state and federal agencies and academia.`}
            facebookURL='https://www.facebook.com/PennsylvaniaAsphalt'
            twitterURL='https://x.com/AsphaltPA'
            youtubeURL='https://www.youtube.com/channel/UC47YotWes1rWnKKn1o3yFYg'
            hr={true}
          />

          <TradeshowCard
            date='February 4 - 6, 20265'
            img='/images/paiky-logo.png'
            alt='PAIKY 2026 Winter Training School'
            url='https://members.paiky.org/site_event_detail.cfm?pk_association_event=35109'
            name='PAIKY 2026 Winter Training School - Louisville, KY'
            text1='PAIKY invites and encourages participation in the Winter Training School from the entire association membership, the Kentucky Transportation Cabinet, city and county officials, architects, engineers and affiliated associates and groups.'
            facebookURL='https://www.facebook.com/asphaltky'
            twitterURL='https://x.com/AsphaltKY'
            instagramURL='https://www.instagram.com/asphaltky'
            linkedInURL='https://www.linkedin.com/in/asphalt-in-kentucky-50918555'
            hr={true}
          />

          <TradeshowCard
            date='February 18 - 19, 2026'
            img='/images/utah-asphalt-logo.png'
            alt='2026 Utah Asphalt Conference'
            url='https://members.utahasphalt.org/events/Details/uapa-2026-asphalt-conference-1343185?sourceTypeId=Website'
            name='2026 Utah Asphalt Conference - Sandy, UT'
            text1='The Utah Asphalt Conference (UAC) is the premier asphalt related event in the state of Utah. The conference brings together the asphalt industry’s best and brightest for a second-to-none trade show and over twenty-eight educational seminars. The 2024 UAC where we will provide you with all of the tools, technologies, and best practices you need to accomplish your goals as well as plenty of networking opportunities.'
            facebookURL='https://www.facebook.com/utahasphaltpavement'
            twitterURL='https://x.com/utahasphalt'
            linkedInURL='https://www.linkedin.com/company/utah-asphalt-pavement-association'
            youtubeURL='https://www.youtube.com/channel/UClIzjjlNiZBi2vdA56Of5gg'
            hr={true}
          />
          
          */}

          <TradeshowCard
            date='February 25 - 26, 2026'
            img='/images/michigan-asphalt-logo.png'
            alt='Michigan Asphalt Paving Association'
            url='https://www.apa-mi.org/pc_home_page.php'
            name="APAM's Annual Paving Conference - Battle Creek, MI - Booth #21"
            text1='The Michigan Asphalt Paving Association annual asphalt paving conference. This event is considered one of the most informative in the construction industry, featuring a full day of information and educational sessions.'
            facebookURL='https://www.facebook.com/AsphaltPavementAssociationOfMichigan'
            twitterURL='https://x.com/AsphaltPerforms'
            instagramURL='https://www.instagram.com/asphaltperforms'
            linkedInURL='https://www.linkedin.com/company/asphalt-pavement-association-of-michigan-inc'
            youtubeURL='https://www.youtube.com/channel/UC6zuZ5WXlIwLiZEtnMbatDg'
            hr={true}
          />
          <TradeshowCard
            date='March 3 - 7, 2026'
            img='/images/conexpo-logo.png'
            alt='CONEXPO-CON/AGG'
            url='https://www.conexpoconagg.com'
            name='ConExpo - Las Vegas, NV - Booth #C32468'
            text1={`Held once every 3 years, CONEXPO-CON/AGG is North America’s largest construction trade show representing asphalt, aggregates, concrete, earthmoving, lifting, mining, utilities and more. 2,800 exhibitors, 2,500,000 square feet and 150 education sessions! Bringing contractors, dealers, distributors, service providers, engineers and producers together in one place. No other show connects attendees from every major construction sector.`}
            facebookURL='https://www.facebook.com/conexpoconagg'
            twitterURL='https://x.com/conexpoconagg'
            instagramURL='https://www.instagram.com/conexpoconagg'
            linkedInURL='https://www.linkedin.com/company/conexpoconagg'
            youtubeURL='https://www.youtube.com/user/conexpoconagg'
            hr={true}
          />
          <TradeshowCard
            date='March 17 - 18, 2026'
            img='/images/ohio-logo.png'
            alt='Flexible Pavements of Ohio'
            url='https://www.flexiblepavements.org/OhioAsphaltExpo'
            name='Ohio Asphalt Expo - Columbus, OH - Booth #23'
            text1='The Asphalt Expo is a premiere asphalt pavement event with multiple concurrent educational sessions and an indoor and outdoor trade show and exhibition. If you construct, inspect,manage or maintain local or private transportation infrastructure the Ohio Asphalt Expo has the information you need to ensure a successful, long-lasting asphalt pavement.'
            facebookURL='https://www.facebook.com/flexiblepavements'
            twitterURL='https://x.com/Ohio_Asphalt'
            instagramURL='https://www.instagram.com/flexpaveoh'
            linkedInURL='https://www.linkedin.com/company/flexible-pavements-of-ohio'
            youtubeURL='https://www.youtube.com/user/FlexiblePavementOhio'
            hr={true}
          />
          <TradeshowCard
            date='April 7 - 8, 2026'
            img='/images/maine-logo.png'
            alt='Maine Asphalt Paving Association'
            url='https://maine-apa.org/paving-seminar'
            name='MAPA 21st Annual Spring Paving Seminar - Bangor, ME'
            text1={`Maine Asphalt Paving Association's 21st Annual Spring Paving Seminar. Invigorating workshops, networking opportunities and the largest Industry equipment show in Maine. MAPA works to encourage and promote the safe and environmentally sound use of bituminous asphalt products throughout the state of Maine.`}
            facebookURL='https://www.facebook.com/profile.php?id=100063700834665'
            youtubeURL='https://www.youtube.com/channel/UC_Sx_eaSqmNYtj7n5iYofjw'
            hr={true}
          />
          <TradeshowCard
            date='April 12 - 15, 2026'
            img='/images/naceLogo.png'
            alt='NACE 2026 Annual Conference'
            url='https://www.countyengineers.org/future-meetings'
            name='NACE 2026 Annual Conference - Arlington, TX'
            text1={`As a county road and infrastructure professional, NACE 2026 is one of the best investments. NACE and the Illinois Association of County Engineers invites you to connect with peers from across the country, discover strategies for cost savings and operational efficiency, and enhance your toolkit with innovative, practical solutions.`}
            facebookURL='https://www.facebook.com/engineersnace'
            twitterURL='https://x.com/EngineersNACE'
            instagramURL='https://www.instagram.com/countyengineersrule'
            linkedInURL='https://www.linkedin.com/company/national-association-of-county-engineers'
            hr={true}
          />
          <TradeshowCard
            date='April 28 - May 1, 2026'
            img='/images/rpugLogo.png'
            alt='Road Profile Users&#39;s Group'
            url='https://rpug.org'
            name='Road Profile Users Group 2026 Conference - Pittsburgh, PA'
            text1='RPUG&#39;s annual meeting is to serve as a forum for the exchange of information between end users, data collectors, vendors, construction and design engineers and researchers who have an interest in road profiles, road roughness/smoothness, pavement surface textures, friction, and tire-pavement noise.'
            hr={true}
          />
          <TradeshowCard
            date='May 27 - 28, 2026'
            img='/images/txapa-maps-logo.png'
            alt='Texas Asphalt Pavement Association'
            url='https://texasasphalt.org/events/maps-dfw-hurst'
            name='TXAPA MAPS Regional Meeting - Dallas-Fort Worth'
            text1='The Managing Asphalt Pavements (MAPS) Conference features a showcase of the latest leading-edge equipment, new technology, and services to optimize your asphalt paving projects from top-tier suppliers and vendors. If you are responsible for specifying, designing, constructing, and/or managing asphalt pavement projects, you don’t want to miss TXAPA’s MAPS Conference.'
            facebookURL='https://www.facebook.com/TexasAsphalt'
            twitterURL='https://x.com/TexasAsphalt'
            instagramURL='https://www.instagram.com/texasasphaltpavement'
            linkedInURL='https://www.linkedin.com/company/texas-asphalt-pavement-association'
            youtubeURL='https://www.youtube.com/channel/UCg9R6YxcVok22oBpf3PN8zg'
            hr={true}
          />
          <TradeshowCard
            date='July 14 - 17, 2026'
            img='/images/napa-logo.png'
            alt='National Asphalt Pavement Association'
            url='https://www.asphaltpavement.org/programs/napa-events/meetings-calendar'
            name='NAPA Midyear Meeting - Columbus, OH'
            text1='The NAPA Midyear Meeting is three comprehensive days of committee meetings and educational sessions focused on advancing the asphalt pavement industry. Throughout this meeting, NAPA leadership gathers input, makes decisions, and reaffirms the strategic direction of our industry, members, and stakeholders.'
            facebookURL='https://www.facebook.com/AsphaltPavement'
            twitterURL='https://x.com/NAPATweets'
            instagramURL='https://www.instagram.com/goasphalt'
            linkedInURL='https://www.linkedin.com/company/asphaltpavement'
            youtubeURL='https://www.youtube.com/channel/UCDroWs5yMvWHi1mEjHPOAIw'
            hr={true}
          />
          <TradeshowCard
            date='August 2 - 8, 2026'
            img='/images/aashtoLogo.png'
            alt='AASHTO'
            url='https://transportation.org/meetings/events'
            name={`2026 AASHTO Committee on Materials and Pavement - Richmond, VA`}
            text1={`This Committee is tasked with developing materials and test standards used by all AASHTO member departments. Materials and pavement engineers, along with technical experts from these departments, collaborate to reach a consensus on these crucial documents. Participation from industry professionals and academia is also encouraged to ensure the timely resolution of technical issues and to introduce innovative ideas for advancing the transportation industry.`}
            facebookURL='https://www.facebook.com/AASHTOspeaks'
            twitterURL='https://x.com/aashtospeaks'
            instagramURL='https://www.instagram.com/aashtospeaks'
            youtubeURL='https://www.youtube.com/user/aashtovideo'
            hr={true}
          />
          <TradeshowCard
            date='September 14 - 17, 2026'
            img='/images/txapa-logo.png'
            alt='Texas Asphalt Pavement Association'
            url='https://texasasphalt.org/events/2026-txapa-annual-meeting'
            name={`TXAPA's 51st Annual Meeting - San Antonio, TX`}
            text1={`TXAPA holds its annual meeting over four days in mid-September, combining education, networking, and fun. The agenda features award-winning speakers and entertainers and includes technical sessions, ample networking time, a golf tournament, casino night, and a live and silent auction benefiting the TXAPA Scholarship Program. The size of the meeting has grown significantly since the first one in 1974. In 2019, more than 600 TXAPA members, TxDOT personnel, and their spouses attended. The meeting venue is always one of Texas’ premier destination resorts.`}
            facebookURL='https://www.facebook.com/TexasAsphalt'
            twitterURL='https://x.com/TexasAsphalt'
            instagramURL='https://www.instagram.com/texasasphaltpavement'
            linkedInURL='https://www.linkedin.com/company/texas-asphalt-pavement-association'
            youtubeURL='https://www.youtube.com/channel/UCg9R6YxcVok22oBpf3PN8zg'
            hr={true}
          />
          <TradeshowCard
            date='November 3 - 6, 2026'
            img='/images/calcimaLogo.png'
            alt='CalCima'
            url='https://calcima.org/events/EventDetails.aspx?id=1984377&group='
            name='CalCIMA 2026 Education Conference - Monterey, CA'
            text1='Join us at the CalCIMA 2026 Education Conference, there will be multiple sessions about concrete, environmental impacts, asphalt and more. This is also a great opportunity to connect with professionals in the construction and industrial minerals industries, as well as learn about all the different companies. We hope to see you there!'
            facebookURL='https://www.facebook.com/CalCIMA.org'
            twitterURL='https://x.com/CalcimaRocks'
            instagramURL='https://www.instagram.com/calcimarocks'
            linkedInURL='https://www.linkedin.com/company/calcima'
            youtubeURL='https://www.youtube.com/channel/UC-7hBI95v83T8mHA-FVFkXQ'
            hr={true}
          />
          <TradeshowCard
            date='January 4 - 6, 2027'
            img='/images/mapa-logo.png'
            alt='Missouri Asphalt Paving Association'
            url='https://moasphalt.org/events'
            name='37th Annual MAPA Conference - Columbia, MO'
            text1='The Missouri Asphalt Paving Association conference is your chance to get caught up on the outlook of the industry and check out the new innovative technologies available from exhibitors on the showroom floor, bringing you information on the most current industry news. Along with education, the conference gives you a fantastic opportunity to network with peers and meet other industry professionals'
            facebookURL='https://www.facebook.com/MoAsphalt'
            twitterURL='https://x.com/MoAsphalt'
            linkedInURL='https://www.linkedin.com/company/moasphalt'
            hr={true}
          />
          <TradeshowCard
            date='January 10 - 14, 2027'
            img='/images/trb-logo.png'
            alt='Transportation Research Board'
            url='https://trb-annual-meeting.nationalacademies.org'
            name='TRB 106th Annual Meeting - Washington, DC - Booth #724'
            text1={`The Transportation Research Board's (TRB) Annual Meeting is the largest global gathering of transportation professionals and researchers with a focus on innovative solutions for all modes of transportation. The meeting program will cover all transportation modes, with more than 5,000 presentations in nearly 800 sessions and workshops, addressing topics of interest to policy makers, administrators, practitioners, researchers, and representatives of government, industry, and academic institutions.`}
            facebookURL='https://www.facebook.com/NASEMTRB'
            twitterURL='https://x.com/nasemtrb'
            linkedInURL='https://www.linkedin.com/company/the-national-academies'
            youtubeURL='https://www.youtube.com/@nationalacademies'
            hr={true}
          />
          <TradeshowCard
            date='February 8 - 11, 2027'
            img='/images/napa-logo.png'
            alt='NAPA 2027 Annual Meeting'
            url='https://www.asphaltpavement.org/programs/napa-events/napa-annual-meeting'
            name='NAPA 2027 Annual Meeting - Miami, FL'
            text1={`The NAPA 2027 Annual Meeting will give you the latest tools and insights to help you reach your goals in the asphalt pavement industry. Stay tuned for details about general sessions and workshops. Combined with invaluable industry networking, NAPA's Annual Meeting is where the industry gathers to set its future.`}
            facebookURL='https://www.facebook.com/AsphaltPavement'
            twitterURL='https://x.com/NAPATweets'
            instagramURL='https://www.instagram.com/goasphalt'
            linkedInURL='https://www.linkedin.com/company/asphaltpavement'
            youtubeURL='https://www.youtube.com/channel/UCDroWs5yMvWHi1mEjHPOAIw'
            hr={true}
          />
          <TradeshowCard
            date='March 15 - 17, 2027'
            img='/images/woa-logo-2027.png'
            alt='World of Asphalt'
            url='https://www.worldofasphalt.com'
            name='World of Asphalt - New Orleans, LA'
            text1={`World of Asphalt is the leading asphalt trade show and conference. Over 450 of the industry's leading manufacturers and service providers in the aggregate, asphalt, pavement maintenance, and traffic safety industry sectors come together at World of Asphalt to showcase their latest products and technologies. The conference features learning opportunities with leading industry experts to discuss solutions to issues affecting the asphalt industry.`}
            facebookURL='https://www.facebook.com/WorldofAsphalt'
            twitterURL='https://x.com/WorldofAsphalt'
            instagramURL='https://www.instagram.com/world.of.asphalt'
            linkedInURL='https://www.linkedin.com/company/world-of-asphalt'
            youtubeURL='https://www.youtube.com/user/WorldofAsphalt'
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
