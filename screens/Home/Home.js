import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from './HomeStyles';

const Home = ({ nearbyStations, allStations }) => (
  <View>
    <Card title="NEARBY STATIONS">
      {/*{nearbyStations.map((station, i) => (
        <View key={i} style={styles.stationList}>
          <Button style={styles.stationName}>
            {station.name}
          </Button>
        </View>
      ))}*/}
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
  nearbyStations: stationsPropTypes.isRequired,
  allStations: stationsPropTypes.isRequired,
};

export default Home;
