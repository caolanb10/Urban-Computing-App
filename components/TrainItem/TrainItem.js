import React from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TrainItemStyles';


const Icon = { name: 'ios-train', type: 'ionicon' };
const ArrowDown = { name: 'keyboard-arrow-down' };
const ArrowUp = { name: 'keyboard-arrow-up' };


const TrainItem = ({
  expand,
  isOpen,
  train: {
    Duein,
    Destination,
    Late,
    Lastlocation,
    Exparrival,
    Traincode,
  },
}) => (
  <View>
    <ListItem
      key={Traincode}
      title={`${Destination} (${Traincode.slice(0,-1)})`}
      subtitle={`Due in: ${Duein} mins`}
      leftIcon={Icon}
      onPress={expand}
      bottomDivider
      rightIcon={isOpen ? ArrowUp : ArrowDown}
    />
    {isOpen
    && (
    <ListItem
      title={`Last Location: ${Lastlocation || 'Not Yet Departed'}`}
    />
    )}
  </View>
);

TrainItem.propTypes = {};

export default TrainItem;
