import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { FAB } from 'react-native-paper';
import { Icon } from 'react-native-elements'

import TabNavigator from '../navigation/TabNavigator.js';
import Colors from '../styles/Colors.js';
import { getCards } from '../algorithm/getCards.js';

export default function MainScreen({ navigation }) {

  const cards = getCards();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={ styles.headerText }>Probabilities</Text>
          <TouchableOpacity style={ styles.menuButton } onPress={() => navigation.openDrawer()}>
            <Icon name='menu' type='feather' size={24} color={Colors.primary}/>
          </TouchableOpacity>
        </View>
        <View style={styles.subheaderContainer}>
          <Text style={styles.subheader}>NAME</Text>
          <Text style={[styles.subheader, { marginRight: 55 }]}>CHANCE</Text>
        </View>
      </View>
      {/* Tabs */}
      <TabNavigator screenProps={ cards } />
      {/* FAB */}
      <FAB 
        style={styles.fab} 
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
    bottom: 100,
    backgroundColor: Colors.primary
  },
  headerText: {
    fontSize: 24,
    marginLeft: 20,
    color: '#777',
    fontFamily: 'raleway-bold',
  },
  menuButton: {
    padding: 20,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 5,
    paddingBottom: 12
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
  },
  subheaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subheader: {
    marginLeft: 20,
    fontFamily: 'raleway-regular',
    fontSize: 12,
    marginBottom: 8
  }
});