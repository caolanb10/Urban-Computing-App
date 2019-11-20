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
  overlayStyle: {
    width: phoneWidth / 1.3,
    height: phoneHeight / 3,
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTextStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
