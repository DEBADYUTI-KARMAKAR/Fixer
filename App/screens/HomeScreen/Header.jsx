import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoaded } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.userData}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={{ color: "black", fontFamily: "outfit-bold",opacity:0.5 }}>
              Welcome,
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 22,
                fontFamily: "outfit-bold",
              }}
            >
              {user?.fullName}
            </Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>
      {/* Search bar */}
      <View style={styles.searchbarContainer}>
        <TextInput style={styles.input} placeholder="Search" />
        <FontAwesome
          name="search"
          size={24}
          style={styles.searchBtn}
          color="#ffffff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: "85%",
  },
  searchbarContainer: {
    flexDirection: "row",
    gap: 10,
  },
  searchBtn: {
    backgroundColor: "#9932cc",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});
