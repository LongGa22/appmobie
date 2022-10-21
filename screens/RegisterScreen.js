import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Logo from '../assets/anh/nyanko-sensei3.png';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Dimensions ,document} from 'react-native';

let apiUser = "http://localhost:3000/user";

export default function RegisterScreen() {
   const [email, setEmail] = useState('')
   const [password,setPassword] = useState('')  
   
  const sendCred=()=>{
    fetch("http://localhost:3000/signup",{
        method:"POST",
        header: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify ({
            "email":email,
            "pasword":password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
   }
    return (
        <><View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 190,
            width: '100%',
            backgroundColor:'#fca503',
            borderBottomEndRadius:80,
            borderBottomStartRadius:80,
            marginBottom:10
        }}>
            <Text style={{ fontSize: 30,color:'white' }}>Tạo tài khoản mới</Text>
        </View>
        <View style={{
            width:'100%', height:400, alignItems:'center',}}>
            <TextInput style={
                styles.css_input
            }placeholder='Username'/>
            {/* <TextInput style={
                styles.css_in
            }placeholder='Số điện thoại'/> */}
            <TextInput 
             style={styles.css_input}
             placeholder='E-mail'
             value={email}
             onChangeText={(text)=>setEmail(text)}
            />
            <TextInput   
            style={styles.css_input}
            placeholder='Password'
            value={password}
            onChangeText={(text)=>{setPassword(text)}}/>
               
            <View>
                <TouchableOpacity 
               onPress={() => sendCred()}
                style={{height:50, width:250, alignItems:'center',justifyContent:'center', borderRadius:30, backgroundColor:'pink'}}>
                    <Text style={{fontWeight:'bold'}}>Đăng kí thôi nào</Text>
                </TouchableOpacity>
            </View>

            <View >
                    <Image source={Logo} style={{height:520, width:400,marginTop:0}} />
            </View>
            
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    css_input:{
        paddingHorizontal:13,
        height:50,
        width:'80%',
        borderRadius:20,
        marginBottom:15,
        borderWidth:1,
    },
})