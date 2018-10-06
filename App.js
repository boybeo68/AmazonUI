import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems,} from 'react-navigation'
import {Header, Left, Right, Body,Container, Thumbnail } from 'native-base'
import HomeScreen from './HomScreen'
import TestComponent from './TestComponent'

export default class App extends React.Component {
  render() {
    return (
        <AppDrawer/>
    );
  }
}
const cusTomDrawer = (props)=>(
  <Container>
      <Header transparent style={{height:150, backgroundColor:'#3a455c'}}>
          <View style={[styles.container,{flexDirection: 'column'}]}>
            <Thumbnail large source={{uri:'http://ttol.vietnamnetjsc.vn//2018/01/10/10/26/ngoc-trinh-mong-muon-mot-tinh-yeu-khong-xa-hoa-nhung-chan-thanh_1.jpg'}} />
              <Text style={{color:'#fff'}}>
                  Ngọc Trinh
              </Text>
          </View>
      </Header>

      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>

  </Container>
);

const AppDrawer = new createDrawerNavigator({
    HomeScreen:{
      screen: HomeScreen
    },
    TestComponent:{
        screen: TestComponent
    }
},{
    contentComponent:cusTomDrawer
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
