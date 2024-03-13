import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../BusinessListByCategoryScreen/BusinessListItem";

export default function BookingScreen() {
  const {user}=useUser();
  const [bookingList,setBookingList]=useState([])

  useEffect(()=>{
    user&&getUserBookings();
  },[user])
  const getUserBookings=()=>{
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      console.log(resp);
      setBookingList(resp?.bookings);
      console.log(bookingList);

    })
  }
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-mid',fontSize:26}}>BookingScreen</Text>
      <FlatList
        data={bookingList}
        keyExtractor={(item) => item.id}
        renderItem={({item})=>(
          <View style={styles.container}>
            {/* <Image source={{uri:item.businessList.images[0].url}} style={{width:100,height:100}}/> */}
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.bookingstatus}>{item.bookingStatus}</Text>
          </View>

        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'white',
    marginBottom:10,
    borderRadius:10
  },
  name:{
    fontSize:20,
    fontFamily:'outfit-bold'
  },
  date:{
    fontSize:18,
    fontFamily:'outfit-bold'
  },
  time:{
    fontSize:18,
    fontFamily:'outfit-bold'
  },
  bookingstatus:{
    fontSize:18,
    fontFamily:'outfit',
    color:'#9932cc'

  }
});
