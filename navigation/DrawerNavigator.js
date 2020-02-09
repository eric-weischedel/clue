import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainStack from './MainStack.js';
import SecondaryScreen from '../screens/SecondaryScreen.js';
import NotesScreen from '../screens/NotesScreen';
import SuggestionScreen from '../screens/SuggestionScreen.js';
import HistoryScreen from '../screens/HistoryScreen.js';
import SideMenu from '../components/SideMenu.js';
import FileExplorer from '../screens/FileExplorer.js';
import NewGameScreen from '../screens/NewGameScreen.js';

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
      History: {
        screen: HistoryScreen
      },
      FileExplorer: {
        screen: FileExplorer
      },
      NewGame: {
        screen: NewGameScreen
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
      drawerLockMode: 'locked-closed',
    }
  );
  
  export default createAppContainer(DrawerNavigator);