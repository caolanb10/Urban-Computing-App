import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './screens/MainScreen';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
