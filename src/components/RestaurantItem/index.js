// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'

// const RestaurantItem =() => {
//   return(
//     <View style={styles.restContainer}>
//         <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"}} style={styles.image}/>  
//         <Text style={styles.title}>Cheese Tequeños</Text>
//         <Text style={styles.subtitle}>$ 1.99 15-30 minutes</Text>
//       </View>
//   )
// }

// const styles = StyleSheet.create({
//   restContainer: { 
//     width: '100%',
//     marginVertical: 10,
//   },
//   image: {
//     width: '100%',
//     aspectRatio: 4/3,
//     marginBottom: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 5,
//   },
//   subtitle: {
//     color: 'grey',

//   }
// })

// export default RestaurantItem
import { Image, StyleSheet, Text, View } from 'react-native';

 const RestaurantItem =({restaurant}) => {
  // return(
  //   <View style={styles.restContainer}>
  //       <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"}} style={styles.image}/>  
  //       <Text style={styles.title}>Cheese Tequeños</Text>
  //       <Text style={styles.subtitle}>$ 1.99 15-30 minutes</Text>
  //     </View>
  // )
  return(
    <View style={styles.restContainer}>
        <Image source={{uri: restaurant.image}} style={styles.image}/>
        <View style={styles.row}>
          <View >
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>{`$${restaurant.deliveryFee} ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`}</Text>
          </View>
          <View style={styles.rating}>
            <Text >
              {restaurant.rating}
            </Text>
          </View>
        </View>
          
      </View>
  )
}


const styles = StyleSheet.create({

  restContainer: { 
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 4/3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  subtitle: { 
    color: 'grey',

  },
  row: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: "flex-start"
  },
  rating:{
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lightgrey",
    borderRadius: 10
  }
});
export default RestaurantItem
