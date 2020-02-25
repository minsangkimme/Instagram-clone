/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ProfileTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> ProfileTab </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});