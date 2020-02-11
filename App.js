import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar, SafeAreaView } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator.js';

const getFonts = () => Font.loadAsync({
  'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
  'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
  'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
  'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
  'robotomono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
  'robotomono-light': require('./assets/fonts/RobotoMono-Light.ttf'),
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: 'gray'}}>
        <DrawerNavigator />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}