import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
        <Image source={{uri:business.images[0]?.url}} style={styles.img} />
        <View style={{padding:5}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>{business.name}</Text>
            <Text style={{fontSize:12,color:'gray'}}>{business.contactPerson}</Text>
            <Text style={styles.category}>{business.category.name}</Text>

            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:170,
        height:150,
        borderRadius:10
    },
    container:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        elevation:5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height:250,
        marginBottom:10
    },
    category:{
        backgroundColor:'lightgray',
        padding:5,
        borderRadius:5,
        width:100,
        textAlign:'center',
        marginTop:5,
        
    }
})