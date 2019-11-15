import { StyleSheet, Dimensions } from 'react-native';


const phoneHeight = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  dropdownButtonStyle: {
  },
  cardStyle: {
    height: phoneHeight / 2,
  },

  mapView: {
    width: phoneWidth,
    height: phoneHeight / 2,
  },
});
