import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const BasketDishItem = ({ basketDish }) => {
    return (
      <>
        <View style={styles.row}>
          <View style={styles.quantityContainer}>
            <Text>1</Text>
          </View>
          <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
          <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
        </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    row: {
        marginHorizontal: 10,
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
  });