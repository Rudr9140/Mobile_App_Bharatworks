import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera } from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';

const { width } = Dimensions.get('window');

const OnboardNewWorker = ({ navigation }: any) => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [location, setLocation] = useState<string>('Not tagged');
  const [locationTagged, setLocationTagged] = useState(false);
  const [showAadhaarModal, setShowAadhaarModal] = useState(false);

  const capturePhoto = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.7,
      cameraType: 'back',
    });

    if (result.assets && result.assets.length > 0) {
      setPhoto(result.assets[0].uri || null);
    }
  };

  const captureLocation = () => {
    setLocationTagged(true);
    Geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat ${latitude.toFixed(4)}, Lng ${longitude.toFixed(4)}`);
      },
      err => {
        Alert.alert('Location Error', err.message);
        setLocationTagged(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>नया वर्कर</Text>
          <Text style={styles.headerSubtitle}>Onboard New Worker</Text>
        </View>

        {/* PHOTO CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>फोटो / Photo</Text>
          <Text style={styles.required}>Required</Text>

          <TouchableOpacity style={styles.photoBox} onPress={capturePhoto}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.photo} />
            ) : (
              <>
                <Text style={styles.cameraIcon}>📷</Text>
                <Text style={styles.photoText}>Tap to capture photo</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* BASIC DETAILS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Basic Details</Text>

          <Text style={styles.label}>पूरा नाम / Full Name *</Text>
          <TextInput style={styles.input} placeholder="Enter name" />

          <Text style={styles.label}>मोबाइल नंबर / Mobile *</Text>
          <View style={styles.row}>
            <View style={styles.countryCode}><Text>+91</Text></View>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              keyboardType="phone-pad"
              placeholder="Mobile number"
            />
          </View>
        </View>

        {/* WORK DETAILS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Work Details</Text>

          <Text style={styles.label}>स्किल / Skill *</Text>
          <TextInput style={styles.input} placeholder="Plumber" />

          <Text style={styles.label}>अनुभव / Experience</Text>
          <TextInput style={styles.input} placeholder="Years" />

          <Text style={styles.label}>दैनिक वेतन / Daily Wage</Text>
          <View style={styles.row}>
            <View style={styles.currency}><Text>₹</Text></View>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              keyboardType="numeric"
              placeholder="500"
            />
          </View>
        </View>

        {/* LOCATION & DOCUMENT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Location & Documents</Text>

          <TouchableOpacity
            style={[
              styles.locationBox,
              locationTagged && styles.locationActive,
            ]}
            onPress={captureLocation}
          >
            <Text>📍 {locationTagged ? 'Location Tagged' : 'Tag Location'}</Text>
            <Text style={{ color: 'green' }}>{location}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.uploadBox}
            onPress={() => setShowAadhaarModal(true)}
          >
            <Text>⬆ Upload Aadhaar (Optional)</Text>
          </TouchableOpacity>
        </View>

        {/* SUBMIT */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.replace('AgentProfile')}
        >
          <Text style={styles.submitText}>Submit & Onboard Worker</Text>
        </TouchableOpacity>

        <Text style={styles.warning}>
          Please fill required fields (Name, Phone, Skill, Photo)
        </Text>
      </ScrollView>

      {/* AADHAAR MODAL */}
      <Modal visible={showAadhaarModal} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => setShowAadhaarModal(false)}
          >
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>

          {/* RENDER EXISTING SCREEN */}
          {/* <UploadAadhaarImages /> */}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default OnboardNewWorker;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F2F2F2' },
  scroll: { paddingBottom: 40 },

  header: {
    backgroundColor: '#F08A34',
    padding: 20,
  },
  headerTitle: { color: '#FFF', fontSize: 18, fontWeight: '600' },
  headerSubtitle: { color: '#FFF', opacity: 0.9 },

  card: {
    backgroundColor: '#FFF',
    margin: 14,
    padding: 16,
    borderRadius: 16,
    elevation: 4,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  required: { color: 'red', marginBottom: 10 },

  photoBox: {
    height: 150,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: { fontSize: 40, marginBottom: 8 },
  photoText: { color: '#777' },
  photo: { width: '100%', height: '100%', borderRadius: 12 },

  label: { marginTop: 12, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  countryCode: {
    width: 60,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
  },
  currency: {
    width: 40,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
  },

  locationBox: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 10,
  },
  locationActive: {
    backgroundColor: '#E9FFF0',
    borderColor: 'green',
  },

  uploadBox: {
    marginTop: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#FF7A18',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  submitText: { color: '#FFF', fontWeight: '600' },
  warning: { color: 'red', textAlign: 'center', marginTop: 10 },

  modalClose: {
    alignSelf: 'flex-end',
    padding: 14,
  },
});
