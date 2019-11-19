import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './HomeStyles';
import {
  StationMap, NearbyStations, AllStations,
} from '../../components';


const Home = ({
  isTracking,
  startWatchingLocation,
  stopWatchingLocation,
  navigationHandler,
}) => (
  <View>
    <View style={styles.stationList}>
      <Button
        type={isTracking ? 'outline' : 'solid'}
        containerStyle={{ margin: 15 }}
        onPress={isTracking ? stopWatchingLocation : startWatchingLocation}
        title={isTracking ? 'Searching For Nearby Stations' : 'Find Stations Near Me'}
      />
      <NearbyStations />
      <AllStations />
      <Button
        type="solid"
        containerStyle={{ margin: 15 }}
        onPress={navigationHandler}
        title="How Late Are Nearby Trains ?"
      />
    </View>
    <View style={styles.mapContainer}>
      <StationMap />
    </View>
  </View>
);

Home.propTypes = {
  isTracking: PropTypes.bool.isRequired,
  startWatchingLocation: PropTypes.func.isRequired,
  stopWatchingLocation: PropTypes.func.isRequired,

};

export default Home;
