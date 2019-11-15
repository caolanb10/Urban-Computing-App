import React from 'react';
import { Picker, PickerItem } from 'react-native';
import PropTypes from 'prop-types';
import DropDown from 'react-native-modal-dropdown';
import { Card } from 'react-native-elements';
import styles from './StationDropdownStyles';
import { StationsPropTypes } from '../../constants';

const StationDropdown = ({
  stations,
  stationNavigationHandler,
  title,
}) => (
  <Card title={title} containerStyle={styles.innerCardStyle}>
    {/*    <DropDown
      dropdownTextStyle={styles.dropdownTextStyle}
      dropdownStyle={styles.dropdownStyle}
      options={stations.map(({ StationDesc }) => StationDesc)}
      onSelect={stationNavigationHandler}
    />*/}
    <Picker
      selectedValue={null}
      onValueChange={stationNavigationHandler}
      style={styles.dropdownStyle}
    >
      <Picker.Item label="Select an Item" value={null} />
      {stations.map(({ StationDesc }) => (
        <Picker.Item
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
