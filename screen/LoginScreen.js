import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo3 from '../assets/anh/logo3.png';
import React, { useState } from 'react'


export default function Dangnhap({navigation},props ){
  // const [name,setName] = useState('');
  
  const setData = async()=> {
    if(email.length == 0) {
        Alert.alert('nhập tên vào anh êy')
    }else{
        try {
            await AsyncStorage.setItem('Email',email);
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.log(error);
        }
    }
}
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
//   const sendCred = async (navigation)=>{
//     fetch("http://192.168.78.238:3000/signin",{
//       method:"POST",
//       headers: {
//        'Content-Type': 'application/json'
//      },
//      body:JSON.stringify({
//        "email":email,
//        "password":password
//      })
//     })
//     .then(res=>res.json())
//     .then(async (data)=>{
//            try {
//              await AsyncStorage.setItem('token',data.token)
//              props.navigation.replace("Home")
//            } catch (e) {
//              console.log("error hai",e)
//               Alert(e)
//            }
//     })
//  }


    return(
        <View style={styles.container}>
          <View>
            <Image source={Logo3} style={{height:300, width:230,marginBottom:50,}}/>
          </View>
          <View style={styles.o_nhap}>
            <TextInput style={styles.css_nut}
            placeholder='Email' 
            // value={email} 
            onChangeText={(value)=>setEmail(value)}
            // onChangeText={(text)=>setEmail(text)}
            />
            <TextInput style={styles.css_nut}
            placeholder='Mật khẩu' 
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
            />


            <TouchableOpacity style={styles.css_button} 
            // onPress={() => sendCred(props)}
            // onPress={() => navigation.navigate('HomeScreen')}
            onPress={setData}
            >
              <Text style={{fontWeight:'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>


            <Text style={{alignSelf:'center', fontWeight:'500'}}>Bạn chưa gia nhập với chúng tôi ư, 
              <TouchableOpacity style={{padding:0}} onPress ={() => navigation.navigate('Register')}>
                <Text style={{color:'red'}}> Đăng ký</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
    // justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#EAEBEB',
  },
  o_nhap:{
    width:'100%',
    height:300,
    // backgroundColor:'green'
  },
  css_nut:{
    paddingHorizontal:13,
    height:50,
    width:'80%',
    borderRadius:10,
    marginBottom:40,
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
        marginBottom:40,
        paddingHorizontal:20,
        alignSelf:'center',
        backgroundColor:'#2bc2bc'
  }
})