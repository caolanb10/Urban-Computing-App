import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Constants, { TrainPropType } from './constants';
import { TrainItem } from '../../components';

import styles from './StationStyles';

const { NORTHBOUND, SOUTHBOUND } = Constants;

const Station = ({
  station,
  northBoundData,
  southBoundData,
}) => console.log('presentational component', northBoundData) || (
  <ScrollView>
    <Card title={NORTHBOUND}>
      {northBoundData.map((train) => (
        <TrainItem train={train} />
      ))}
    </Card>
    <Card title={SOUTHBOUND}>
      {southBoundData.map((train, i) => (
        <TrainItem train={train} />
      ))}
    </Card>
  </ScrollView>
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
