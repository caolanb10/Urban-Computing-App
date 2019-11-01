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
  initiateSubscription,
  stopSubscription,
  lat,
  long,
  navigation: { navigate },
}) => (
  <View style={styles.page}>
    <Text style={styles.message}>
        GPS Location Tracker
    </Text>
    <Text style={styles.title}>
      Welcome Back
    </Text>
    <View style={styles.buttonContainer}>
      <Button
        raised
        title="View CSV Data"
        onPress={() => navigate('Data')}
        buttonStyle={styles.button}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        raised
        type={isRecording ? 'outline' : 'solid'}
        title={isRecording ? 'Stop' : 'Start'}
        onPress={isRecording ? stopSubscription : initiateSubscription}
        buttonStyle={styles.button}
      />
    </View>
    <Text style={styles.data}>
      {`Latitude: ${long} Longitude: ${lat}`}
    </Text>
    <Text style={styles.status}>
      {status}
    </Text>
  </View>
);

MainScreen.propTypes = {
  isRecording: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  initiateSubscription: PropTypes.func.isRequired,
  stopSubscription: PropTypes.func.isRequired,
  lat: PropTypes.string,
  long: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

MainScreen.defaultProps = {
  lat: '',
  long: '',
};

export default MainScreen;
