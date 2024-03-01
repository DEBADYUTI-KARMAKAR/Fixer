import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

export default function BusinessListItem({ business }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={styles.businessImg}
      />
      <View style={styles.subContainer}>
        <Text style={styles.contactPerson}>{business.contactPerson}</Text>
        <Text style={styles.name}>{business.name}</Text>
        <View style={{flexDirection:"row",gap:5}}>
          <FontAwesome6 name="location-dot" size={20} color="#9932cc" />
          <Text style={styles.address}>{business.address}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  businessImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  contactPerson: {
    fontSize: 14,
    color: "grey",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "outfit-bold",
  },
  address: {
    fontSize: 16,
    color: "grey",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
});
