import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../assets/css/SplashLanguageScreen';

const { width, height } = Dimensions.get('window');

const SplashLanguageScreen = () => {
  const logoTranslateY = useRef(new Animated.Value(0)).current;
  const contentTranslateY = useRef(new Animated.Value(height)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(logoTranslateY, {
          toValue: -120,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(contentTranslateY, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* LOGO */}
        <Animated.Image
          source={require('../assets/images/bharatwork.png')}
          style={[
            styles.logo,
            { transform: [{ translateY: logoTranslateY }] },
          ]}
          resizeMode="contain"
        />

        {/* LANGUAGE CONTENT */}
        <Animated.View
          style={[
            styles.content,
            {
              transform: [{ translateY: contentTranslateY }],
              opacity: contentOpacity,
            },
          ]}
        >
          <Text style={styles.title}>Choose Your Language</Text>
          <Text style={styles.subtitle}>अपनी भाषा चुनें</Text>

          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select</Text>
            <View style={styles.arrow} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashLanguageScreen;
