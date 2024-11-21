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
      imgUrl: '/images/apai-logo.png',
      name: 'APAI Winter Conference and Expo',
      booth: '',
      cityState: 'Muncie, IN',
      date: 'December 11-13, 2024',
      url: 'https://www.asphaltindiana.org/events.php',
      lat: 40.206962,
      lng: -85.393312,
    },
    {
      imgUrl: '/images/seaupg-logo.png',
      name: 'SEAUPG',
      booth: 'Booth #3',
      cityState: 'Mobile, AL',
      date: 'November 19-21, 2024',
      url: 'http://www.seaupg.org',
      lat: 30.702498,
      lng: -88.056333,
    },
  */

export default function GoogleTradeshowMap() {
  const [shows, setShows] = useState([
    {
      imgUrl: '/images/wisconsin-asphalt-logo.png',
      name: 'WAPA 65th Annual Conference',
      booth: '',
      cityState: 'Wisconsin Dells, WI',
      date: 'December 3-4, 2024',
      url: 'https://www.wispave.org/wapas-65th-annual-conference-and-business-meeting',
      lat: 43.625082,
      lng: -89.775456,
    },
    {
      imgUrl: '/images/mn-logo.png',
      name: '2024 Minnesota Asphalt Conference',
      booth: '',
      cityState: 'St. Cloud, MN',
      date: 'December 10-11, 2024',
      url: 'https://www.asphaltisbest.com/page/conference',
      lat: 45.553381,
      lng: -94.164918,
    },
    {
      imgUrl: '/images/trb-logo.png',
      name: 'TRB 104th Annual Meeting',
      booth: 'Booth #524',
      cityState: 'Washington, DC',
      date: 'January 5-9, 2025',
      url: 'https://trb-annual-meeting.nationalacademies.org',
      lat: 38.911744,
      lng: -77.018697,
    },
    {
      imgUrl: '/images/mapa-logo.png',
      name: '35th Annual MAPA Conference',
      booth: '',
      cityState: 'Columbia, MO',
      date: 'January 6-8, 2025',
      url: 'https://moasphalt.org/events/35th-annual-mapa-conference',
      lat: 38.948857,
      lng: -92.334012,
    },
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
      imgUrl: '/images/rmaces-logo.png',
      name: '52nd Annual RMACES',
      booth: '',
      cityState: 'Denver, CO',
      date: 'February 19-20, 2025',
      url: 'https://whova.com/web/lJQ-iWM97zLvsS@GTUGkBcEBL2hv--Nzwq5VzVuKgMs%3D',
      lat: 39.771474,
      lng: -104.806882,
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
      imgUrl: '/images/woa-logo.png',
      name: 'World of Asphalt',
      booth: 'Booth #1008',
      cityState: 'St. Louis, MO',
      date: 'March 25-27, 2025',
      url: 'https://www.worldofasphalt.com',
      lat: 38.635403,
      lng: -90.203293,
    },
    {
      imgUrl: '/images/maine-logo.png',
      name: 'MAPA Annual Spring Paving Seminar',
      booth: '',
      cityState: 'Bangor, ME',
      date: 'April 8-9, 2025',
      url: 'https://maine-apa.org/paving-seminar',
      lat: 44.831204,
      lng: -68.781424,
    },
    {
      imgUrl: '/images/napa-logo.png',
      name: 'NAPA Midyear Meeting',
      booth: '',
      cityState: 'Louisville, KY',
      date: 'July 8-11, 2025',
      url: 'https://www.asphaltpavement.org/programs/napa-events/napa-midyear-meeting',
      lat: 38.233585,
      lng: -85.770498,
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
      <div style={{ height: '550px', width: '100%' }}>
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
