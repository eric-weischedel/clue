import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements'

import MainStack from './MainStack.js';
import SecondaryScreen from '../screens/SecondaryScreen.js';
import NotesScreen from '../screens/NotesScreen';
import SuggestionScreen from '../screens/SuggestionScreen.js';
import SideMenu from '../components/SideMenu.js';

const DrawerNavigator = createDrawerNavigator(
    {
      Main: {
        screen: MainStack
      },
      Notes: {
        screen: NotesScreen
      },
      Suggestion: {
        screen: SuggestionScreen
      },
      Secondary: {
        screen: SecondaryScreen
      }
    },
    {
      drawerBackgroundColor: '#fff',
      contentComponent: SideMenu,
      drawerType: 'slide',
      drawerPosition: 'right',
      overlayColor: 'none',
      drawerLockMode: 'locked-closed'
    }
  );
  
  export default createAppContainer(DrawerNavigator);