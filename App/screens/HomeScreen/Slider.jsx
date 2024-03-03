import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Header from "./Header";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
      <Heading text="Offers For You" />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.slider}>
            <Image source={{ uri: item.image.url }} style={styles.sliderImg} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  slider: {
    marginRight: 10,
    borderRadius: 10,
  },
  sliderImg: {
    width: 270,
    borderRadius: 20,
    height: 150,
    objectFit: "fill",
  },
});
