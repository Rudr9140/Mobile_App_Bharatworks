import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import JobCard from '../../components/JobCard';
import { useNavigation, useRoute } from '@react-navigation/native';

/* =======================
   DESIGN TOKENS
======================= */
const COLORS = {
  background: '#FBF3DF',
  white: '#FFFFFF',
  primary: '#F08A33',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  success: '#16A34A',
  muted: '#9CA3AF',
  border: '#E5E7EB',
};

/* =======================
   MAIN SCREEN
======================= */
const LabourAllJobs: React.FC = () => {
  const navigation = useNavigation<any>();
        const route = useRoute<any>();
          const handleLabourHome = () => {
              navigation.replace('LabourHome');
              };
          const handleLabourJobs = () => {
              navigation.replace('LabourAllJobs');
              };
          const handleLabourAgent = () => {
              navigation.replace('AgentOpening');
              };
          const handleLabourEarnings = () => {
              navigation.replace('LabourEarnings');
              };
          const handleLabourProfile = () => {
              navigation.replace('LabourProfile');
              };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.title}>Available Jobs</Text>

        {/* Search */}
        <TextInput
          placeholder="Search jobs..."
          placeholderTextColor={COLORS.muted}
          style={styles.search}
        />

        {/* Filter / Sort */}
        <View style={styles.actionsRow}>
          <ActionButton label="Filter" icon="🔽" />
          <ActionButton label="Sort" icon="⇅" />
        </View>

        {/* Job Cards */}
        <JobCard
          title="Construction Helper"
          company="Sharma Builders"
          rating="4.2"
          pay="₹700/day"
          distance="2.5 km away"
          urgent
        />

        <JobCard
          title="Electrical Work"
          company="Green City Apartments"
          rating="4.5"
          pay="₹800/day"
          distance="4.1 km away"
        />

        <JobCard
          title="Plumbing Work"
          company="Metro Residency"
          rating="4.0"
          pay="₹750/day"
          distance="3.2 km away"
        />

        <JobCard
          title="Painting Job"
          company="Luxury Villas"
          rating="4.8"
          pay="₹650/day"
          distance="5.5 km away"
          urgent
        />
      </ScrollView>

      {/* Bottom Navigation Mockup (Visual Only based on image) */}
                                  <View style={styles.tabBar}>
                                      <TouchableOpacity onPress={handleLabourHome}>
                                          <Tab label="Home" icon="🏠" active />
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={handleLabourJobs}>
                                          <Tab label="Jobs" icon="🧰" />
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={handleLabourAgent}>
                                          <Tab label="Agent" icon="🙂" />
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={handleLabourEarnings}>
                                          <Tab label="Earnings" icon="₹" />
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={handleLabourProfile}>
                                          <Tab label="Profile" icon="👤" />
                                      </TouchableOpacity>
                                  </View>
    </SafeAreaView>
  );
};

/* =======================
   COMPONENTS
======================= */

const ActionButton = ({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) => (
  <TouchableOpacity style={styles.actionBtn}>
    <Text>{icon}</Text>
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);


const Tab = ({
  icon,
  label,
  active,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) => (
  <View style={styles.tab}>
    <Text style={{ color: active ? COLORS.primary : COLORS.muted }}>
      {icon}
    </Text>
    <Text
      style={[
        styles.tabLabel,
        active && { color: COLORS.primary },
      ]}
    >
      {label}
    </Text>
  </View>
);

/* =======================
   STYLES
======================= */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: 16,
    paddingBottom: 100,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: COLORS.textPrimary,
  },

  search: {
    height: 48,
    color: COLORS.textPrimary,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },

  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  actionBtn: {
    flex: 1,
    height: 44,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontWeight: '500',
  },

  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: COLORS.border,
  },
  tab: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 11,
    color: COLORS.muted,
  },
});

export default LabourAllJobs;
