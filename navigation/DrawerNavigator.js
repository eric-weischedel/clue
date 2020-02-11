import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainStack from './MainStack.js';
import SideMenu from '../components/SideMenu.js';

const DrawerNavigator = createDrawerNavigator(
    {
      Main: {
        screen: MainStack
      }
    },
    {
      drawerBackgroundColor: '#fff',
      contentComponent: SideMenu,
      drawerType: 'slide',
      drawerPosition: 'right',
      drawerLockMode: 'locked-closed',
    }
  );
  
  export default createAppContainer(DrawerNavigator);