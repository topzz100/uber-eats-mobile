import { FlatList, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import { useState } from "react";
import { BasketDishItem } from "../../components/BasketDishItem";

const restaurant = restaurants[2];

export const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={{fontSize: 20, fontWeight: 'bold', paddingHorizontal: 10}}>{restaurant.name}</Text>
      <Text style={{ fontWeight: "600", fontSize: 19 ,paddingHorizontal: 10 }}>Your Items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      {/* <View style={styles.seperator}></View> */}

      {/* <View style={styles.row}>
                <Feather name="minus-circle" size={55} color="black" onPress={() =>count> 0 && setCount(count-1)}/> 
                <Text style={styles.quantity}>{count}</Text>
                <Feather name="plus-circle" size={55} color="black" onPress={() => setCount(count+1)}/>
            </View> */}
      <View style={styles.button}>
        <Text style={styles.add}>Create order</Text>
      </View>
    </View>
  );
};

// const BasketDishItem = ({ basketDish }) => {
//   return (
//     <>
//       <View style={styles.row}>
//         <View style={styles.quantityContainer}>
//           <Text>1</Text>
//         </View>
//         <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
//         <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
//       </View>
//     </>
//   );
// };

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 15,
  },
  row: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    marginLeft: 5,
    borderRadius: 2,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    alignItems: "center",
    padding: 20,
  },
  add: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
