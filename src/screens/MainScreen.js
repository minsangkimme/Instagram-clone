/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content, Title, Header, Body, Left, Right, Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';

const Tab = createMaterialTopTabNavigator();

export default class MainScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'white', height: 80}}>
                <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
                    <Left>
                        <TouchableOpacity>
                            <Icon name="ios-camera" style={{paddingLeft: 10, paddingTop: 10}} />
                        </TouchableOpacity>
                    </Left>
                    <Body >
                        <Title style={styles.headerTitle}>Instagram</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Icon name="ios-send" style={{paddingRight: 10, paddingTop: 10}}/>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Tab.Navigator tabBarPosition={'bottom'} tabBarOptions={{showIcon: true, showLabel: false, upperCaseLabel: false, inactiveTintColor: '#d1cece', activeTintColor: '#000', iconStyle: { height: 30 }}}>
                    <Tab.Screen name="HomeTab" component={HomeTab} options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-home" style={{color: color}} />
                        )
                    }} />
                    <Tab.Screen name="SearchTab" component={SearchTab} options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-search" style={{ color: color}} />
                        )
                    }}/>
                    <Tab.Screen name="AddMediaTab" component={AddMediaTab} options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-add-circle" style={{ color: color}} />
                        )
                    }}/>
                    <Tab.Screen name="LikesTab" component={LikesTab} options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-heart" style={{ color: color}} />
                        )
                    }}/>
                    <Tab.Screen name="ProfileTab" component={ProfileTab} options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-person" style={{ color: color}} />
                        )
                    }} />
                </Tab.Navigator>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        width: 265,
        paddingTop: 10,
    }
});