import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DropDown from 'react-native-modal-dropdown';
import { Card, Button } from 'react-native-elements';
import styles from './HomeStyles';


const Home = ({
  nearbyStations,
  allStations,
  longitude,
  latitude,
  time,
  stationNavigationHandler,
  startWatchingLocation,
}) => console.log('stations', allStations) || (
  <View>
    <Card containerStyle={styles.cardStyle}>
      <Button
        containerStyle={{ margin: 15 }}
        onPress={startWatchingLocation}
        title="Location"
      />
      <Card title="Nearby Stations" containerStyle={styles.cardStyle}>
        <DropDown
          dropdownTextStyle={styles.dropdownTextStyle}
          dropdownStyle={styles.dropdownStyle}
          options={nearbyStations.map(({ name }) => name)}
          onSelect={stationNavigationHandler}
        />
      </Card>
      <Card title="All Stations" containerStyle={styles.cardStyle}>
        <DropDown
          dropdownTextStyle={styles.dropdownTextStyle}
          dropdownStyle={styles.dropdownStyle}
          options={allStations.map(({ name }) => name)}
          onSelect={stationNavigationHandler}
        />
      </Card>
    </Card>
  </View>
);

const stationsPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
  }),
);

Home.propTypes = {
  nearbyStations: stationsPropTypes,
  allStations: stationsPropTypes,
};

Home.defaultProps = {
  nearbyStations: [],
  allStations: [],
};

export default Home;
