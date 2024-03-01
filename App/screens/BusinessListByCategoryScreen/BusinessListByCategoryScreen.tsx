import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [businessList,setBusinessList]=useState([])
  useEffect(() => {
    param&&getbusinessByCategory();
  }, [param]);

  const getbusinessByCategory=()=>{
    GlobalApi.getBusinessListByCategory(param.category)
    .then(resp=>{
        setBusinessList(resp.businessLists);
    })
  }
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={styles.navContent}
      onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        <Text style={styles.categoryName}>{param?.category}</Text>
      </TouchableOpacity>

      <FlatList
      data={businessList}
        renderItem={({item,index})=>(
            <View>
                <BusinessListItem business={item} />
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    categoryName: {
        fontSize: 20,
        fontWeight: "bold",
        
    },
    navContent:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10

    }
});
