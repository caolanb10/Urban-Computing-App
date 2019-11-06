import { StyleSheet, Dimensions } from 'react-native';


const phoneHeight = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  dropdownButtonStyle: {
  },
  dropdownStyle: {
    width: phoneWidth / 1.5,
  },
  dropdownTextStyle: {
    fontSize: 18,
  },
  cardStyle: {
    height: phoneHeight / 2,
  },
  innerCardStyle: {

  },
  mapView: {
    width: phoneWidth,
    height: phoneHeight / 2,
  },
});
