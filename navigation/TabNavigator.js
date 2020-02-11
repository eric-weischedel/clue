import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

import SuspectsTab from '../components/SuspectsTab.js';
import WeaponsTab from '../components/WeaponsTab.js';
import RoomsTab from '../components/RoomsTab.js';
import Colors from '../styles/Colors.js';

const TabNavigator = createMaterialTopTabNavigator({
    Suspect: { 
        screen: SuspectsTab,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon
              name='user'
              type='feather'
              color={tintColor}
              size={18}
            />
          )
        }
    },
    Weapon: { 
        screen: WeaponsTab,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon
              name='scissors'
              type='feather'
              color={tintColor}
              size={18}
            />
          )
        }
    },
    Room: { 
        screen: RoomsTab,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Icon
              name='map-pin'
              type='feather'
              color={tintColor}
              size={18}
            />
          )
        }
    }
  }, 
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: '#bbbbbb',
      activeBackgroundColor: 'transparent',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: Colors.primary,
        height: 2,
        position: 'absolute',
        top: 0
      },
      showIcon: true,
      showLabel: true
    }
  });

export default createAppContainer(TabNavigator);