import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icon, Header, Container, Content, Left, Right, Body, Button, Card, Item, Input, CardItem} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import RecommenCardItem from './RecommenCard'
// import styles from './styles';

export default class HomScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#3a455c', height: 90,}}>
                    <Left style={{flexDirection: 'row'}}>
                        <Icon name='ios-menu' style={{color: '#fff'}} onPress={() => {
                            this.props.navigation.openDrawer();
                        }}/>
                        <FAIcon name='amazon' style={{fontSize: 35, color: '#fff', marginLeft: 10}}/>
                    </Left>
                    <Right>
                        <Icon name='ios-cart' style={{color: '#fff'}}/>
                    </Right>
                </Header>
                <View style={{
                    position: 'absolute',
                    left: 0,
                    top: 90,
                    right: 0,
                    backgroundColor: '#3a455c',
                    height: 70,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'column',
                            backgroundColor: '#e7e7eb',
                            padding: 10,
                            borderRadius: 5,
                            marginHorizontal: 10,
                        }}>
                            <Text style={{color: 'black'}}>
                                Shop by
                            </Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                                Category
                            </Text>
                        </View>

                    </TouchableOpacity>
                    <Item style={{backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 5, marginLeft: 15}}>
                        <Icon name='search' style={{fontSize: 20}}/>
                        <Input placeholder='Search'/>
                    </Item>
                </View>
                <Content style={{backgroundColor:'#d5d5d6',marginTop: 70}}>
                    <View style={{
                        backgroundColor: '#fff',
                        height: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        justifyContent: 'space-between'
                    }}>
                        <Text>
                            Hello, Nguyen Thac Tung
                        </Text>
                        <Text>
                            Your Account
                            <Icon name='ios-arrow-forward' style={{fontSize: 18, padding: 25}}/>
                        </Text>
                    </View>
                    <Swiper autoplay={true} style={{height: 100}}>
                        <View style={{flex: 1}}>
                            <Image style={{flex: 1, height: undefined, width: undefined, resizeMode: 'contain'}}
                                   source={require('./assets/swiper_2.jpg')}/>
                        </View>
                        <View style={{flex: 1}}>
                            <Image style={{flex: 1, height: undefined, width: undefined, resizeMode: 'contain'}}
                                   source={require('./assets/swiper_3.jpg')}/>
                        </View>
                        <View style={{flex: 1}}>
                            <Image style={{flex: 1, height: undefined, width: undefined, resizeMode: 'contain'}}
                                   source={require('./assets/swiper_2.jpg')}/>
                        </View>
                    </Swiper>
                    <Card style={{ marginLeft: 5, marginRight: 5, borderRadius:5,}}>
                        <CardItem header style={{borderWidth: 1, borderColor:'#dee0e2'}}>
                            <Text style={{fontWeight: 'bold'}}>Your Recommendations</Text>
                        </CardItem>
                        <RecommenCardItem itemName="You can heal your life"
                                      itemCreator="Louise Hay"
                                      itemPrice="$10"
                                      savings="2.5"
                                      imageUri={require("./assets/recommended_1.jpg")}
                                      rating={5}/>
                        <RecommenCardItem   itemName="Uncharted 4"
                                            itemCreator="Sony"
                                            itemPrice="$19.99"
                                            savings="17"
                                            imageUri={require("./assets/recommended_2.jpg")}
                                            rating={5}/>
                        <RecommenCardItem   itemName="Ea UFC 3"
                                            itemCreator="Ea Sports"
                                            itemPrice="$44"
                                            savings="6"
                                            imageUri={require("./assets/recommended_3.jpg")}
                                            rating={3}/>
                        <RecommenCardItem itemName="You can heal your life"
                                          itemCreator="Louise Hay"
                                          itemPrice="$10"
                                          savings="2.5"
                                          imageUri={require("./assets/recommended_1.jpg")}
                                          rating={5}/>
                        <RecommenCardItem   itemName="Uncharted 4"
                                            itemCreator="Sony"
                                            itemPrice="$19.99"
                                            savings="17"
                                            imageUri={require("./assets/recommended_2.jpg")}
                                            rating={5}/>
                        <RecommenCardItem   itemName="Ea UFC 3"
                                            itemCreator="Ea Sports"
                                            itemPrice="$44"
                                            savings="6"
                                            imageUri={require("./assets/recommended_3.jpg")}
                                            rating={3}/>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});
