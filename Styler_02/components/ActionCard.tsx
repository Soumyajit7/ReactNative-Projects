import React from 'react'

import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

export default function ActionCard() {

    function openWebsite(webSiteLink: string) {
        Linking.openURL(webSiteLink);
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.cardElivated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Switzerland in 2023?
                    </Text>
                    <Image
                        source={{
                            uri: 'https://wallpaperaccess.com/full/247181.jpg',
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3} style={styles.bodyText}>
                            A landlocked country situated at the confluence of Western, Central, and Southern Europe. It is a federal republic composed of 26 cantons, with federal authorities based in Bern.
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            onPress={() => openWebsite(webLink)}>
                            <Text style={styles.socialLink}>Read More</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => openWebsite(webLink)}>
                            <Text style={styles.socialLink}>Follow Me</Text>
                        </TouchableOpacity>
                    </View>
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

    card: {
        borderRadius: 5,
        margin: 10,
        marginVertical: 10,
        marginHorizontal: 15,
    },

    cardElivated: {
        backgroundColor: 'white'
    },

    headingContainer: {
        padding: 10
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },

    cardImage: {
        height: 200,
        borderRadius: 5,
    },

    bodyContainer: {
        flex: 1,
        flexGrow: 1,
        marginTop: 10
    },

    bodyText: {
        color: 'black',
    },

    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
    },

    socialLink: {
        color: 'black',
        fontSize: 15,
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#33ccff',
    }
})

const webLink = 'https://www.getyourguide.com/-l169023/?cmp=bing&cmp=bing&campaign_id=710114802&adgroup_id=1245747322232275&target_id=kwd-77859578583150&match_type=e&ad_id=77859371633457&msclkid=21aaa2287d291ba98dc8c644d2a250cb&loc_physical_ms=155030&feed_item_id=&keyword=switzerland&partner_id=CD951&utm_medium=paid_search&utm_source=bing&utm_campaign=dc%3D41%3Ach%7Clc%3D169023%3Aswitzerland%7Cct%3Dcore%7Cln%3D29%3Aen%7Ctc%3Dall&utm_term=switzerland&gclsrc=3p.ds'