import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export function MobileVerification() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { role, phone, source, nextRoute } = route.params || {};

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d?$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      Alert.alert(
        "Invalid OTP",
        "Please enter a valid 4 digit OTP code"
      );
      return;
    }

    console.log("OTP Verified:", enteredOtp);
    console.log("Source:", source);
    navigation.replace("PersonalDetailEntry", {
      role,
      phone,
      source,
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

      <Text style={styles.title}>Verification!</Text>

      <Text style={styles.subtitle}>
        Verify the code sent to +91 {phone}
      </Text>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref!)}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9EE",
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 24,
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1F2A5A",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 40,
    textAlign: "center",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 50,
  },

  otpBox: {
    width: 55,
    height: 55,
    borderWidth: 1.5,
    borderColor: "#8A8A8A",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 18,
  },

  button: {
    width: "90%",
    backgroundColor: "#F18A32",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    elevation: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export function PhoneNumberEntry() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { role, source, nextRoute } = route.params || {};
  const [phone, setPhone] = useState("");

  /* Allow only numbers, max 10 digits */
  const handlePhoneChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (numericText.length <= 10) {
      setPhone(numericText);
    }
  };

  const handleSubmit = () => {
    if (phone.length !== 10) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10 digit mobile number"
      );
      return;
    }

    /* Navigate to reusable OTP screen */
    navigation.navigate("MobileVerification", {
      role,
      phone,
      source,
      nextRoute,
    });
  };

  return (
    <View style={styles_phone_entry.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/images/bharatwork.png")}
        style={styles_phone_entry.logo}
      />

      {/* Phone Input */}
      <TextInput
        style={styles_phone_entry.input}
        placeholder="Enter Phone Number"
        placeholderTextColor="#8A8A8A"
        keyboardType="number-pad"
        value={phone}
        onChangeText={handlePhoneChange}
        maxLength={10}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles_phone_entry.button} onPress={handleSubmit}>
        <Text style={styles_phone_entry.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles_phone_entry = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9EE",
    alignItems: "center",
    paddingTop: 120,
    paddingHorizontal: 24,
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginBottom: 40,
  },

  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#8A8A8A",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#FFF9EE",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#F18A32",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 14,
    elevation: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});