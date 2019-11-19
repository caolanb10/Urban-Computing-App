import { StyleSheet, Dimensions } from 'react-native';


const phoneHeight = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  dropdownButtonStyle: {
  },
  stationList: {
    height: phoneHeight / 2,
    padding: 10,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mapContainer: {
    height: phoneHeight / 2,
  },
  mapView: {
    width: phoneWidth,
    height: phoneHeight / 2,
  },
});
