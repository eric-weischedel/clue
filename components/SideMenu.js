import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements'

export default function SideMenu({ navigation }) {
    return (
        <ScrollView style={{borderLeftColor: '#000', borderLeftWidth: 1, borderStyle: 'solid'}}>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }} >
                <View style={styles.menuHeaderContainer}>
                    <Text style={styles.menuHeaderText}>Action Menu</Text>
                </View>

                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notes')}>
                    <Icon
                        style={styles.navIcon}
                        name='edit'
                        type='feather'
                        color='#000'
                        size={24}
                    />
                    <Text style={styles.navText}>Notes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Icon
                        style={styles.navIcon}
                        name='clock'
                        type='feather'
                        color='#000'
                        size={24}
                    />
                    <Text style={styles.navText}>History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Icon
                        style={styles.navIcon}
                        name='plus-square'
                        type='feather'
                        color='#000'
                        size={24}
                    />
                    <Text style={styles.navText}>New Game</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    menuHeaderContainer: {
        backgroundColor: '#fff'
    },
    menuHeaderText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 20,
        marginVertical: 20,
    },
    navItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: '#fff',
        paddingVertical: 15,
    },
    navIcon: {
        backgroundColor: '#fff'
    },
    navText: {
        marginLeft: 15,
        fontSize: 16,
        color: '#000',
    }
});