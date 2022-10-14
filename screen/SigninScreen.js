import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Logo2 from '../assets/anh/logo2.png';

export default function Signin({navigation}) {
    return (
        <View style={styles.container}>
                <View >
                    <Image source={Logo2} style={{height:300, width:300,marginBottom:50}}/>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={styles.css_nut}
                        onPress ={() => navigation.navigate('Register')}>
                        <Text style={{fontWeight:'bold'}}>Đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.css_nut} onPress ={() => navigation.navigate('Dangnhap')}>
                        <Text style={{fontWeight:'bold'}}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#2bc2bc',
        justifyContent:'center',
        alignItems:'center',
    },
    logo: {
        height: 100,
        width: 100,
        // marginTop: 200,
        marginBottom: 50,
        // borderRadius: 10,
        // marginStart: 155,
    },
    css_nut:{
        // alignItems:'flex-end',
        height:50,
        width:350,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:40,
        paddingHorizontal:20,
    },
    
});