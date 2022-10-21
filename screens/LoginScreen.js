import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import Logo from '../assets/anh/nyanko-sensei2.png';
import Logo2 from '../assets/anh/nyanko-sensei5.png';
import React from 'react'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function LoginScreen({navigation,props}){
  const [name, setName] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  // const val = useContext(AuthContext);
  const setData =async ()=> {
    if (email.length ==0) {
      Alert.alert('Nhập đủ email vào đi anh zai');
    }
    else{
      try {
          await AsyncStorage.setItem('Email',email);
          navigation.navigate('HomeScreen');
      } catch (error) {
         console.log(error);
      }
    }
  };
    return(
        <View style={styles.container}>
          <View>
            <Image source={Logo} style={{height:300, width:500,marginBottom:0}}/>
          </View>
       
          <View style={styles.o_nhap }>

           {/* <TextInput style={styles.css_input}
            placeholder='Enter Username'
            onChangeText={(value)=>setName(value)}/> */}

            <TextInput style={styles.css_input}
            placeholder='Enter Email'
            onChangeText={(value)=>setEmail(value)}/>

            <TextInput style={styles.css_input}
            placeholder='Enter Password' 
            onChangeText={(text)=>{setPassword(text)}}/>

            <TouchableOpacity style={styles.css_button}
            // onPress={() =>navigation.navigate('HomeScreen')}
            onPress={setData}
            >
              <Text style={{fontWeight:'bold'}} >Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={{alignSelf:'center', fontWeight:'500'}}>Bạn chưa gia nhập với chúng tôi ư, 
              <TouchableOpacity  onPress ={() => navigation.navigate('RegisterScreen')}>
                <Text style={{color:'red'}}> Đăng ký</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View>
            <Image source={Logo2} style={{height:300, width:400,marginTop:-20}}/>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    alignItems:'center',
    backgroundColor:'#EAEBEB',
    // backgroundColor:'#ede20c',


  },
  o_nhap:{
    width:'100%',
    height:280,
    // backgroundColor:'green'
  },
  css_input:{
    paddingHorizontal:13,
    height:50,
    width:'80%',
    borderRadius:10,
    marginBottom:25,
    borderWidth:1,
    alignSelf:'center',
    backgroundColor:'white'
  },
  css_button:{
    height:50,
        width:250,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:30,
        alignSelf:'center',
        backgroundColor:'#2bc2bc',
  }
})