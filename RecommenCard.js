import React, {Component} from 'react';

import {View, Image,Text} from 'react-native';
import {CardItem, Left, Right, Body} from 'native-base'
import StarRating from 'react-native-star-rating'

// import styles from './styles';

export default class RecommenCardItem extends Component {
    render() {
        const {
            itemName,
            itemCreator,
            itemPrice,
            savings,
            imageUri, rating
        } = this.props;
        return (
            <CardItem>
                <View style={{paddingHorizontal: 10}}>
                    <Image style={{height: 90, width: 60}} source={imageUri}/>
                </View>
                <Right style={{ flex: 1, alignItems: 'flex-start', height:90,}}>
                    <Text style={{fontWeight: '400'}}>{itemName}</Text>
                    <Text style={{color:'grey', fontSize: 10}}>{itemCreator}</Text>
                    <Text style={{color:'red'}}>{itemPrice}</Text>
                    <Text>
                        <Text style={{color:'grey', fontSize: 10}}>You save </Text>
                        {savings}$</Text>
                <StarRating maxStars={5}
                            disabled={true}
                            rating={rating}
                            starSize={12}
                            fullStarColor='orange'
                            emptyStarColor='orange'
                 />
                </Right>
            </CardItem>
        );
    }
}