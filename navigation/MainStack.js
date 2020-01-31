import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../screens/MainScreen.js';
import NotesScreen from '../screens/NotesScreen.js';
import SuggestionScreen from '../screens/SuggestionScreen.js';

const screens = {
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: () => null
    }
  },
  Notes: {
    screen: NotesScreen
  },
  Suggestion: {
    screen: SuggestionScreen
  }
};

const MainStack = createStackNavigator(screens, {
  headerMode: 'screen'
});

export default createAppContainer(MainStack);