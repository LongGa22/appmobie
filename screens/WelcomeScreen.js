import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';
import Logo from '../assets/anh/nyanko-sensei.png';

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
                <View style={{marginBottom:50}}>
                    <Text style={{fontSize:30}}>Get Pet Now !</Text>
                </View>
                <View >
                    <Image source={Logo} style={{height:258, width:400,marginBottom:20 }} />
                </View>
              
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={styles.css_input}
                        onPress ={() => navigation.navigate('RegisterScreen')}>
                        <Text style={{fontWeight:'bold'}}>Đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.css_input} 
                    onPress ={() => navigation.navigate('LoginScreen')}>
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
        backgroundColor:'#fca503',
        justifyContent:'center',
        alignItems:'center',
    },
    css_input:{
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