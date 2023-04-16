import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
// import RestaurantItem from './src/components/RestaurantItem';
// import restaurants from "./assets/data/restaurants.json"
import HomeScreen from './src/screens/HomeScreen';
import { RestaurantDetailsScreen } from './src/screens/RestaurantDetailsScreen';
import { DishDetailsScreen } from './src/screens/DishDetailsScreen';
import { BasketScreen } from './src/screens/BasketScreen';
import { OrderScreen } from './src/screens/OrderScreen';
import { OrderDetailsScreen } from './src/screens/OrderDetailsScreen';
//mport { RestaurantDetailsScreen } from './src/screens/RestaurantDetailsScreen';
//import RestaurantDetailsScreen from './src/screens/HomeScreen/RestaurantDetailsScreen';
//import RestaurantDetailsScreen from './src/screens/HomeScreen/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <RestaurantDetailsScreen/> */}
      {/* <DishDetailsScreen/> */}
      {/* <BasketScreen/> */}
      {/* <OrderScreen/> */}
      <OrderDetailsScreen/>
      <StatusBar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
