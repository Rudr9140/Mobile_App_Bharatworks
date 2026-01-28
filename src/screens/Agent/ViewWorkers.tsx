import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type WorkerStatus = 'verified' | 'pending' | 'failed';

interface Worker {
  id: string;
  name: string;
  skill: string;
  phone: string;
  location: string;
  onboardedOn: string;
  status: WorkerStatus;
  isDuplicate?: boolean;
}

const workersData: Worker[] = [
  {
    id: '1',
    name: 'राजेश कुमार',
    skill: 'Construction Worker',
    phone: '+91 9876543210',
    location: 'Sector 62, Noida',
    onboardedOn: '5/12/2025',
    status: 'verified',
  },
  {
    id: '2',
    name: 'सुरेश पटेल',
    skill: 'Plumber',
    phone: '+91 9876543211',
    location: 'Vaishali, Ghaziabad',
    onboardedOn: '6/12/2025',
    status: 'pending',
  },
  {
    id: '3',
    name: 'मोहन सिंह',
    skill: 'Electrician',
    phone: '+91 9876543212',
    location: 'Indirapuram, Ghaziabad',
    onboardedOn: '4/12/2025',
    status: 'verified',
  },
  {
    id: '4',
    name: 'विकास यादव',
    skill: 'Painter',
    phone: '+91 9876543213',
    location: 'Sector 18, Noida',
    onboardedOn: '5/12/2025',
    status: 'failed',
  },
  {
    id: '5',
    name: 'अमित शर्मा',
    skill: 'Carpenter',
    phone: '+91 9876543214',
    location: 'Greater Noida',
    onboardedOn: '6/12/2025',
    status: 'pending',
    isDuplicate: true,
  },
];

const ViewWorkers = () => {
  const [activeFilter, setActiveFilter] = useState<
    'all' | WorkerStatus
  >('all');

  const filteredWorkers = workersData.filter(worker => {
    if (activeFilter === 'all') return true;
    return worker.status === activeFilter;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>वर्कर्स लिस्ट</Text>
        <Text style={styles.headerSubtitle}>View Onboarded Workers</Text>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search by name or phone..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* FILTERS */}
        <View style={styles.filterRow}>
          {['all', 'verified', 'pending', 'failed'].map(type => (
            <TouchableOpacity
              key={type}
              style={[
                styles.filterChip,
                activeFilter === type && styles.filterActive,
              ]}
              onPress={() => setActiveFilter(type as any)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === type && styles.filterActiveText,
                ]}
              >
                {type === 'all'
                  ? 'All'
                  : type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* LIST */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {filteredWorkers.map(worker => (
          <View
            key={worker.id}
            style={[
              styles.workerCard,
              worker.status === 'verified' && styles.verifiedBorder,
              worker.status === 'pending' && styles.pendingBorder,
              worker.status === 'failed' && styles.failedBorder,
            ]}
          >
            {/* HEADER */}
            <View style={styles.cardHeader}>
              <Text style={styles.workerName}>{worker.name}</Text>

              <View
                style={[
                  styles.statusBadge,
                  worker.status === 'verified' && styles.verifiedBadge,
                  worker.status === 'pending' && styles.pendingBadge,
                  worker.status === 'failed' && styles.failedBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    worker.status === 'verified' && styles.verifiedText,
                    worker.status === 'pending' && styles.pendingText,
                    worker.status === 'failed' && styles.failedText,
                  ]}
                >
                  {worker.status === 'verified'
                    ? '✔ Verified'
                    : worker.status === 'pending'
                    ? '⏰ Pending'
                    : '✖ Failed'}
                </Text>
              </View>
            </View>

            <Text style={styles.workerInfo}>{worker.skill}</Text>
            <Text style={styles.workerInfo}>📞 {worker.phone}</Text>
            <Text style={styles.workerInfo}>📍 {worker.location}</Text>
            <Text style={styles.workerInfo}>
              🕒 Onboarded: {worker.onboardedOn}
            </Text>

            {/* FAILED MESSAGE */}
            {worker.status === 'failed' && (
              <View style={styles.errorBox}>
                <Text style={styles.errorTitle}>Verification Failed</Text>
                <Text style={styles.errorText}>
                  Reason : Invalid Documents
                </Text>
              </View>
            )}

            {/* DUPLICATE */}
            {worker.isDuplicate && (
              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkText}>
                  🔗 Link to Existing Worker
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewWorkers;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    backgroundColor: '#FF7A18',
    padding: 16,
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },

  headerSubtitle: {
    color: '#FFF',
    opacity: 0.9,
    marginBottom: 10,
  },

  searchBox: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 44,
    justifyContent: 'center',
    marginBottom: 12,
  },

  searchInput: {
    fontSize: 14,
  },

  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  filterChip: {
    backgroundColor: '#FFA366',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
  },

  filterActive: {
    backgroundColor: '#FFF',
  },

  filterText: {
    color: '#FFF',
    fontWeight: '500',
  },

  filterActiveText: {
    color: '#1E63F3',
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  workerCard: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },

  verifiedBorder: { borderColor: '#9BE3B3' },
  pendingBorder: { borderColor: '#FFB570' },
  failedBorder: { borderColor: '#FF9A9A' },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  workerName: {
    fontSize: 16,
    fontWeight: '600',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  verifiedBadge: { backgroundColor: '#E6F8ED' },
  pendingBadge: { backgroundColor: '#FFE8D6' },
  failedBadge: { backgroundColor: '#FFE6E6' },

  statusText: { fontWeight: '600' },
  verifiedText: { color: '#1EAD5A' },
  pendingText: { color: '#FF6A00' },
  failedText: { color: '#FF0000' },

  workerInfo: {
    color: '#555',
    marginBottom: 4,
  },

  errorBox: {
    backgroundColor: '#FFF0F0',
    borderRadius: 12,
    padding: 12,
    marginTop: 10,
  },

  errorTitle: {
    color: '#FF0000',
    fontWeight: '600',
  },

  errorText: {
    color: '#FF0000',
  },

  linkButton: {
    marginTop: 12,
    backgroundColor: '#FFF3CD',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
  },

  linkText: {
    color: '#8A6D00',
    fontWeight: '600',
  },
});
