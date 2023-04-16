import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import { BasketDishItem } from '../../components/BasketDishItem'

const order = orders[1]
export const OrderDetailsScreen = () => {
  return (
    <View style={styles.page}>
      
      <View style={{marginHorizontal: 10}}>
      <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader />}
            data ={restaurants[0].dishes}
            renderItem={({item}) => <BasketDishItem basketDish={item}/> }
        />

      </View>
    </View>
  )
}

const OrderDetailsHeader = () => {
    return (
        <View>
            <Image source={{uri: order.Restaurant.image}} style={{ width: '100%', aspectRatio: 4/3}}/>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>{order.Restaurant.name}</Text>
        <Text>{order.status} - 2 days ago</Text>
        <Text>Your Orders</Text>
      </View>
        </View>
    )

    }
const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%'
    }
})
