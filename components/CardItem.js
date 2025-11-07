import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';



// export par défaut

export default function CardItem({ title, description, image, url }) {

    return (

        <View style={styles.card}>

        <Image source={{ uri: image }} style={styles.cover} />

        <View style={styles.body}>

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.desc}>{description}</Text>

            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>

                <Text style={styles.buttonText}>Visiter le site officiel</Text>

            </TouchableOpacity>

        </View>

        </View>

    );

}



const styles = StyleSheet.create({

    card: {

        width: '100%',

        backgroundColor: '#fff',

        borderRadius: 12,

        overflow: 'hidden',

        marginBottom: 16,

        elevation: 3, // ombre Android

    },

    cover: { width: '100%', height: 150 },

    body: { padding: 12 },

    title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },

    desc: { color: '#555' },

    button: {

        backgroundColor: '#007bff',

        paddingVertical: 8,

        paddingHorizontal: 16,

        borderRadius: 6,

        marginTop: 10,

        alignItems: 'center'

    },

    buttonText: {

        color: '#fff',

        fontSize: 14,

        fontWeight: 'bold'

    }

});