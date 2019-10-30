import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './screens/MainScreen';
import Home from './screens/Home';

const navigator = createAppContainer(
  createStackNavigator({
    Main: { screen: Main },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
  }),
);

export default navigator;
