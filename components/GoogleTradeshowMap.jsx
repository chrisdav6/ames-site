'use client';
import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import Image from 'next/image';

//PAST SHOWS
/*
    {
      imgUrl: '/images/pavex.png',
      name: 'PAVE/X: The Pavement Experience',
      booth: 'Booth #1035',
      cityState: 'Chattanooga, TN',
      date: 'January 28-30, 2025',
      url: 'https://www.pavexshow.com',
      lat: 35.038162,
      lng: -85.305639,
    },
    {
      imgUrl: '/images/michigan-asphalt-logo.png',
      name: 'APAM 68th Annual Paving Conference',
      booth: '',
      cityState: 'Mt. Pleasant, MI',
      date: 'February 26-27, 2025',
      url: 'https://www.apa-mi.org/pc_home_page.php',
      lat: 43.600198,
      lng: -84.769425,
    },
    {
      imgUrl: '/images/paiky-logo.png',
      name: 'PAIKY 2025 Winter Training School',
      booth: '',
      cityState: 'Louisville, KY',
      date: 'March 5-7, 2025',
      url: 'https://members.paiky.org/site_event_detail.cfm?pk_association_event=31956',
      lat: 38.236821,
      lng: -84.747838,
    },
    {
      imgUrl: '/images/ohio-logo.png',
      name: 'Ohio Asphalt Expo',
      booth: '',
      cityState: 'Columbus, OH',
      date: 'March 18-19, 2025',
      url: 'https://www.flexiblepavements.org/OhioAsphaltExpo',
      lat: 40.139683,
      lng: -82.976837,
    },
      {
      imgUrl: '/images/rpugLogo.png',
      name: 'Road Profile Users Group 2025 Conference',
      booth: '',
      cityState: 'Denton, TX',
      date: 'April 28-May 1, 2025',
      url: 'https://rpug.org',
      lat: 33.210594,
      lng: -97.136568,
    },
    {
      imgUrl: '/images/mn-logo.png',
      name: '2025 Minnesota Asphalt Conference',
      booth: '',
      cityState: 'St. Cloud, MN',
      date: 'December 9-10, 2025',
      url: 'https://www.asphaltisbest.com/events/EventDetails.aspx?id=1853252&group=',
      lat: 45.553381,
      lng: -94.164918,
    },
    {
      imgUrl: '/images/aashtoLogo.png',
      name: '2025 Committee on Materials and Pavement',
      booth: '',
      cityState: 'Hartford, CT',
      date: 'August 3-7, 2025',
      url: 'https://web.cvent.com/event/6250a4fe-d85f-47f4-957c-ce80790d696b/summary',
      lat: 41.762526,
      lng: -72.67796,
    },
    {
      imgUrl: '/images/rmaces-logo.png',
      name: '53rd Annual RMACES',
      booth: '',
      cityState: 'Denver, CO',
      date: 'February 12-13, 2026',
      url: 'https://www.rmaces.org',
      lat: 39.771474,
      lng: -104.806882,
    },
  */

export default function GoogleTradeshowMap() {
  const [shows, setShows] = useState([
    {
      imgUrl: '/images/rathLogo.png',
      name: 'International Symposium Towards Holistic Roads and Beyond',
      booth: '',
      cityState: 'Bangkok, Thailand',
      date: 'September 4-5, 2025',
      url: 'https://www.roadassothai.com/news/931',
      lat: 13.735959,
      lng: 100.485655,
    },
    {
      imgUrl: '/images/txapa-logo.png',
      name: "TXAPA's 50th Annual Meeting",
      booth: '',
      cityState: 'San Antonio, TX',
      date: 'September 8-11, 2025',
      url: 'https://texasasphalt.org/events/2025-annual-meeting',
      lat: 29.462161,
      lng: -98.223925,
    },
    {
      imgUrl: '/images/neaupg-logo.png',
      name: 'NEAUPG Fall Meeting',
      booth: '',
      cityState: 'Harrisburg, PA',
      date: 'October 29-30, 2025',
      url: 'https://neaupg.engr.uconn.edu',
      lat: 40.274496,
      lng: -76.880249,
    },
    {
      imgUrl: '/images/calcimaLogo.png',
      name: 'CalCIMA Education Conference',
      booth: '',
      cityState: 'Anaheim, CA',
      date: 'November 10-13, 2025',
      url: 'https://www.calcimaconference.org',
      lat: 33.829713,
      lng: -117.908835,
    },
    {
      imgUrl: '/images/seaupg-logo.png',
      name: 'SEAUPG',
      booth: '',
      cityState: 'Charleston, WV',
      date: 'November 18-20, 2025',
      url: 'http://www.seaupg.org',
      lat: 38.351258,
      lng: -81.617623,
    },
    {
      imgUrl: '/images/wisconsin-asphalt-logo.png',
      name: 'WAPA 66th Annual Conference',
      booth: '',
      cityState: 'Wisconsin Dells, WI',
      date: 'December 2-3, 2025',
      url: 'https://www.wispave.org',
      lat: 43.625082,
      lng: -89.775456,
    },
    {
      imgUrl: '/images/apai-logo.png',
      name: 'APAI Winter Conference and Expo',
      booth: '',
      cityState: 'Muncie, IN',
      date: 'December 10-12, 2025',
      url: 'https://mms.asphaltindiana.org//Calendar/moreinfo.php?org_id=APAI&eventid=167640',
      lat: 40.206962,
      lng: -85.393312,
    },
    {
      imgUrl: '/images/mapa-logo.png',
      name: '36th Annual MAPA Conference',
      booth: '',
      cityState: 'Columbia, MO',
      date: 'January 5-7, 2026',
      url: 'https://moasphalt.org/events',
      lat: 38.948857,
      lng: -92.334012,
    },
    {
      imgUrl: '/images/trb-logo.png',
      name: 'TRB 105th Annual Meeting',
      booth: 'Booth #727',
      cityState: 'Washington, DC',
      date: 'January 11-15, 2026',
      url: 'https://trb-annual-meeting.nationalacademies.org',
      lat: 38.911744,
      lng: -77.018697,
    },
    {
      imgUrl: '/images/penn-asphalt-logo.png',
      name: '66th Annual PAPA Conference',
      booth: '',
      cityState: 'Hershey, PA',
      date: 'January 19-21, 2026',
      url: 'https://www.pa-asphalt.org/events/papa-events/146-66th-annual-papa-conference-save-the-date',
      lat: 40.285737,
      lng: -76.334034,
    },
    {
      imgUrl: '/images/napa-logo.png',
      name: 'NAPA 2026 Annual Meeting',
      booth: '',
      cityState: 'Scottsdale, AZ',
      date: 'January 26-29, 2026',
      url: 'https://www.asphaltpavement.org/programs/napa-events/napa-annual-meeting',
      lat: 33.677503,
      lng: -111.854997,
    },
    {
      imgUrl: '/images/utah-asphalt-logo.png',
      name: '2026 Utah Asphalt Conference',
      booth: '',
      cityState: 'Sandy, UT',
      date: 'February 18-19, 2026',
      url: 'https://members.utahasphalt.org/events/Details/uapa-2026-asphalt-conference-1343185?sourceTypeId=Website',
      lat: 40.566912,
      lng: -111.842014,
    },
    {
      imgUrl: '/images/conexpo-logo.png',
      name: 'ConExpo',
      booth: '',
      cityState: 'Las Vegas, NV',
      date: 'March 3-7, 2026',
      url: 'https://www.conexpoconagg.com',
      lat: 36.161515,
      lng: -115.161274,
    },
    {
      imgUrl: '/images/woa-logo-2027.png',
      name: 'World of Asphalt',
      booth: '',
      cityState: 'New Orleans, LA',
      date: 'March 15-17, 2027',
      url: 'https://www.worldofasphalt.com',
      lat: 29.955946,
      lng: -90.081347,
    },
    {
      imgUrl: '/images/maine-logo.png',
      name: 'MAPA Annual Spring Paving Seminar',
      booth: '',
      cityState: 'Bangor, ME',
      date: 'April 7-8, 2026',
      url: 'https://maine-apa.org/paving-seminar',
      lat: 44.831204,
      lng: -68.781424,
    },
    {
      imgUrl: '/images/naceLogo.png',
      name: 'NACE 2026 Annual Conference',
      booth: '',
      cityState: 'Arlington, TX',
      date: 'April 12-15, 2026',
      url: 'https://www.countyengineers.org/future-meetings',
      lat: 32.722226,
      lng: -97.112523,
    },
    {
      imgUrl: '/images/napa-logo.png',
      name: 'NAPA Midyear Meeting',
      booth: '',
      cityState: 'Columbus, OH',
      date: 'July 14-17, 2026',
      url: 'https://www.asphaltpavement.org/programs/napa-events/meetings-calendar',
      lat: 39.950705,
      lng: -82.99982,
    },
    {
      imgUrl: '/images/ncat-conference.png',
      name: 'NCAT Test Track Conference',
      booth: '',
      cityState: 'Auburn, AL',
      date: '2027',
      url: 'https://eng.auburn.edu/research/centers/ncat/testtrack/conference.html',
      lat: 32.620384,
      lng: -85.473941,
    },
  ]);
  const [selectedShow, setSelectedShow] = useState(undefined);
  const defaultPosition = { lat: 37.610949, lng: -92.605202 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className='h-[350px] w-[100%] md:h-[550px]'>
        <Map
          defaultZoom={4.75}
          defaultCenter={defaultPosition}
          mapId={process.env.NEXT_PUBLIC_TRADESHOW_MAP_ID}
          clickableIcons={false}
          scrollwheel={false}
          onClick={() => setSelectedShow(undefined)}
        >
          {shows.map((show, index) => (
            <div key={index}>
              <AdvancedMarker
                title={show.name}
                position={{ lat: show.lat, lng: show.lng }}
                onClick={() => {
                  show === selectedShow
                    ? setSelectedShow(undefined)
                    : setSelectedShow(show);
                }}
              >
                <Pin background={'#EA4335'} glyphColor={'#B41412'} />
              </AdvancedMarker>
            </div>
          ))}
          {selectedShow && (
            <InfoWindow
              position={{ lat: selectedShow.lat + 1.75, lng: selectedShow.lng }}
              onCloseClick={() => setSelectedShow(undefined)}
            >
              <div className='flex flex-col min-w-[160px]'>
                <div className='relative h-[90px] max-w-[160px] mb-4'>
                  <Image
                    src={selectedShow.imgUrl}
                    alt={selectedShow.name}
                    fill
                    className='object-contain object-left-bottom'
                  />
                </div>
                <p className='font-bold'>{selectedShow.name}</p>
                {selectedShow.booth && (
                  <p className='font-bold'>{selectedShow.booth}</p>
                )}
                <hr className='mt-1 mb-2' />
                <p>{selectedShow.cityState}</p>
                <p>{selectedShow.date}</p>
                <p className='font-bold'>
                  <a href={selectedShow.url} target='_blank'>
                    Visit Website
                  </a>
                </p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
