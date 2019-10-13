import { Dimensions, StyleSheet } from 'react-native';

const fullHeight = Dimensions.get('window').height;
const fullWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  page: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: fullHeight,
    width: fullWidth,
  },
  message: {
    paddingTop: 50,
    height: 200,
    textAlign: 'center',
    color: 'red',
    fontSize: 30,
  },
  title: {
    textAlign: 'center',
    height: 150,
  },
  button: {
    height: 50,
    width: 100,
  },
  data: {

  },
  status: {

  },
});
