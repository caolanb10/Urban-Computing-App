import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './LateTrainsStyles';

const LateTrains = ({ nearStationData }) => console.log('late train comp', nearStationData) || (
  <View>
    <Text>
      hello world
    </Text>
  </View>
);

LateTrains.propTypes = {};

export default LateTrains;
