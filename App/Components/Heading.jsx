import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Heading({
  text,
  isViewAll = false,
  viewAllText = "View All",
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text>{viewAllText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
