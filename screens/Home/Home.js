import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DropDown from 'react-native-modal-dropdown';
import { Card, Button } from 'react-native-elements';
import styles from './HomeStyles';

const Home = ({
  nearbyStations,
  allStations,
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
      <Card title="Nearby Stations" containerStyle={styles.cardStyle}>
        <DropDown
          dropdownTextStyle={styles.dropdownTextStyle}
          dropdownStyle={styles.dropdownStyle}
          options={nearbyStations.map(({ StationDesc }) => StationDesc)}
          onSelect={stationNavigationHandler}
        />
      </Card>
      <Card title="All Stations" containerStyle={styles.cardStyle}>
        <DropDown
          dropdownTextStyle={styles.dropdownTextStyle}
          dropdownStyle={styles.dropdownStyle}
          options={allStations.map(({ StationDesc }) => StationDesc)}
          onSelect={stationNavigationHandler}
        />
      </Card>
    </Card>
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
};

Home.defaultProps = {
  nearbyStations: [],
  allStations: [],
  StationAlias: null,
};

export default Home;
