import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HomeScreen from "../screen/HomeScreen";
import CartScreen from '../screen/CartScreen'

const Tab = createBottomTabNavigator();

const TabNavigator= () =>{
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{backgroundColor:'#afff'},
            tabBarInactiveTintColor:'black',
            }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({color,size}) =>(
                <FontAwesome name="home" size={24} color={color} />
            )
        }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarBadge:3,
            tabBarIcon:({color,size}) =>(
                <Feather name="shopping-cart" size={size} color={color} />
            )
        }}/>
        
        </Tab.Navigator>
    );
   
};

export default TabNavigator;