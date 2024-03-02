import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BusinessListByCategoryScreen from '../screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../screens/BusinessDetailsScreen/BusinessDetailsScreen';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    
    }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="business-list" component={BusinessListByCategoryScreen} />
        <Stack.Screen name="business-detail" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})