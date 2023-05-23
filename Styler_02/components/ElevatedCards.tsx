import React from 'react'

import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'


export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Text style={[styles.darkText]}>Tap</Text>
                </View>
            </ScrollView>
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

    cardElivated: {
        backgroundColor: "white",
        elevation: 2,
    },

    darkText: {
        color: "black"
    }

})