import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { Config } from "../../config/dev";

const styles = {
  width: "100%",
  height: "99%",
  position: "absolute",
};

const access_token = Config["mapbox.token"];

const Map = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const { activeCountry, mapData } = props;

  const mapThemeCallback = useRef(mapData);
  const activeCountryCallback = useRef(activeCountry);

  useEffect(() => {
    mapThemeCallback.current = setMapTheme;
  });

  useEffect(() => {
    activeCountryCallback.current = moveMap;
  });

  const moveMap = (activeCountry) => {
    if (map) {
      map.flyTo({
        center: [activeCountry.latlng[1], activeCountry.latlng[0]],
        essential: true,
        zoom: 5,
      });
    }
  };

  const setMapTheme = (mapData) => {
    if (map) {
      map.setStyle(`mapbox://styles/mapbox/${mapData.theme}`);
    }
  };

  useEffect(() => {
    mapboxgl.accessToken = access_token;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: `mapbox://styles/mapbox/${mapData.theme}`, // stylesheet location
        center: mapData.center,
        zoom: mapData.zoomLevel,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, mapData]);

  useEffect(() => {
    activeCountryCallback.current(activeCountry);
  }, [activeCountry]);

  useEffect(() => {
    mapThemeCallback.current(mapData);
  }, [mapData]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

const mapStateToProps = (state) => ({
  activeCountry: state.countrySelector,
  mapData: state.mapData,
});

export default connect(mapStateToProps)(Map);
