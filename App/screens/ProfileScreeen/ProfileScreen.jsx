import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-react";

export default function ProfileScreen() {
  const { user } = useUser();
  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      link: "Home",
    },
    {
      id: 2,
      name: "My Booking",
      icon: "book",
      
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
    },
    {
      id: 4,
      name: "Logout",
      icon: "log-out",
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{ fontSize: 30, fontFamily: "outfit-bold", color: "#ffffff" }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
          />
          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.email}>
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <FlatList
        data={profileMenu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#f2f2f2",
              paddingHorizontal: 100,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
              }}
            >
              <Ionicons name={item.icon} size={24} color="black" />
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "outfit-bold",
                color: "black",
                marginLeft: 10,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: "#9932cc",
    marginBottom: 50,
  },
  name: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    marginTop: 10,
    color: "white",
    marginTop: 18,
  },
  email: {
    fontSize: 15,
    fontFamily: "outfit",
    marginTop: 10,
    color: "white",
  },
});
