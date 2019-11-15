import React from 'react';
import PropTypes from 'prop-types';
import MapView, { Circle, Marker } from 'react-native-maps';
import styles from './StationMapStyles';

const StationMap = ({
  allStations,
  longitude,
  latitude,
  haveUserLocation,
  mapCoordinates,
  stationNavigationHandler,
}) => (
  <MapView
    style={styles.mapView}
    provider="google"
    region={haveUserLocation ? {
      longitude, latitude, latitudeDelta: 0.01, longitudeDelta: 0.01,
    } : mapCoordinates}
  >
    {allStations ? allStations.map((station) => (
      <Marker
        key={station.StationId}
        coordinate={{
          latitude: parseFloat(station.StationLatitude),
          longitude: parseFloat(station.StationLongitude),
        }}
        title={station.StationDesc}
        onPress={() => stationNavigationHandler(null, station.StationDesc)}
      />
    )) : {} }
    {haveUserLocation && <Circle center={{ latitude, longitude }} radius={40} fillColor="rgba(0,0,160,0.3)" />}
  </MapView>
);

const stationsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    StationAlias: PropTypes.string,
    StationCode: PropTypes.string.isRequired,
    StationDesc: PropTypes.string.isRequired,
    StationId: PropTypes.string.isRequired,
    StationLatitude: PropTypes.string.isRequired,
    StationLongitude: PropTypes.string.isRequired,
  }),
);

StationMap.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  haveUserLocation: PropTypes.bool.isRequired,
  mapCoordinates: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
  }).isRequired,
  allStations: stationsPropTypes,
  stationNavigationHandler: PropTypes.func.isRequired,
};

StationMap.defaultProps = {
  allStations: [],
  longitude: undefined,
  latitude: undefined,
};

export default StationMap;
