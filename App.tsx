import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from 'expo-font';


const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/Outfit/static/Outfit-Regular.ttf'),
    'outfit-mid': require('./assets/Outfit/static/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/Outfit/static/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider
    
    tokenCache={tokenCache}
    publishableKey="pk_test_dG91Y2hlZC1ib2JjYXQtMzUuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation  />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
