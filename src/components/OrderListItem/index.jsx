import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export const OrderListItem = ({order}) => {
  return (
    <View style={styles.row}>
        <Image source={{uri: order.Restaurant.image}} style={{width: 75, height: 75}}/>
      <View style={styles.right}>
        <Text style={{fontWeight: '600', fontSize: 16}}>{order.Restaurant.name}</Text>
        <Text style={{marginVertical: 5, color: 'grey'}}>3 items - $14.44</Text>
        <Text style={{color: 'grey'}}>2 days ago - {order.status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center'
    },
    right: {
      marginLeft: 10,

    }
})