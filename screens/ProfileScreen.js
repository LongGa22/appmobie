import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, StyleSheet, Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
 
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);

  const [switchValue, setswitchValue] = useState(false)
  const toggleSwitch = (value) => {
    setswitchValue(value)
  }

  return (
 
    <View
    
      style={{
        backgroundColor: "#f8f8fe",
        flex: 1,
        width: "100%",
        paddingHorizontal: 12,
      }}>
      {/* <View style={{ flex: 1, alignItems: "center" }}> */}
      <View style={{backgroundColor:"#f8f8fe",height:40,}}></View>
      <View style={{ flex: 1,}}>
        <View style={{flexDirection:"row"}}>
          <Image
            style={{
              height: 120,
              width: 120,
              borderRadius: 100,
            }}
          // source={{ uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" }}
          // source={{ uri: "https://robohash.org/e03fa67265271f37e4c033d47499d580?set=set4&bgset=&size=400x400" }}
           source={{ uri: "https://robohash.org/8e0a1f5380ed53ca7fc8d2b492dfb637?set=set4&bgset=&size=400x400" }}
          //  source={{ uri: "https://robohash.org/2f08b070a0d62dd6b3a8e343107373de?set=set4&bgset=&size=400x400" }}
          />
          <View style={{
            flexDirection:"column",
            height:40,
            width:230,
            paddingLeft:10,
            }}>
          <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            borderRadius:15,
          }}>Username :{user && user.name }
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            borderRadius:15,
            paddingTop:5,
            paddingBottom:5,
          }}>Email :{user && user.email}
        </Text>
           <TouchableOpacity 
            style={{     
              height:45,
              width:180,
              alignItems:'center',
              justifyContent:'center',
              borderRadius:25,
              backgroundColor:'#71beca', 
            }}>
            <Text style={{color:'white'}}> Edit Profile</Text>
        </TouchableOpacity>

          </View>
        </View>
          <View 
          style={{
            height:'100%',
            width:'100%',
            backgroundColor:"#fff",
            borderRadius:15,
          }}>
            <View 
            style={{
              height:'85%',
              width:'89%',
              backgroundColor:'#fff',
              margin:20,
              }}>
                 <Ionicons  name="options-outline" size={24} color="black"><Text> Options</Text></Ionicons> 
                 <View style={{ borderBottomWidth:0.5, flexDirection:"row"}}>
                    <View style={{width:'70%',flexDirection:'column'}}>
                      <Text style={{ paddingVertical:10,}}  >Notifications: {switchValue ? 'ON ': 'OFF'}   </Text> 
                      <Text style={{ paddingVertical:20,}}  >Online reminder: {switchValue ? 'ON ': 'OFF'}   </Text> 
                      <Text style={{ paddingVertical:10, }}  >Theme Mode: {switchValue ? 'Light Mode': 'Dark Mode'} </Text>
                    </View>
        
                  <View style={{flexDirection:"column",width:'30%',alignItems:'center',justifyContent:'center' }}>
                    <Switch onValueChange={toggleSwitch}value={switchValue} />
                    <Switch onValueChange={toggleSwitch}value={switchValue} />
                    <Switch onValueChange={toggleSwitch}value={switchValue} />
                  </View>

                  </View>

              

                <MaterialIcons name="account-circle" size={24} color="black" style={{ paddingVertical:10, }} > </MaterialIcons>
                <View style={{flexDirection:"row"}}>
                  <Text >Country:</Text> 
                  <Text style={{paddingLeft:195}}>Việt Nam</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                  <Text style={{paddingVertical:30,}}>district:</Text> 
                  <Text style={{paddingLeft:205,paddingVertical:30,}}>Cầu Giấy</Text>
                </View>

                <View style={{flexDirection:"row",  borderBottomWidth:0.5,  paddingVertical:10, }}>
                  <Text >Phone Number:</Text> 
                  <Text style={{paddingLeft:105}}>(+84)983455290</Text>
                </View>


            </View>

            

          </View>
      </View>

       <TouchableOpacity 
        style={styles.css_button}
            onPress={logOut}>
            <Text style={{color:'white'}}> Đăng Xuất</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    css_button:{
        height:50,
        width:250,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginBottom:30,
        alignSelf:'center',
        backgroundColor:'red',
      }
})
