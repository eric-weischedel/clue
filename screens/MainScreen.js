import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { FAB } from 'react-native-paper';
import { Icon } from 'react-native-elements'

import TabNavigator from '../navigation/TabNavigator.js';
import Colors from '../styles/Colors.js';
import Loading from '../components/Loading.js';
import { getCardsAsync } from '../algorithm/getCards.js';

export default function MainScreen({ navigation }) {

  const [cards, setCards] = useState(null);

  async function loadCardsAsync() {
    let cards = await getCardsAsync();
    setCards(cards);
  }

  if (cards) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={ styles.headerText }>Probabilities</Text>
          <TouchableOpacity style={ styles.menuButton } onPress={() => navigation.openDrawer()}>
            <Icon name='menu' type='feather' size={26} color={Colors.primary}/>
          </TouchableOpacity>
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
  } else {
    loadCardsAsync();
    return (
      <Loading />
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 70,
    backgroundColor: Colors.primary
  },
  headerText: {
    fontSize: 24,
    marginLeft: 20,
    color: '#000',
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
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
    marginTop: 5,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'solid',
  }
});