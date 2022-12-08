import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{ useState } from 'react';
import Logo from '../assets/anh/nyanko-sensei3.png';
import LoginScreen from '../screens/LoginScreen';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Dimensions ,document} from 'react-native';

export default function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('') 
    

    const onSignUp = () => {
        if (name.trim() == "" || !name) {
          alert("Không được để trống họ và tên !");
        } else if (email.trim() == "" || !email) {
          alert("Không được để trống email !");
        } else if (password.trim() == "" || !password) {
          alert("Không được để trống mật khẩu !");
        } else {
          createAccount();
        }
      };

      const createAccount = async () => {
        let userData = await AsyncStorage.getItem("userData");
        if (userData) {
          userData = JSON.parse(userData);
          let arr = [...userData];
          arr = arr.filter(
            (value) => value.email.toLocaleLowerCase() == email.toLocaleLowerCase()
          );
          if (arr.length > 0) {
            alert("Email already registered!");
            return;
          } else {
            userData.push({
              name: name.trim(),
              email: email.trim(),
              password: password.trim(),
            });
          }
        } else {
          userData = [];
          userData.push({
            name: name.trim(),
            email: email.trim(),
            password: password.trim(),
          });
        }
        AsyncStorage.setItem("userData", JSON.stringify(userData));
        alert("Đăng ký thành công!");
      };
    
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
            <TextInput
             style={styles.css_input}
             placeholder='Username'
             value={name}
             onChangeText={setName}
            />
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
                onPress={() => onSignUp()}
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