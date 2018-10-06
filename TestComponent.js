import React, { Component } from 'react';

import { View,Text } from 'react-native';
import {Icon, Header, Left, Container, Content, Right} from 'native-base'

// import styles from './styles';

export default class TestComponent extends Component {
  render() {
    return (
        <Container>
            <Header style={{backgroundColor: '#3a455c', height: 90,}}>
                <Left style={{flexDirection: 'row'}}>
                    <Icon name='ios-menu' style={{color: '#fff'}} onPress={() => {
                        this.props.navigation.openDrawer();
                    }}/>
                </Left>
                <Right/>
            </Header>
        </Container>


    );
  }
}