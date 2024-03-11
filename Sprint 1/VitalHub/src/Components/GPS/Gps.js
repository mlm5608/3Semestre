import { GpsBox, MapaStyle } from "./style";

const MapaGps = () => {
  return (
    <GpsBox>
      <MapaStyle
        initialCamera={{
          center: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 16,
        }}
      />
    </GpsBox>
  );
};

export default MapaGps;