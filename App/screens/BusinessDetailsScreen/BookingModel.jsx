import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../Components/Heading";

import CalendarPicker from "react-native-calendar-picker";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../Utils/GlobalApi";

export default function BookingModel({ businessId, visible, hideModal }) {
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [selectdDate, setSelectedDate] = useState();
  const [message, setMessage] = useState();
  const { user } = useUser();
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  // Create booking
  const createBooking = () => {
    if (!selectedTime || !selectdDate) {
      ToastAndroid.show("Please select date and time", ToastAndroid.SHORT);
      return;
    }
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: selectdDate,
      message: message,
      businessId: businessId,
    };
    GlobalApi.createBooking(data).then((resp) => {
      console.log(resp);
      ToastAndroid.show("Booking Created", ToastAndroid.SHORT);
    });
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={styles.modal}
              onPress={hideModal}
            >
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
              <Heading text={"Booking"} />
            </TouchableOpacity>
            <Heading text={"Select Date"} />
            <CalendarPicker
              onDateChange={setSelectedDate}
              width={340}
              minDate={Date.now()}
              todayBackgroundColor={"gray"}
              todayTextStyle={{ color: "white" }}
              selectedDayColor={"#9932cc"}
              selectedDayTextColor={"white"}
            />
          </View>
          {/* time select  */}

          <View style={{ margin: 20 }}>
            <Heading text={"Select Time"} />
            <FlatList
              data={timeList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => setSelectedTime(item.time)}
                >
                  <Text
                    style={[
                      selectedTime == item.time
                        ? styles.selectedTime
                        : styles.unSelectedTime,
                    ]}
                  >
                    {item.time}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ margin: 20 }}>
            <Heading text={"Any Message"} />
            <TextInput
              placeholder="Message"
              style={styles.message}
              numberOfLines={3}
              multiline={true}
              onChange={(text) => setMessage(text)}
            />
          </View>

          {/* Submit button  */}
          <TouchableOpacity onPress={() => createBooking()}>
            <Text style={styles.submitBtn}>Book Now</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
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
  container: {
    padding: 20,
  },
  modal: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#9932cc",
    borderRadius: 99,
    paddingHorizontal: 18,
    color: "#ffffff",
    backgroundColor: "#9932cc",
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#9932cc",
    borderRadius: 99,
    paddingHorizontal: 18,
    color: "#9932cc",
  },
  message: {
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    fontFamily: "outfit",
    borderColor: "#dda0dd",
  },
  submitBtn: {
    textAlign: "center",
    fontFamily: "outfit-mid",
    fontSize: 18,
    borderRadius: 15,
    backgroundColor: "#9932cc",
    color: "#ffffff",
    padding: 10,
    margin: 20,
    elevation: 2,
  },
});
