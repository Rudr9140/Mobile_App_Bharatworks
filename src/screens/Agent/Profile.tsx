import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function AgentProfile() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Orange Card */}
      <View style={styles.topCard}>
        <View>
          <Text style={styles.greeting}>नमस्ते,</Text>
          <Text style={styles.name}>राजेश कुमार</Text>
          <Text style={styles.phone}>+91 98765 43210</Text>
        </View>

        <View style={styles.agentIdBox}>
          <Text style={styles.agentIdLabel}>Agent ID</Text>
          <Text style={styles.agentId}>A-7290</Text>
        </View>
      </View>

      {/* Rank Card */}
      <View style={styles.rankCard}>
        <View style={styles.rankIcon} />
        <View style={styles.rankInfo}>
          <Text style={styles.rankText}>🥇 Gold Agent</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>
      </View>

      {/* Primary Actions */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("OnboardNewWorker")}
      >
        <Text style={styles.primaryText}>
          नया वर्कर ऑनबोर्ड करें{"\n"}Onboard New Worker
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("BulkOnboarding")}
      >
        <Text style={styles.secondaryText}>
          बल्क ऑनबोर्डिंग{"\n"}Bulk Onboarding (Offline)
        </Text>
      </TouchableOpacity>

      {/* Stats Grid */}
      <View style={styles.statsGrid}>
        <View style={[styles.statCard, styles.green]}>
          <Text style={styles.statTitle}>आज ऑनबोर्ड</Text>
          <Text style={styles.statSub}>Today</Text>
          <Text style={styles.statValue}>12</Text>
        </View>

        <View style={[styles.statCard, styles.blue]}>
          <Text style={styles.statTitle}>कुल वर्कर्स</Text>
          <Text style={styles.statSub}>Total</Text>
          <Text style={styles.statValue}>347</Text>
        </View>

        <View style={[styles.statCard, styles.purple]}>
          <Text style={styles.statTitle}>कमाई</Text>
          <Text style={styles.statSub}>Earnings</Text>
          <Text style={styles.statValue}>₹8,450</Text>
        </View>

        <View style={[styles.statCard, styles.orange]}>
          <Text style={styles.statTitle}>पेंडिंग</Text>
          <Text style={styles.statSub}>Pending</Text>
          <Text style={styles.statValue}>5</Text>
        </View>
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.lightCard}
          onPress={() => navigation.navigate("WorkersList")}
        >
          <Text style={styles.lightTitle}>वर्कर्स देखें</Text>
          <Text style={styles.lightSub}>View Workers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lightCard}
          onPress={() => navigation.navigate("IncentiveTracking")}
        >
          <Text style={styles.lightTitle}>इंसेंटिव हिस्ट्री</Text>
          <Text style={styles.lightSub}>Incentive History</Text>
        </TouchableOpacity>
      </View>

      {/* Agent Tip */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>💡 Agent Tip</Text>
        <Text style={styles.tipText}>
          Verify worker details carefully to maintain your trust level and earn
          more incentives!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF7E6",
  },

  container: {
    paddingBottom: 30,
  },

  /* Top Card */
  topCard: {
    backgroundColor: "#FF7F2A",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  greeting: {
    color: "#FFF",
    fontSize: 16,
  },

  name: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
  },

  phone: {
    color: "#FFF",
    marginTop: 6,
  },

  agentIdBox: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 14,
    borderRadius: 16,
    alignItems: "center",
  },

  agentIdLabel: {
    color: "#FFF",
    fontSize: 12,
  },

  agentId: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },

  /* Rank Card */
  rankCard: {
    backgroundColor: "#FFFBEF",
    margin: 20,
    padding: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
  },

  rankIcon: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#F4B400",
    marginRight: 16,
  },

  rankInfo: {
    flex: 1,
  },

  rankText: {
    fontSize: 16,
    fontWeight: "600",
  },

  progressBar: {
    height: 8,
    backgroundColor: "#DDD",
    borderRadius: 6,
    marginTop: 8,
  },

  progressFill: {
    width: "70%",
    height: "100%",
    backgroundColor: "#F4B400",
    borderRadius: 6,
  },

  /* Buttons */
  primaryButton: {
    backgroundColor: "#E88333",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 16,
  },

  primaryText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "#28306E",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
  },

  secondaryText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  /* Stats */
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  statCard: {
    width: "48%",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },

  green: { backgroundColor: "#1DB954" },
  blue: { backgroundColor: "#1F6BFF" },
  purple: { backgroundColor: "#9B3DFF" },
  orange: { backgroundColor: "#FF6A00" },

  statTitle: {
    color: "#FFF",
    fontSize: 14,
  },

  statSub: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 4,
  },

  statValue: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  /* Bottom Cards */
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  lightCard: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    alignItems: "center",
  },

  lightTitle: {
    fontSize: 14,
    fontWeight: "600",
  },

  lightSub: {
    fontSize: 12,
    marginTop: 6,
  },

  /* Tip */
  tipCard: {
    backgroundColor: "#FFF2CC",
    margin: 20,
    padding: 16,
    borderRadius: 16,
  },

  tipTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },

  tipText: {
    fontSize: 14,
    color: "#D35400",
  },
});