import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import styles from '../../assets/css/Authentication';
import { useNavigation, useRoute } from '@react-navigation/native';


const { width } = Dimensions.get('window');
export default function Authentication() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { role, source, nextRoute } = route.params || {};
  const handleLogin = () => {
    navigation.replace("Login", {
      role,
      source: "Authentication",
      nextRoute: "Login",
    });
  };
  const handleRegister = () => {
    if (role === 'Worker') {
      navigation.replace('PhoneNumberEntry', {
        role,
        source: "Authentication",
        nextRoute: 'LabourPersonalDetailEntry',
      });
    } else if (role === 'Agent') {
      navigation.replace('PhoneNumberEntry', {
        role,
        source: "Authentication",
        nextRoute: "AgentPersonalDetailEntry",
      });
    }
  };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/bharatwork.png')}
        style={styles.logo}
      />

      {/* Brand Text */}
      <Text style={styles.brandTitle}>
        BHARAT<Text style={styles.brandHighlight}>WORK</Text>
      </Text>

      <Text style={styles.subtitle}>LABOUR APP</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
