import { FlatList, StyleSheet, View } from 'react-native';
//import RestaurantItem from './src/components/RestaurantItem';
import restaurants from "../../../assets/data/restaurants.json"
import RestaurantItem from '../../components/RestaurantItem';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>

      <FlatList data={restaurants} renderItem={({item}) => <RestaurantItem restaurant= {item}/>}
      showsVerticalScrollIndicator={false}/>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10
  }
});
