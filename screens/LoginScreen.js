import Logo from '../assets/anh/nyanko-sensei2.png';
import Logo2 from '../assets/anh/nyanko-sensei5.png';
import React from 'react'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function LoginScreen({navigation,props}){
  //const [name, setName] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const goToHome = () => {
    if (email.trim() == '' || !email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu !');
    } else {
      login();
    }
  };
  const login = async () => {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) =>
          value.email.toLocaleLowerCase() == email.toLocaleLowerCase() &&
          value.password == password
      );
      if (arr.length > 0) {
        let curUser = arr[0];
        AsyncStorage.setItem('curUser', JSON.stringify(curUser));
        navigation.replace('HomeScreen');
      } else alert('Email hoặc mật khẩu không chính xác!');
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };
  // const goToSignUp = async () => {
  //   navigation.navigate('SignUpScreen');
  // };
  const checkLogin = async () => {
    let userData = await AsyncStorage.getItem('curUser');
    if (userData) navigation.replace('HomeScreen');
  };
  useEffect(() => {
    checkLogin();
  }, []);
  // const setData =async ()=> {
  //   if (email.length ==0) {
  //     Alert.alert('Nhập đủ email vào đi anh zai');
  //   }
  //   else{
  //     try {
  //         await AsyncStorage.setItem('Email',email);
  //         navigation.navigate('HomeScreen');
  //     } catch (error) {
  //        console.log(error);
  //     }
  //   }
  // };
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
             onPress={goToHome}
            // onPress={setData}
            >
              <Text style={{fontWeight:'bold'}} >Đăng nhập</Text>
            </TouchableOpacity>

            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <Text style={{ fontWeight:'500'}}>Bạn chưa gia nhập với chúng tôi ư,</Text>
              <TouchableOpacity  onPress ={() => navigation.navigate('RegisterScreen')}>
                <Text style={{color:'red', fontWeight:'500'}}> Đăng ký</Text>
              </TouchableOpacity>
            
            </View>
           
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