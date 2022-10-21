import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Touchable, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function BannerDetail ({navigation, route}){
  const params = route.params;
  const { item } = params;
  const [amount, setAmount] = useState(1);

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ position: "relative" }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 12 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{color: "#000",fontSize: 12,fontWeight: "bold",marginTop: 24,}}>MÔ TẢ</Text>
        <Text style={{color: "gray",}}>{item.description}</Text>
        <Text style={{color: "#000",fontSize: 12,fontWeight: "bold",marginTop: 24,}}>ĐỊA CHỈ TẠI</Text>
        <Text style={{color: "gray",}}>{item.location}</Text>
      </View>
    </ScrollView>
  );
}
