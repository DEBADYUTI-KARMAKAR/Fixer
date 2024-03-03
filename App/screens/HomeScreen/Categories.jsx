import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategories(resp?.categories);
    });
  };
  return (
    <View style={styles.container}>
      <Heading text="Categories" isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() =>
              navigation.push("business-list", {
                category: item.name,
              })
            }
          >
            <Image
              source={{ uri: item?.icon?.url }}
              style={styles.categoryImg}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  category: {
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoryImg: {
    width: 30,
    height: 30,
    borderRadius: 99,
    marginBottom: 10,
    padding: 18,
  },
});
