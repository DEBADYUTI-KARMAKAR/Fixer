import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
      </View>
      <View style={{ padding: 20 }}>
        <Categories />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
