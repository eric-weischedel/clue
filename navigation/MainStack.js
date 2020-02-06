import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../screens/MainScreen.js';
import NotesScreen from '../screens/NotesScreen.js';
import SuggestionScreen from '../screens/SuggestionScreen.js';
import HistoryScreen from '../screens/HistoryScreen.js';
import SaveScreen from '../screens/SaveScreen.js';
import NewGameScreen from '../screens/NewGameScreen.js';

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
  },
  History: {
    screen: HistoryScreen
  },
  Save: {
    screen: SaveScreen
  },
  NewGame: {
    screen: NewGameScreen,
    navigationOptions: {
      title: 'New Game'
    }
  }
};

const MainStack = createStackNavigator(screens, {
  headerMode: 'screen'
});

export default createAppContainer(MainStack);