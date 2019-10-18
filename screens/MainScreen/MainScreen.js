import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Button, Divider, Header, Icon, Text,
} from 'react-native-elements';
import styles from './MainStyles';

const MainScreen = (props) => {
  const {
    isRecording,
    status,
    record,
    finish,
    location,
    navigation,
  } = props;

  return (
    <View style={styles.page}>
      <Text style={styles.message}>
        GPS Location Tracker
      </Text>
      <Text style={styles.title}>
      Welcome Back
      </Text>
      <Button
        raised
        title="View CSV Data"
        onPress={navigation.navigate('Data')}
      />
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
};

MainScreen.propTypes = {
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
