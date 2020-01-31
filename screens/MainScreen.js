import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { FAB } from 'react-native-paper';
import { Icon } from 'react-native-elements'

import TabNavigator from '../navigation/TabNavigator.js';
import Colors from '../styles/Colors.js';
import { getCards } from '../algorithm/getCards.js';

export default function MainScreen({ navigation }) {

  const FABDisabled = false;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={ styles.headerText }>Clue Me In</Text>
        <TouchableOpacity style={ styles.menuButton } onPress={() => navigation.openDrawer()}>
          <Icon name='navicon' type='evilicon' size={28} color={Colors.primary}/>
        </TouchableOpacity>
      </View>
      {/* Tabs */}
      <TabNavigator screenProps={ getCards() } />
      {/* FAB */}
      <FAB 
        disabled={ FABDisabled } 
        style={ [styles.fab, FABDisabled ? {backgroundColor: 'gray'} : {backgroundColor: Colors.primary}] } 
        color='white'
        icon='lightbulb-on' 
        onPress={() => navigation.push('Suggestion')} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 70,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
    fontFamily: 'poppins-medium',
  },
  menuButton: {
    padding: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderStyle: 'solid'
  }
});