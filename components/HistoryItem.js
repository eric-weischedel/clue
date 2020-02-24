import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default function HistoryItem(props) {

    // PROPS
    // =============================================================
    // key          e.g. '3'
    // player       e.g. 'Bryan'
    // cards        e.g. ['Col. Mustard', 'Candlestick', 'Ball Room]
    // revealer     e.g. 'Dad' or 'Nobody'

    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    if (open) {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={toggleOpen}>
                <View style={styles.summaryContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.index}>{props.index}</Text>
                        <Text style={styles.summaryText}>
                            <Text style={{fontWeight: 'bold'}}>{props.player}</Text> made a suggestion.
                        </Text>
                    </View>
                    <Icon name='chevron-up' type='evilicon' size={24} color='#333'/>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.summaryText}>{props.cards[0]}, {props.cards[1]}, {props.cards[2]}</Text>
                    <Text style={styles.summaryText}>
                        <Text style={{fontWeight: 'bold'}}>{props.revealer}</Text> revealed a card.
                    </Text>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={toggleOpen}>
                <View style={styles.summaryContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.index}>{props.index}</Text>
                        <Text style={styles.summaryText}>
                            <Text style={{fontWeight: 'bold'}}>{props.player}</Text> made a suggestion.
                        </Text>
                    </View>
                    <Icon name='chevron-down' type='evilicon' size={24} color='#333'/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 30,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    summaryContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    index: {
        fontFamily: 'robotomono-light',
        textAlign: 'right',
        width: 30,
        marginRight: 20
    },
    summaryText: {
        fontSize: 14,
    },
    detailsContainer: {
        paddingBottom: 20,
        marginLeft: 50
    }
});