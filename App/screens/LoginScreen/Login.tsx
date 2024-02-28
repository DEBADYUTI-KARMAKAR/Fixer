import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/login.png")}
        style={styles.loginImg}
      />
      <View style={styles.subscribeContainer}>
        <Text style={styles.supText}>
          Let's Find{" "}
          <Text style={styles.subText}>Expert Professional Services</Text> at
          Home & Office.{" "}
        </Text>
        <Text style={styles.supText2}>
          Best place to find services near you with expert professional service
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImg: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 15,
  },
  container: {
    alignItems: "center",
  },
  subscribeContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "#9932cc",
    marginTop: -20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  supText: {
    color: "#ffffff",
    fontSize: 27,
    textAlign: "center",
    marginTop: 10,
  },
  subText: {
    fontWeight: "bold",
  },
  supText2: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#9932cc",
    fontSize: 18,
  },
});
