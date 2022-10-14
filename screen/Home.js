import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}, props){
    const [email,setEmail] = useState("loading")
   const Boiler = async ()=>{
      const token = await AsyncStorage.getItem("token")
    fetch('http://192.168.78.238:3000/',{
    headers:new Headers({
      Authorization:"Bearer "+token
    })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      setEmail(data.email)
    }
    )
   }
        useEffect(()=>{
    Boiler()
    },[])

   const logout =(props)=>{
      AsyncStorage.removeItem("token").then(()=>{
        props.navigation.replace("login")
      })
   }

   return (
    <> 
     <Text style={{fontSize:18}}>your email is {email}</Text>
     <Button 
         mode="contained"
         style={{marginLeft:18,marginRight:18,marginTop:18}}
          onPress={() => logout(props)}>
         logout
       </Button>
    </>
   );
}