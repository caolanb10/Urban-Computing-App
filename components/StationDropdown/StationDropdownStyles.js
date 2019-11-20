import { Dimensions, StyleSheet } from 'react-native';

const phoneHeight = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  pickerStyle: {
    width: phoneWidth / 1.5,
    height: 20,
  },
  dropdownStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  dropdownTextStyle: {
    fontSize: 18,
  },
  dividerStyle: {
    height: 0,
  },
});
