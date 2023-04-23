import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { RestaurantDetailsScreen } from '../screens/RestaurantDetailsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { OrderScreen } from '../screens/OrderScreen';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { DishDetailsScreen } from '../screens/DishDetailsScreen';
import { BasketScreen } from '../screens/BasketScreen';
import { OrderDetailsScreen } from '../screens/OrderDetailsScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            {/* <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{headerShown: false}}/> */}
        </Stack.Navigator>
    )
}       

const Tab =createMaterialBottomTabNavigator()

export const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'skyblue' }} >
            <Tab.Screen name='Home' component={HomeStackNavigator} options={{tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />}}/>
            <Tab.Screen name='Orders' component={OrderStackNavigator} options={{tabBarIcon: ({color}) => <Foundation name="shopping-cart" size={24} color={color} />}}/>
            <Tab.Screen name='Profile' component={OrderScreen} options={{tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} />}}/>
        </Tab.Navigator>
    )
}

const  Homestack= createNativeStackNavigator()

const HomeStackNavigator = () => {
    return (
        <Homestack.Navigator>
            <Homestack.Screen name='Restaurants' component={HomeScreen}/>
            <Homestack.Screen name='Restaurant' component={RestaurantDetailsScreen}/>
            <Homestack.Screen name='Dish' component={DishDetailsScreen}/>
            <Homestack.Screen name='Basket' component={BasketScreen}/>
        </Homestack.Navigator>
    )
}
const  OrdersStack= createNativeStackNavigator()

const OrderStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name='Orders' component={OrderScreen}/>
            <OrdersStack.Screen name='Order' component={OrderDetailsScreen}/>
           
        </OrdersStack.Navigator>
    )
}