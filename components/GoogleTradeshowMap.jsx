'use client';
import { useCallback, useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';

// Map Marker Locations
var markers = [
  {
    event: 'MAPA, Bangor, ME',
    position: { lat: 44.831204, lng: -68.781424 },
  },
  {
    event: 'Test, Bangor, ME',
    position: { lat: 44.831204, lng: -85.781424 },
  },
];

// Info Window Content
var infoWindowContent = [
  // MAPA (Maine)
  [
    '<div>' +
      '<p style="margin-bottom: -10px; font-weight: bold;">MAPA</p><br>' +
      '<hr>' +
      '<div style="margin-top: 5px;">Bangor, ME<br>' +
      'April 8-9, 2025<br>' +
      '<p><a class="link" href="https://maine-apa.org/paving-seminar" target="_blank">Visit Website</a></p>' +
      '</div></div>',
  ],
  // MAPA (Maine)
  [
    '<div>' +
      '<p style="margin-bottom: -10px; font-weight: bold;">Test</p><br>' +
      '<hr>' +
      '<div style="margin-top: 5px;">Bangor, ME<br>' +
      'April 8-9, 2025<br>' +
      '<p><a class="link" href="https://maine-apa.org/paving-seminar" target="_blank">Visit Website</a></p>' +
      '</div></div>',
  ],
];

export default function GoogleTradeshowMap() {
  const position = { lat: 38.610949, lng: -95.605202 };
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: '550px', width: '100%' }}>
        <Map
          zoom={4.5}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_TRADESHOW_MAP_ID}
          clickableIcons={false}
          scrollwheel={false}
        >
          {markers.map((markerItem, index) => (
            <div key={index}>
              <AdvancedMarker
                ref={markerRef}
                position={markerItem.position}
                onClick={handleMarkerClick}
              >
                <Pin background={'#EA4335'} glyphColor={'#B41412'} />
              </AdvancedMarker>

              {infoWindowShown && (
                <InfoWindow
                  position={markerItem.position}
                  anchor={marker}
                  onClose={handleClose}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: infoWindowContent[index],
                    }}
                  ></div>
                </InfoWindow>
              )}
            </div>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
