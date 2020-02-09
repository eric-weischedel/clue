import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../screens/MainScreen.js';
import NotesScreen from '../screens/NotesScreen.js';
import SuggestionScreen from '../screens/SuggestionScreen.js';
import HistoryScreen from '../screens/HistoryScreen.js';
import FileExplorer from '../screens/FileExplorer.js';
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
    screen: SuggestionScreen,
    navigationOptions: {
      title: 'New Suggestion'
    }
  },
  History: {
    screen: HistoryScreen
  },
  FileExplorer: {
    screen: FileExplorer,
    navigationOptions: {
      title: 'File Explorer'
    }
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