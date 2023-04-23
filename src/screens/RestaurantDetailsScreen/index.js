import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
// import { Ionicons } from '@expo/vector-icons';
import restaurants from "../../../assets/data/restaurants.json";
import { DishListItem } from '../../components/DishListItem';
import { RestaurantHeader } from '../../components/RestaurantHeader';
import { useRoute } from '@react-navigation/native';


const restaurant = restaurants[0]

export function RestaurantDetailsScreen () {
  const route = useRoute()
  const id = route.params.id
  console.log(id)
  return (
    <View style={styles.page}>
      {/* <View styles={styles.imgContainer}>
        <Image source={{uri: restaurant.image}} style={styles.image}/>
        <View style={styles.icon}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </View>

      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>{`$${restaurant.deliveryFee} ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}</Text>
      </View> */}
      {/* <DishListItem dish={restaurant.dishes[4]}/> */}
      <FlatList
      ListHeaderComponent={() => <RestaurantHeader restaurant ={restaurant}/>}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item}/>
       } 
      />
    </View> 
  )
}

const styles = StyleSheet.create({
  page:{
    flex: 1,
  },
  // container: {
  //   margin: 10,
    
  // },
  // imgContainer: {
  //   position: 'relative',
  // },
  // image: {
  //   width: '100%',
  //   aspectRatio: 2,
  //   resizeMode: 'cover'
  // },
  // title: {
  //   fontSize: 35,
  //   fontWeight: 600,
  // },
  // subtitle: {
  //   fontSize: 15,
  //   color: 'grey'
  // }, 
  // icon: {
  //   top:30,
  //   left: 20,
  //   position: 'absolute',
  //   width:30,
  //   height: 30,
  //   borderRadius: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'white',
  // }
})

// export default RestaurantDetailsScreen