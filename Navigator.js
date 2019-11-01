import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './screens/MainScreen';
import Home from './screens/Home';
import Station from './screens/Station';

const navigator = createAppContainer(
  createStackNavigator({
    Main: { screen: Main },
    Home: { screen: Home },
    Station: { screen: Station },
  },
  {
    initialRouteName: 'Home',
  }),
);

export default navigator;
