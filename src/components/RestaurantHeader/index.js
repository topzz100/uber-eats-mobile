import { View, Text, StyleSheet, Image, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


//const restaurant = restaurants[0]

export function RestaurantHeader ({restaurant}) {
  return (
    <View >
      <View styles={styles.imgContainer}>
        <Image source={{uri: restaurant.image}} style={styles.image}/>
        <View style={styles.icon}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </View>

      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>{`$${restaurant.deliveryFee} ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}</Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
      {/* <DishListItem dish={restaurant.dishes[4]}/> */}
      
    </View> 
  )
}

const styles = StyleSheet.create({
 
  container: {
    margin: 10,
    
  },
  imgContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 2,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 35,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 15, 
    color: 'grey'
  }, 
  menuTitle: {
    fontSize: 18,
    marginTop: 20,
    letterSpacing: 0.7,
  },
  icon: {
    top:30,
    left: 20,
    position: 'absolute',
    width:30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
})

// export default RestaurantDetailsScreen