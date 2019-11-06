import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DropDown from 'react-native-modal-dropdown';
import { Card, Button } from 'react-native-elements';
import MapView, { Marker, Circle } from 'react-native-maps';
import styles from './HomeStyles';


const ireland = {
  latitude: 53,
  longitude: -7,
  longitudeDelta: 5,
  latitudeDelta: 5,
};

const Home = ({
  nearbyStations,
  allStations,
  longitude,
  latitude,
  stationNavigationHandler,
  isTracking,
  startWatchingLocation,
  stopWatchingLocation,
  haveUserLocation,
}) => (
  <View>
    <Card containerStyle={styles.cardStyle}>
      <Button
        type={isTracking ? 'outline' : 'solid'}
        containerStyle={{ margin: 15 }}
        onPress={isTracking ? stopWatchingLocation : startWatchingLocation}
        title={isTracking ? 'Searching For Nearby Stations' : 'Find Stations Near Me'}
      />
      <Card title="Nearby Stations" containerStyle={styles.innerCardStyle}>
        <DropDown
          dropdownTextStyle={styles.dropdownTextStyle}
          dropdownStyle={styles.dropdownStyle}
          options={nearbyStations.map(({ StationDesc }) => StationDesc)}
          onSelect={stationNavigationHandler}
        />
      </Card>
      <Card title="All Stations" containerStyle={styles.innerCardStyle}>
        <DropDown
          dropdownTextStyle={styles.dropdownTextStyle}
          dropdownStyle={styles.dropdownStyle}
          options={allStations.map(({ StationDesc }) => StationDesc)}
          onSelect={stationNavigationHandler}
        />
      </Card>
    </Card>
    <MapView
      style={styles.mapView}
      provider="google"
      region={haveUserLocation ? {
        longitude, latitude, latitudeDelta: 0.01, longitudeDelta: 0.01,
      } : ireland}
    >
      {allStations ? allStations.map((station) => (
        <Marker
          key={station.StationId}
          coordinate={{
            latitude: parseFloat(station.StationLatitude),
            longitude: parseFloat(station.StationLongitude),
          }}
          title={station.StationDesc}
        />
      )) : {} }
      {haveUserLocation && <Circle center={{ latitude, longitude }} radius={40} fillColor="rgba(0,0,160,0.3)" />}
    </MapView>
  </View>
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

Home.propTypes = {
  nearbyStations: stationsPropTypes,
  allStations: stationsPropTypes,
  isTracking: PropTypes.bool.isRequired,
  stationNavigationHandler: PropTypes.func.isRequired,
  startWatchingLocation: PropTypes.func.isRequired,
  stopWatchingLocation: PropTypes.func.isRequired,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  haveUserLocation: PropTypes.bool.isRequired,
};

Home.defaultProps = {
  nearbyStations: [],
  allStations: [],
  longitude: undefined,
  latitude: undefined,
};

export default Home;
