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
    const renderItem = ({ item, index }) => {
        return <Banner_Item item={item} index={index} navigation={navigation} />;
      };

    const renderItem2 = ({ item, index }) => {
       return <Animal_Item item={item} index={index} navigation={navigation} />;
     };
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    const getData =() =>{
        try {
            AsyncStorage.getItem('Email')
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
    // var PET =[];
    // axios({
    //     method: 'GET',
    //     url: 'https://6371b3300785877861807c29.mockapi.io/Pet/PET',
    //     data: null
    //   }).then(res =>{
    //     console.log(res);
    //     PET = res.data;
    //   }).catch(err =>{
    //     console.log(err);
    //   });
       
    return(
       
        <ScrollView>
            <View style={StyleSheet.container}>
            {/* <View style={{backgroundColor:"grey",height:40,}}></View> */}
            <Text style={{fontSize:30, alignSelf:'center', color:'black', paddingVertical:5}}>MAKE A NEW FRIEND!</Text>
            <TouchableOpacity style={styles.search}  onPress ={() => navigation.navigate('SearchScreen')} >
                <Feather name="search" size={25} color="black" style={{marginTop:12}} />
                <TextInput placeholder="Tìm Kiếm"></TextInput>
            </TouchableOpacity >
           
            <View style={{marginVertical:5}}>
                <FlatList
                data={Bannerjson}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                />
            </View>
           
            <Text style={{marginStart:10, fontSize:20}}> Đề xuất cho bạn  <Text style={{ marginStart:10, fontSize:20}}> Đề xuất cho bạn</Text></Text>
           
            <View >
                <FlatList
                data={Animaljson}
                numColumns ={2}
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem2}
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