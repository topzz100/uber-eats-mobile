import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json'
import { useState } from 'react';

const dish = restaurants[0].dishes[1]

export const DishDetailsScreen = () => {
    const [count, setCount] = useState(0)
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.desc}>{dish.description}</Text>
            <View style={styles.seperator}></View>

            <View style={styles.row}>
                <Feather name="minus-circle" size={55} color="black" onPress={() =>count> 0 && setCount(count-1)}/> 
                <Text style={styles.quantity}>{count}</Text>
                <Feather name="plus-circle" size={55} color="black" onPress={() => setCount(count+1)}/>
            </View>
            <View style={styles.button}>
                <Text style={styles.add}>Add {count} to basket</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 20,
        padding: 10
    },
    name:{
        fontSize: 30,
        fontWeight: 600,
        marginVertical: 10
        
    },
    desc:{},
    seperator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 15
    },
    row: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 25,
        fontFamily: 'bold'
    },
    button:{
        backgroundColor: 'black',
        marginTop: 'auto',
        alignItems: 'center',
        padding: 20
    },
    add: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'

    }
})