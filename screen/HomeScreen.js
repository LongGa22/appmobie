import { Text, StyleSheet, View, TextInput, Button, Alert, Image, FlatList,ScrollView} from "react-native";
import React, {Component, useEffect, useState} from "react";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import BannerSlider from "../data/BannerSlider";
import Icons from "../data/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function HomeScreen(){

    // const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    const getData =() =>{
        try {
            AsyncStorage .getItem('Email')
            .then(value=>{
                if(value != null){
                    setEmail(value);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
       },[]);

    const oneBanner = ({item, onPress, backgroundColor})=>(
        <TouchableOpacity onPress={onPress} >
            <View style={styles.item}>
                <View style={styles.BannerContainer}>
                    <Image source={item.image} style={styles.Banner}></Image>
                </View>
            </View>
        </TouchableOpacity>
    )

    const oneIcon = ({item, onPress,})=>(
        <TouchableOpacity onPress={()=>alert('jack song gio')}style={{paddingLeft:22,paddingTop:10}} >
            <View style={styles.item}>
                <View style={styles.IconContainer}>
                    <Image source={item.image} style={styles.Icon}></Image>
                </View>
            </View>
        </TouchableOpacity>
    )

    const itemSeparator = () => {
        return <View style={styles.separator}></View>
    };


    return(
        <ScrollView>
        <View style={StyleSheet.container}>
        <View style={{
            backgroundColor:"grey",
            height:40,
        }}>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}} >
            <TouchableOpacity style={styles.location_pin}>
                <Entypo name="location-pin" size={25} color="#04BFAD" /> 
                <Text style={{  fontSize:20, }}>74</Text>
                <MaterialIcons name="navigate-next" size={24} color="black" />
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.navicon}>
            <EvilIcons name="navicon" size={35} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.search}>
        <Feather name="search" size={25} color="black" style={{marginTop:12}} />

            <TextInput placeholder="Tìm Kiếm">
            </TextInput>
        </View >

        <Text style={{}}>Hello{email}</Text>
     
        {/* // FlatList tu day */}
        <View >
        <FlatList
        data={BannerSlider}
        renderItem={oneBanner}
        ItemSeparatorComponent ={ itemSeparator}
        horizontal={true}
        >
        </FlatList>
        </View>
        {/* Icons bat dau tu day */}
        <View >
        <FlatList
        data={Icons}
        renderItem={oneIcon}
        // horizontal={true}
        numColumns={4}
        >
        </FlatList>

    
        </View>
 
    </View>
    </ScrollView>
    );   
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:'100%',
        paddingHorizontal:50,
    },
    location_pin: {
        paddingStart:15,
        flexDirection:'column',
        paddingRight:80,
      
    },
    search: {
        height:45,
        backgroundColor:'#ddf4ff',
        borderRadius:20,
        margin:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
    },
    // add tu day
    separator:{
        width:8,
        backgroundColor:'white',
      },

      item:{
        alignItems:'center',
        paddingVertical:1,
      },
      BannerContainer:{
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        height:200,
        width:350,
        justifyContent:'center',
        alignItems:'center',
      },
  
      Banner:{
        height:'100%',
        width:'100%',
        borderRadius:15,
       },
       // icon tu day
       IconContainer:{
        backgroundColor:'red',
        borderRadius:0,
        height:70,
        width:70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
      },
  
      Icon:{
        height:'100%',
        width:'100%',
        borderRadius:15,
       },

   

   
});