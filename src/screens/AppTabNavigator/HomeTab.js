/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../../components/CardComponent';

export default class HomeTab extends Component {
    state = {
        feeds: []
    }

    componentDidMount() {
        this.fetchFeeds().then(feeds => this.setState({feeds}));
    }

    fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
                "database_api",
                "get_discussions_by_created",
                [{ tag: "kr", limit: 20}]
            ]
        };
        return fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    {/* <CardComponent /> */}
                    {this.state.feeds.map(feed => <CardComponent data={feed} />)}
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});