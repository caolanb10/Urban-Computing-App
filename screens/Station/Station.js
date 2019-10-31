import React from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './StationStyles';

const Station = ({
  station,
  stationData,
  northBoundData,
  southBoundData,
}) => console.log('north and south', { northBoundData, southBoundData }) || (
  <Card>
    {/*    {stationData.map((train) => (
      <ListI
    ))}*/}
  </Card>
);

Station.propTypes = {};

export default Station;
