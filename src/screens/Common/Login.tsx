import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../../assets/css/LoginPage";

export default function Login() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { role, source, nextRoute } = route.params || {};
  const handleGoogleLogin = () => {
    console.log("Google login pressed");
    // Future: Google Auth logic
  };

  const handlePhoneLogin = () => {
    console.log("Phone login pressed");
    navigation.navigate("PhoneNumberEntry", {
      role,
      source: "Authentication",
      nextRoute,
    });
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/images/bharatwork.png")}
        style={styles.logo}
      />

      {/* Brand Title */}
      <Text style={styles.brandTitle}>
        BHARAT<Text style={styles.brandHighlight}>WORK</Text>
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>LABOUR APP</Text>

      {/* Spacer */}
      <View style={styles.flexSpacer} />

      {/* Google Button */}
      <TouchableOpacity
        style={styles.googleButton}
        activeOpacity={0.8}
        onPress={handleGoogleLogin}
      >
        <Text style={styles.googleText}>
          Continue with <Image
        source={require("../../assets/images/google.png")}
        style={styles.googleIcon}
      />
        </Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Phone Button */}
      <TouchableOpacity
        style={styles.phoneButton}
        activeOpacity={0.8}
        onPress={handlePhoneLogin}
      >
        <Text style={styles.phoneText}>Continue with Phone number</Text>
      </TouchableOpacity>
    </View>
  );
}
