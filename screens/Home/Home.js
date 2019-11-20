import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, Overlay, Text } from 'react-native-elements';
import styles from './HomeStyles';
import {
  StationMap, NearbyStations, AllStations,
} from '../../components';


const Home = ({
  isTracking,
  startWatchingLocation,
  stopWatchingLocation,
  navigationHandler,
  toggleOverlay,
  overlayActive,
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
      <Overlay
        isVisible={overlayActive}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlayStyle}
      >
        <Text style={styles.overlayTextStyle}> Please First Find Stations Nearby </Text>
      </Overlay>
      <Button
        type="solid"
        containerStyle={{ margin: 15 }}
        onPress={isTracking ? navigationHandler : toggleOverlay}
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
  navigationHandler: PropTypes.func.isRequired,
};

export default Home;
