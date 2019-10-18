import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './DataStyles';

const Data = ({ csvFiles, LaunchFile }) => console.log(csvFiles)||(
  <View>
    {csvFiles.map((file) => (
      <ListItem
        title={file.name}
        onPress={LaunchFile}
      />
    ))}
  </View>
);

Data.propTypes = {
  LaunchFile: PropTypes.func.isRequired,
  csvFiles: PropTypes.array,
};

Data.defaultProps = {
  csvFiles: [],
};
export default Data;
