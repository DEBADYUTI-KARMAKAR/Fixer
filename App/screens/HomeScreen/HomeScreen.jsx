import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from 'react-native-virtualized-view'
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

export default function HomeScreen() {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
