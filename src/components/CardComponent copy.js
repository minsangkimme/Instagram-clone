/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardComponent extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail 
                            source={{uri:'https://blogpfthumb-phinf.pstatic.net/MjAxOTA0MDNfMTgx/MDAxNTU0MjU5MTkxNDM2.A8KiDeLBLpVWfhYqBNTHtwqPE1fty9y1hTDQ5hZ6VqQg.l3oIRDhah08p7jkDu3tIu7ijbodkhamNtm20nqukdj0g.PNG.ninewatt/ninewatt-c.png?type=s1'}}
                            style={{width: 40 ,height: 40}}
                            />
                        <Body>
                            <Text>9ninewatt</Text>
                            <Text note>Feb 25, 2020</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image 
                        source={{uri:'https://postfiles.pstatic.net/MjAxOTA0MjZfMjU5/MDAxNTU2MjU3NTAxNDU3.4vE-gjZ7Epd89cdi-dStnp6DXoJ5BV6qP3CFaQhUDR0g.S1FQ7vZQt4MsjoleI7BiNvZTpPSTOSuraDNxXJJI3h4g.PNG.ninewatt/%EB%82%B4%EA%B0%80_%EB%8F%84%EB%8C%80%EC%B2%B4_%EB%AD%98_%EB%A7%8C%EB%93%A0%EA%B1%B0%EC%A7%80.png?type=w966'}}
                        style={{ height: 250, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon  name="ios-chatbubbles" style={{ color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{ color: 'black'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20}}>
                    <Text>101 likes</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{ fontWeight: 'bold'}}>9ninewatt</Text>
                        기간별로 어느 시간대에 전력을 얼마나 사용했는지 표시가 되어 있는데요. 한눈에 봐도 차트가 해석되지 않나요? heat map 차트의 특징인것 같아요. 다른 차트들에 들어간 색보다 heatmap 차트의 색이 의미하는 바가 확실하네요.
                    </Text>
                </CardItem>
            </Card>
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