import { Dimensions, StyleSheet } from 'react-native';

const phoneHeight = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  innerCardStyle: {

  },
  dropdownStyle: {
    width: phoneWidth / 1.5,
  },
  dropdownTextStyle: {
    fontSize: 18,
  },
});
