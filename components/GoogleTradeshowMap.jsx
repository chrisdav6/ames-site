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

export default function GoogleTradeshowMap() {
  const [shows, setShows] = useState([
    {
      imgUrl: '/images/mapa-logo.png',
      name: 'MAPA',
      cityState: 'Bangor, ME',
      date: 'April 8-9, 2025',
      url: 'https://maine-apa.org/paving-seminar',
      lat: 44.831204,
      lng: -68.781424,
    },
    {
      imgUrl: '/images/wisconsin-asphalt-logo.png',
      name: 'WAPA 65th Annual Conference',
      cityState: 'Wisconsin Dells, WI',
      date: 'December 3-4, 2024',
      url: 'https://www.wispave.org/event/wapas-65th-annual-conference-and-business-meeting',
      lat: 43.625082,
      lng: -89.775456,
    },
  ]);
  const [selectedShow, setSelectedShow] = useState(undefined);
  const defaultPosition = { lat: 38.610949, lng: -95.605202 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: '550px', width: '100%' }}>
        <Map
          zoom={4.5}
          defaultCenter={defaultPosition}
          mapId={process.env.NEXT_PUBLIC_TRADESHOW_MAP_ID}
          clickableIcons={false}
          scrollwheel={false}
          onClick={() => setSelectedShow(undefined)}
        >
          {shows.map((show, index) => (
            <div key={index}>
              <AdvancedMarker
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
              <div className='min-w-[200px]'>
                <div className='relative max-w-[125px] h-[50px] mb-4'>
                  <Image
                    src={selectedShow.imgUrl}
                    alt={selectedShow.name}
                    fill
                    className='object-contain'
                  />
                </div>
                <p className='font-bold'>{selectedShow.name}</p>
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
