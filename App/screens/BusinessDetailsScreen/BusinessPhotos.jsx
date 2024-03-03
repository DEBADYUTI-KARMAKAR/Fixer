import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";

export default function BusinessPhotos({ business }) {
  return (
    <View>
      <Heading text="Photos" />
      <FlatList
        data={business?.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10 }}>
            <Image source={{ uri: item?.url }} style={styles.categoryImg} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImg: {
    width: 150,
    borderRadius: 10,
    flex: 1,
    height: 120,
    margin: 10,
  },
});
