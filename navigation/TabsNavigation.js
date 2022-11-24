import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen"
import ProfileScreen from "../screens/ProfileScreen"

const Tab = createBottomTabNavigator();

const TabNavigator= () =>{
    return(
        <Tab.Navigator 
        tabBarOptons={{
            showlable:false,
            style:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                ackgroundColor:'white',
                borderRadious:15,
                height:90,
            }
            
        }}
        screenOptions={{
            headerShown:true,
            tabBarShowLabel:true,
            tabBarStyle:{backgroundColor:'white'},
            tabBarInactiveTintColor:'#878b9e',
            tabBarActiveTintColor:'#efd7c2',
            // tabBarLabelPosition:'below-icon',
            
          
            }}
            >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({color,size}) =>(
                <FontAwesome name="home" size={24} color={color} />
            )
        }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{
            // tabBarBadge:3,
            tabBarIcon:({color,size}) =>(
                <Feather name="shopping-cart" size={size} color={color} />
            )
        }}/>
         <Tab.Screen name="Profile" component={ProfileScreen} options={{
            // tabBarBadge:3,
            tabBarIcon:({color,size}) =>(
                <AntDesign name="profile" size={24} color={color} />
            )
        }}/>
        
        </Tab.Navigator>
    );
   
};

export default TabNavigator;