import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Button, Divider, Header, Icon, Text,
} from 'react-native-elements';
import styles from './MainStyles';

const MainScreen = ({
  isRecording,
  status,
  record,
  finish,
  location,
}) => (
  <View style={styles.page}>
    <Text style={styles.message}>
        Welcome Back
    </Text>
    <Text style={styles.title}>
      GPS Location Tracker
    </Text>
    <Button
      raised
      type={isRecording ? 'outline' : 'solid'}
      title={isRecording ? 'Stop' : 'Start'}
      onPress={isRecording ? finish : record}
      buttonStyle={styles.button}
    />
    <Text style={styles.data}>
      {`${location.long}   ${location.lat}`}
    </Text>
    <Text style={styles.status}>
      {status}
    </Text>
  </View>
);

MainScreen.propTypes = {
  startRecording: PropTypes.func.isRequired,
  stopRecording: PropTypes.func.isRequired,
  isRecording: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    long: PropTypes.string,
    lat: PropTypes.string,
  }),
  status: PropTypes.string.isRequired,
  record: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
};

MainScreen.defaultProps = {
  location: { long: '', lat: '' },
};

export default MainScreen;
