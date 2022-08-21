import React, { useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
  "pk.eyJ1IjoicnNoZW9yYW4xMiIsImEiOiJja3c2M3o5ZDcyM2Z4Mm5yb2VzM2kwYjQyIn0.TQx8LsbP7x_TitEZSIfR4A";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [80, 22],
      zoom: 3,
    });
    if (props.pick) {
      // Sam 🚀
      addToMap(map, props.pick);
    }

    if (props.drop) {
      addToMap(map, props.drop);
    }

    if (props.pick && props.drop) {
      // 🔥 Fabio
      map.fitBounds([props.drop, props.pick], {
        padding: 60,
      });
    }

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );


  }, [props.pick, props.drop]);

  // Good job Chen
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
flex-1

`;
