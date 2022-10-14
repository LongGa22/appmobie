import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = (props) => {
    const detectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
            if(token){
                  props.navigation.replace("Home")
            }else{
                props.navigation.replace("Dangnhap")
            }
      }
      useEffect(()=>{
       detectLogin()
      },[])

  return (
    <View style={styles.loading}> 
    <ActivityIndicator size="large" color="blue" />
   </View>
  );
}

const styles= StyleSheet.create({
    loading:{
     flex:1,
    justifyContent:"center",
    alignItems:"center" 
    }
  })


export default LoadingScreen