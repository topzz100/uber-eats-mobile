import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const OrderListItem = ({order}) => {
  const navigation = useNavigation()
  return (
    <Pressable style={styles.row} onPress={ () => {
      navigation.navigate("Order", {id: order.id})
    }}>
        <Image source={{uri: order.Restaurant.image}} style={{width: 75, height: 75}}/>
      <View style={styles.right}>
        <Text style={{fontWeight: '600', fontSize: 16}}>{order.Restaurant.name}</Text>
        <Text style={{marginVertical: 5, color: 'grey'}}>3 items - $14.44</Text>
        <Text style={{color: 'grey'}}>2 days ago - {order.status}</Text>
      </View>
    </Pressable>
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