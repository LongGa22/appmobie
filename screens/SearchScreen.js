import React from "react";
import { useState } from "react";
import {View,Text,StatusBar,TouchableOpacity,FlatList} from "react-native";
import SearchToDetail from "../components/SearchToDetail";
import MainInput from "../components/MainInput";
import AnimalData from "../data/Animal.json";
import Bannerjson from "../data/Banner.json";
import Banner_Item from "../components/Banner_Item";
export default function SearchScreen({ navigation }) {
  const [textSearch, settextSearch] = useState("");
  const categories = [
    "Bull",
    "Sphynx",
    "PUG",
    "bull terrier",
    "husky",
  ];
  const renderItem3 = ({ item, index }) => {
    return <Banner_Item item={item} index={index} navigation={navigation} />;
  };
  const renderResult = () => {
    const data = AnimalData.filter((value) =>
      value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
    );
    const renderItem = ({ item, index }) => (
      <SearchToDetail item={item} navigation={navigation} />
    );
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
          KẾT QUẢ
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: StatusBar.currentHeight + 20,
        paddingHorizontal: 12,
      }}
    >
      <MainInput
        value={textSearch}
        onChangeText={settextSearch}
        placeholder={"Nhập để tìm kiếm..."}
        title={"TÌM KIẾM"}
       
      />
      {textSearch.trim().length > 0 ? (
        renderResult()
      ) : (
        <>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
            GỢI Ý CHO BẠN
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {categories.map((value, item) => (
              <TouchableOpacity
                onPress={() => {
                  settextSearch(value);
                }}
                style={{
                  backgroundColor: "#f4f4f4",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  marginRight: 12,
                  marginBottom: 12,
                  borderRadius: 100,
                }}
                key={item}
              >
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>Special Offer</Text>
          <View style={{marginVertical:5}}>
              <FlatList
              data={Bannerjson}
              numColumns ={3}
              // showsHorizontalScollIndicator={true}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem3}
              />
          </View>
    </View>
    
  );
}
