import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from './HomeStyles';
import { StationMap, NearbyStations, AllStations } from '../../components';


const Home = ({
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
      <NearbyStations />
      <AllStations />
    </Card>
    <StationMap />
  </View>
);

Home.propTypes = {
  isTracking: PropTypes.bool.isRequired,
  startWatchingLocation: PropTypes.func.isRequired,
  stopWatchingLocation: PropTypes.func.isRequired,

};

export default Home;
