import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import Constants, { TrainPropType } from './constants';
import styles from './StationStyles';

const { NORTHBOUND, SOUTHBOUND } = Constants;

const Station = ({
  station,
  northBoundData,
  southBoundData,
}) => (
  <View>
    <Card title={NORTHBOUND}>
      {northBoundData.map((train) => (
        <ListItem />
      ))}
    </Card>
    <Card title={SOUTHBOUND}>
      {southBoundData.map((train) => (
        <ListItem />
      ))}
    </Card>
  </View>
);

Station.propTypes = {
  northBoundData: PropTypes.arrayOf(TrainPropType),
  southBoundData: PropTypes.arrayOf(TrainPropType),
};

Station.defaultProps = {
  northBoundData: [],
  southBoundData: [],
};

export default Station;
