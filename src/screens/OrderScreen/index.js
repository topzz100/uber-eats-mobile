import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import { OrderListItem } from '../../components/OrderListItem'
export const OrderScreen = () => {
  return (
    <View style={styles.page}>
       
        <Text style={{fontSize: 30, marginBottom: 10, fontWeight: 'bold', textAlign: 'center'}}>Your Orders</Text>
     <FlatList data={orders}
        renderItem={({item}) => <OrderListItem order={item}/>}
     />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingTop: 30
    }
})