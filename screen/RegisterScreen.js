import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default function Register() {
    return (
        <><View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 190,
            width: '100%',
            backgroundColor:'#2bc2bc',
            borderBottomEndRadius:80,
            borderBottomStartRadius:80,
            marginBottom:10
        }}>
            <Text style={{ fontSize: 30, color: '#2bc2bc',color:'white' }}>Tạo tài khoản mới</Text>
        </View>
        <View style={{
            width:'100%', height:400, alignItems:'center',}}>
            <TextInput style={
                styles.css_in
            }placeholder='Họ và tên'/>
            <TextInput style={
                styles.css_in
            }placeholder='Số điện thoại'/>
            <TextInput style={
                styles.css_in
            }placeholder='E-mail'/>
            <TextInput style={
                styles.css_in
            }placeholder='Password'/>
            <View>
                <TouchableOpacity style={{height:50, width:250, backgroundColor:'pink', alignItems:'center',justifyContent:'center', borderRadius:30, backgroundColor:'#2bc2bc'}}>
                    <Text style={{fontWeight:'bold'}}>Đăng kí thôi nào</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    css_in:{
        paddingHorizontal:13,
        height:50,
        width:'80%',
        borderRadius:20,
        marginBottom:40,
        borderWidth:1
    },
})