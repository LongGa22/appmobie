import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AnimalDetail({ navigation, route }) {
  const params = route.params;
  const { item } = params;
  const [amount, setAmount] = useState(1);

  
  const addToCart = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
        owner: item.owner,
      });
    } else {
      cartData = [];
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
        owner: item.owner,
      });
    }
    AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    navigation.navigate("CartScreen");
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ position: "relative" }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: item.image }}
        />

      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}   <Text style={{ color: "green", fontSize: 26 ,fontWeight: "bold"}}>{item.status}</Text></Text>

        <Text
          style={{
            color: "#000",
            fontSize: 15,
            fontWeight: "bold",
            // marginTop: 24,
          }}
        >
          MÔ TẢ
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "black",
          }}
        >
          {item.description}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View>
            <Text
              style={{
                color: "black",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >GIỚI TÍNH : 
              {item.sex}
            </Text>

            <Text
              style={{
                color: "black",
                fontSize: 15,
                fontWeight: "bold",
                paddingTop:17,
              }}
            > ĐỊA CHỈ : 
              {item.location}
            </Text>
        
          </View>
          <View style={{ flex: 1 }} />
          {/* <View>
          </View> */}
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <View>
            <Text
              style={{
                color: "black",
                fontSize: 10,
                fontWeight: "bold",
                marginLeft: 35,
              }}
            >
              SỐ LƯỢNG
            </Text>
            <View
              style={{
                backgroundColor: "#F4F4F4",
                paddingHorizontal: 16,
                borderRadius: 100,
                marginTop: 4,
                width: 125,
                paddingVertical: 8,
                flexDirection: "row",
              }}
            >
                  <TouchableOpacity
                onPress={() => {
                  setAmount((val) => val + 1);
                }}
              >
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
              <Text style={{ color: "black", marginHorizontal:15,fontSize: 20, }}>{amount}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (amount > 1) setAmount((val) => val - 1);
                }}
              >
                <Ionicons name="remove" size={24} color="black" />
              </TouchableOpacity>
              
          
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#000",
                fontSize: 10,
                textAlign: "right",
                fontWeight: "bold",
                marginRight: 50,
              }}
            >
              TỔNG
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                textAlign: "right",
                fontWeight: "bold",
                paddingBottom:100,
              }}
            >
              {item.price * amount} USD
            </Text>
          </View>
        </View>
  
          <TouchableOpacity 
            style={styles.css_button}
            onPress={addToCart}>
            <Text style={{fontWeight:'bold'}} >THÊM VÀO GIỎ</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  css_button:{
    height:50,
        width:250,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginBottom:30,
        alignSelf:'center',
        backgroundColor:'#a2d926',
  }
})
