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
  },
}) => (
  <View>
    <ListItem
      key={Duein}
      title={Destination}
      subtitle={Duein}
      leftIcon={Icon}
      onPress={expand}
      bottomDivider
      rightIcon={isOpen ? ArrowUp : ArrowDown}
    />
    {isOpen && <ListItem />}
  </View>
);

TrainItem.propTypes = {};

export default TrainItem;
