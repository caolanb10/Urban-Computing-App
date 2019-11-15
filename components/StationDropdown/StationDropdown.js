import React from 'react';
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
    <DropDown
      dropdownTextStyle={styles.dropdownTextStyle}
      dropdownStyle={styles.dropdownStyle}
      options={stations.map(({ StationDesc }) => StationDesc)}
      onSelect={stationNavigationHandler}
    />
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
