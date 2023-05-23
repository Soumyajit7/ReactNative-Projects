import React from 'react'

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'


export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCard</Text>
            <ScrollView horizontal>
                <View style={[styles.card, styles.cardElivated]}>
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/1093978.jpg'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Switzerland</Text>
                        <Text style={styles.cardLabel}>The Beauty of Nature, created by the God</Text>
                        <Text style={styles.cardDesc}>Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east.</Text>
                        <Text style={styles.footer}>Footer</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/1455073.jpg'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Switzerland</Text>
                        <Text style={styles.cardLabel}>The Beauty of Nature, created by the God</Text>
                        <Text style={styles.cardDesc}>Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east.</Text>
                        <Text style={styles.footer}>Footer</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElivated]}>
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/4120751.jpg'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Switzerland</Text>
                        <Text style={styles.cardLabel}>The Beauty of Nature, created by the God</Text>
                        <Text style={styles.cardDesc}>Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe. It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east.</Text>
                        <Text style={styles.footer}>Footer</Text>
                    </View>
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
        borderRadius: 5,
        margin: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        width: 360
    },

    cardElivated: {
        backgroundColor: 'white'
    },

    cardImage: {
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        padding: 10,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },

    cardLabel: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 3,
    },

    cardDesc: {
        color: 'black',
        marginBottom: 3,
    },

    footer: {
        color: 'black',
    }

})