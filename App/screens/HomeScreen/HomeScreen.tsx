import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <Header />
        <View style={{ padding: 10 }}>
          <Slider />
        </View>
        <View style={{ padding: 10 }}>
          <Categories />
        </View>
        <View style={{ padding: 10 }}>
          <BusinessList />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
