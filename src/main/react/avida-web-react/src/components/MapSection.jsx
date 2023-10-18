import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; //eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1Ijoibm9zc3Q5OSIsImEiOiJjbG5sdnpuNW4wdHk0Mmttb2JvdHZvM2tmIn0.7haFs7K8-wNkUetaC2rQxQ';
export default function MapSection() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.6695);
  const [lat, setLat] = useState(-33.4484);
  const [zoom, setZoom] = useState(13);

  //[-70.6695, -33.4484]

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
      });

      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }
  }, [lng, lat, zoom]);

  return (
    <>
      <section
        className="row container-fluid bg-body-secondary min-vh-100"
        id="mapa"
      >
        <h1 className="text-center">Mapa Interactivo</h1>
        <div className="col-md-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit
          molestiae modi sint commodi soluta quo enim nesciunt sunt quas, harum
          voluptatibus ratione provident corrupti? In dolorem perspiciatis quo
          illo.
        </div>
        <div className="col-md-5">
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container"></div>
        </div>
      </section>
    </>
  );
}
