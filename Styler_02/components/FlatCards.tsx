import React from 'react'

import {
    StyleSheet,
    Text,
    View
} from 'react-native';



export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Yellow</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },

    card: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardOne: {
        backgroundColor: "red"
    },

    cardTwo: {
        backgroundColor: "blue"
    },

    cardThree: {
        backgroundColor: "green"
    },

    cardFour: {
        backgroundColor: "yellow"
    }
})
