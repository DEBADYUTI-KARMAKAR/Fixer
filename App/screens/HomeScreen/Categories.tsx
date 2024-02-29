import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../Components/Heading';

export default function Categories() {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        getCategories();
    }
    ,[])

    const getCategories=()=>{
        GlobalApi.getCategory().then(resp=>{
            setCategories(resp?.categories)
        }
        )
    }
  return (
    <View style={styles.container}>
        <Heading text="Categories" isViewAll={true} />
        <FlatList
        data={categories}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View style={styles.category}>
                <Image source={{uri:item?.icon?.url}} style={styles.categoryImg}/>
                <Text style={styles.categoryText}>{item.name}</Text>
            </View>
        )}
        />

        

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    },
    category:{
        flex:1,
        marginRight:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    categoryText:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center'
    },
    categoryImg:{
        width:30,
        height:30,
        borderRadius:99,
        marginBottom:10,
        padding:18
    }
    
})