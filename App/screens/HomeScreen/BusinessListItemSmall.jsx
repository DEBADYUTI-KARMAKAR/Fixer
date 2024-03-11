import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItemSmall({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}
    onPress={() =>
      navigation.push("business-detail", {
        business: business,
      })
    }
    >
      <Image source={{ uri: business.images[0]?.url }} style={styles.img} />
      <View style={{ padding: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {business.name}
        </Text>
        <Text style={{ fontSize: 12, color: "gray" }}>
          {business.contactPerson}
        </Text>
        <Text style={styles.category}>{business.category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 150,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 250,
    marginBottom: 10,
  },
  category: {
    backgroundColor: "#9932cc",
    color:'#fff',
    padding: 5,
    borderRadius: 5,
    width: 100,
    textAlign: "center",
    marginTop: 5,
  },
});
