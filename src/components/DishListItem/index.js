import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export const DishListItem = ({dish}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.desc} numberOfLines={2}>{dish.description}</Text>
        <Text style={styles.price}>${dish.price}</Text>

      </View>
      { dish?.image && <Image style={styles.image} source={{uri: dish?.image}}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name:{
    fontWeight: '500',
    fontSize: 17,
    letterSpacing: 0.5
  },
  desc: {
    color: 'grey',
  },
  price: {
    fontSize: 16,
  },
  image: {
    aspectRatio: 1,
    height: 100,
    marginStart: 10,
  }
})

