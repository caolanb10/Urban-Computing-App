import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './screens/MainScreen';
import Info from './screens/Info';
import Data from './screens/Data';

const navigator = createStackNavigator({
  Main: { screen: Main },
  Data: { screen: Data },
  Info: { screen: Info },
},
{
  initialRouteName: 'Main',
});

export default navigator;
