import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";
import BookingModel from "./BookingModel";


export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [business, setBusiness] = useState(param?.business);
  const [isReadmore, setReadMore] = useState(false);
  const [showModel, setShowModel] = useState(false);
  
  useEffect(() => {
    console.log(param?.business);
  }, [param]);

  

  return (
    <View style={{ margin: 20 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "93%" }}
      >
        <TouchableOpacity
          style={styles.navContent}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: business?.images[0]?.url }}
          style={{ width: "100%", height: 300 }}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.businessName}>{business.name}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.contactPerson}>{business?.contactPerson}</Text>
            <Text style={styles.categoryName}>{business?.category.name}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <FontAwesome6 name="location-dot" size={20} color="#9932cc" />
            <Text style={styles.address}>{business?.address}</Text>
          </View>
        </View>

        <View style={styles.hr}></View>

        <View style={{ marginTop: 10 }}>
          <Heading text="About Me" />
          <Text
            style={styles.about}
            numberOfLines={isReadmore === true ? 20 : 5}
          >
            {business.about}
          </Text>
          <TouchableOpacity onPress={() => setReadMore(!isReadmore)}>
            <Text style={styles.readMore}>
              {isReadmore === true ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hr}></View>
        <BusinessPhotos business={business} />
      </ScrollView>

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() => setShowModel(true)}
        >
          <Text style={{ color: "white", fontSize: 18, fontFamily: "outfit" }}>
            Book Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactBtn}>
          <Text
            style={{ color: "#9932cc", fontSize: 18, fontFamily: "outfit" }}
          >
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    <BookingModel businessId={business.id} visible={showModel} hideModal={()=>setShowModel(false)}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  navContent: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  infoContainer: {
    display: "flex",
    gap: 10,
    marginVertical: 10,
  },
  businessName: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "outfit-bold",
  },
  contactPerson: {
    fontFamily: "outfit-mid",
    color: "#9932cc",
    fontSize: 22,
  },
  address: {
    fontFamily: "outfit-mid",
    color: "gray",
    fontSize: 16,
  },
  categoryName: {
    fontFamily: "outfit-mid",
    color: "#9932cc",
    backgroundColor: "#dda0dd",
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
    alignItems: "center",
  },
  hr: {
    borderWidth: 0.4,
    borderColor: "gray",
  },
  about: {
    fontSize: 16,
    fontFamily: "outfit",
    color: "gray",
    lineHeight: 25,
  },
  readMore: {
    color: "#9932cc",
    fontSize: 16,
    fontFamily: "outfit",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    height: 150,
  },
  bookBtn: {
    backgroundColor: "#9932cc",
    padding: 10,
    borderRadius: 10,
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  contactBtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9932cc",
    marginBottom: 80,
  },
  
});
