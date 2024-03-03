import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function PageHeading({title}) {
    const navigation=useNavigation();
  return (
    <TouchableOpacity
    style={styles.navContent}
    onPress={() => navigation.goBack()}
  >
    <Ionicons name="arrow-back-sharp" size={24} color="black" />
    <Text style={styles.categoryName}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    navContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      },
      categoryName: {
        fontFamily: "outfit-mid",
        fontSize: 20,
      },
})