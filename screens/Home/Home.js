import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DropDown from 'react-native-modal-dropdown';
import { Card, Button } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import styles from './HomeStyles';


const region = {
  latitude: 10,
  longitude: 10,
  longitudeDelta: 10,
  latitudeDelta: 10,
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
      initialRegion={region}
      style={styles.mapView}
      region={{
        longitude, latitude, latitudeDelta: 0.05, longitudeDelta: 0.05,
      }}
      provider="google"
    />
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
};

Home.defaultProps = {
  nearbyStations: [],
  allStations: [],
  longitude: undefined,
  latitude: undefined,
};

export default Home;
