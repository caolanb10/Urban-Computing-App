import React from 'react';
import { Picker, View } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';
import styles from './StationDropdownStyles';
import { StationsPropTypes } from '../../constants';

const StationDropdown = ({
  stations,
  stationNavigationHandler,
  title,
}) => (
  <Card style={styles.dropdownStyle} title={title}>
    <Picker
      selectedValue={null}
      onValueChange={stationNavigationHandler}
      style={styles.pickerStyle}
    >
      <Picker.Item label="Select an Item" value={null} />
      {stations.map(({ StationDesc }) => (
        <Picker.Item
          key={StationDesc}
          label={StationDesc}
          value={StationDesc}
        />
      ))}
    </Picker>
  </Card>
);

StationDropdown.propTypes = {
  stations: StationsPropTypes,
  stationNavigationHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

StationDropdown.defaultProps = {
  stations: [],
};

export default StationDropdown;
