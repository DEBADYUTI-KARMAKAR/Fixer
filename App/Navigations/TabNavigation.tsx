import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BookingScreen from '../screens/BookingScreen/BookingScreen';
import ProfileScreen from '../screens/ProfileScreeen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#f0f0f0',
    }}>
        <Tab.Screen name='Home' component={HomeNavigation} 
        options={{
            
            tabBarLabel: ({color})=>(
                <Text style={styles.homeText}>
                    Home
                </Text>
            ),
            tabBarIcon: ({color,size})=>(
                <FontAwesome name="home" size={24} color="#9932cc" />
            )

        
        }}
        />
        <Tab.Screen name='Booking' component={BookingScreen}
         options={{
            
            tabBarLabel: ({color})=>(
                <Text style={styles.homeText}>
                    Service
                </Text>
            ),
            tabBarIcon: ({color,size})=>(
                <MaterialIcons name="home-repair-service" size={24} color="#9932cc" />
            )

        
        }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen}
        options={{
            
            tabBarLabel: ({color})=>(
                <Text style={styles.homeText}>
                    Profile
                </Text>
            ),
            tabBarIcon: ({color,size})=>(
                <FontAwesome name="user" size={24} color="#9932cc" />
            )

        
        }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    homeText: {
        color: '#9932cc',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop:-6
    }
})