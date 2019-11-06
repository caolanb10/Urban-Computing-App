import { Dimensions, StyleSheet } from 'react-native';

const phoneHeight = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  mapView: {
    width: phoneWidth,
    height: phoneHeight / 2,
  },
});
