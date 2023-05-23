import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactCard() {
    return (
        <View>
            <Text style={styles.headingText}>ContactCard</Text>
            <ScrollView style={styles.container}>
                {
                    contacts.map((contact) => {
                        return (
                            <View key={contact.uid} style={styles.userCard}>
                                <Image
                                    source={{
                                        uri: contact.imageUrl
                                    }}
                                    style={styles.userImage}
                                />
                                <View style={styles.userBody}>
                                    <Text style={styles.userName}>{contact.name}</Text>
                                    <Text style={styles.userStatus}>{contact.status}</Text>
                                </View>
                            </View>
                        )
                    })
                }
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
        padding: 10,
    },

    userCard: {
        marginVertical: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 2,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
    },

    userBody: {
        marginHorizontal: 20,
    },

    userImage: {
        height: 50,
        width: 50,
        borderRadius: 50
    },

    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    userStatus: {
        color: 'black',
    }
})

const contacts = [
    {
        uid: 1,
        name: 'Soumyajit Pan',
        status: 'I Love India',
        imageUrl: 'https://images.pexels.com/photos/16177226/pexels-photo-16177226/free-photo-of-soumyajit-pan-profile-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 2,
        name: 'John Doe',
        status: 'I Love USA',
        imageUrl: 'https://images.pexels.com/photos/4586688/pexels-photo-4586688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 3,
        name: 'Jane Smith',
        status: 'I Love UK',
        imageUrl: 'https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 4,
        name: 'Bob Johnson',
        status: 'I Love Canada',
        imageUrl: 'https://images.pexels.com/photos/3952022/pexels-photo-3952022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 5,
        name: 'Alice Brown',
        status: 'I Love Australia',
        imageUrl: 'https://images.pexels.com/photos/3569597/pexels-photo-3569597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 6,
        name: 'Charlie Davis',
        status: 'I Love New Zealand',
        imageUrl: 'https://images.pexels.com/photos/5290404/pexels-photo-5290404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 7,
        name: 'Dave Evans',
        status: 'I Love South Africa',
        imageUrl: 'https://images.pexels.com/photos/4543639/pexels-photo-4543639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 8,
        name: 'Eve Foster',
        status: 'I Love Ireland',
        imageUrl: 'https://images.pexels.com/photos/5082634/pexels-photo-5082634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 9,
        name: 'Frank Green',
        status: 'I Love Scotland',
        imageUrl: 'https://images.pexels.com/photos/12479456/pexels-photo-12479456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 10,
        name: 'Grace Hall',
        status: 'I Love Wales',
        imageUrl: 'https://images.pexels.com/photos/11645014/pexels-photo-11645014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        uid: 11,
        name: 'Henry Jones',
        status: 'I Love France',
        imageUrl: 'https://images.pexels.com/photos/7322193/pexels-photo-7322193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]
