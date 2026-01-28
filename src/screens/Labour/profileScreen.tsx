import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import COLORS from '../../assets/images/theme/colors';

const Tab = ({
    label,
    icon,
    active,
}: {
    label: string;
    icon: string;
    active?: boolean;
}) => (
    <View style={styles.tab}>
        <Text style={{ color: active ? COLORS.primary : COLORS.textMuted }}>
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

export default function LabourProfile() {
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
    <SafeAreaView style={styles.root}>
      {/* HEADER */}
      <Text style={styles.header}>My Profile</Text>

      {/* AVATAR */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarIcon}>👤</Text>

          <TouchableOpacity style={styles.cameraBtn}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Ram Kumar</Text>
      </View>

      {/* INFO CARDS */}
      <InfoCard icon="📞" title="Phone" value="+91 9876543210" />
      <InfoCard icon="🧰" title="Skill" value="Mason" />
      <InfoCard icon="⏱" title="Experience" value="3 years" />

      {/* DOCUMENTS */}
      <View style={styles.documentsSection}>
        <Text style={styles.sectionTitle}>Documents</Text>

        <DocumentRow
          title="Aadhaar"
          status="Uploaded"
          success
        />

        <DocumentRow
          title="PAN"
          status="Not Added"
          success={false}
        />
      </View>

      {/* Bottom Tab Bar */}
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
}

/* ================= COMPONENTS ================= */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <View>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

function DocumentRow({
  title,
  status,
  success,
}: {
  title: string;
  status: string;
  success: boolean;
}) {
  return (
    <View style={styles.docRow}>
      <Text style={styles.docIcon}>📄</Text>
      <Text style={styles.docTitle}>{title}</Text>

      <View
        style={[
          styles.docStatus,
          success ? styles.docSuccess : styles.docError,
        ]}
      >
        <Text
          style={[
            styles.docStatusText,
            success ? styles.successText : styles.errorText,
          ]}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

function TabItem({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <View style={styles.tabItem}>
      <Text
        style={[
          styles.tabText,
          active && styles.tabActive,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

/* ===================== STYLES ===================== */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9F2DD",
    padding: 16,
  },

  header: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },

  avatarSection: {
    alignItems: "center",
    marginBottom: 18,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  avatarIcon: {
    fontSize: 32,
    color: "#999",
  },

  cameraBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2D7CFF",
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  cameraIcon: {
    color: "#FFF",
    fontSize: 12,
  },

  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  infoCard: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  infoIcon: {
    fontSize: 18,
  },

  infoTitle: {
    fontSize: 12,
    color: "#777",
  },

  infoValue: {
    fontSize: 14,
    fontWeight: "600",
  },

  documentsSection: {
    marginTop: 16,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  docRow: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  docIcon: {
    marginRight: 10,
  },

  docTitle: {
    flex: 1,
    fontWeight: "500",
  },

  docStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  docSuccess: {
    backgroundColor: "#E6F6EC",
  },

  docError: {
    backgroundColor: "#FDEAEA",
  },

  docStatusText: {
    fontSize: 11,
    fontWeight: "600",
  },

  successText: {
    color: "#2E7D32",
  },

  errorText: {
    color: "#D32F2F",
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#EEE",
    paddingVertical: 10,
  },

  tabItem: {
    flex: 1,
    alignItems: "center",
  },

  tabText: {
    fontSize: 11,
    color: "#999",
  },

  tabActive: {
    color: "#FF7722",
    fontWeight: "600",
  },
  tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: COLORS.border,
    },
    tab: {
        alignItems: 'center',
    },
    tabLabel: {
        fontSize: 11,
        color: COLORS.textMuted,
    },
});
