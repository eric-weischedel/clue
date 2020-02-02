import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar, SafeAreaView } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator.js';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'robotomono-light': require('./assets/fonts/RobotoMono-Light.ttf'),
  'robotomono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
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