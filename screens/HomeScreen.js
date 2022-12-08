import { Text, View, StyleSheet, TextInput ,FlatList,ScrollView, TouchableOpacity } from "react-native";
import React, {useEffect,useState} from 'react'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bannerjson from "../data/Banner.json";
import Animaljson from "../data/Animal.json";
import Animal_Item from "../components/Animal_Item";
import Banner_Item from "../components/Banner_Item";
import axios from "axios";

export default function HomeScreen({navigation}){
    const renderbanner = ({ item, index }) => {
        return <Banner_Item item={item} index={index} navigation={navigation} />;
      };

    const renderanimal = ({ item, index }) => {
       return <Animal_Item item={item} index={index} navigation={navigation} />;
     };
     
    const [pet,setPet] = useState([]);
    const [banner,setBanner] = useState([]);

    const getPet =async ()=>{
        await axios.get('https://6371b3300785877861807c29.mockapi.io/Pet/PET')
        .then((respone)=>{
            setPet(respone?.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const getBanner =async ()=>{
        await axios.get('https://6371b3300785877861807c29.mockapi.io/Pet/Banner')
        .then((respone)=>{
            setBanner(respone?.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getPet();
        getBanner();
       },[]);
    return(

        <ScrollView>
            <View style={StyleSheet.container}>
            <View style={{backgroundColor:"grey",height:40,}}></View>
            <Text style={{fontSize:30, alignSelf:'center', color:'black', paddingVertical:5}}>MAKE A NEW FRIEND!</Text>
            <TouchableOpacity style={styles.search}  onPress ={() => navigation.navigate('SearchScreen')} >
                <Feather name="search" size={25} color="black" style={{marginTop:12}} />
                <TextInput placeholder="Tìm Kiếm"></TextInput>
            </TouchableOpacity >
           {/* <Text>aaaaaaaaas{product.description}$</Text> */}
            {/* <View style={{marginVertical:5}}>
                <FlatList
                data={Bannerjson}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                />
            </View> */}
            <View>
            <FlatList
                data={banner}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                renderItem={renderbanner}
                />
            </View>
           
            <Text style={{marginStart:10, fontSize:20}}> Đề xuất cho bạn </Text>
           
            <View >
                <FlatList
                data={pet}
                numColumns ={2}
                // horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                renderItem={renderanimal}
                />
            </View>
        </View>
        </ScrollView> 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
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
        width:'90%',
        backgroundColor:'#ddf4ff',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#f6f6f6',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    
        elevation: 8,
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