
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * UI States
 */
type TxState = "IDLE" | "ENTER_UPI" | "SUCCESS";

export default function LabourEarnings() {
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
  const [txState, setTxState] = useState<TxState>("IDLE");
  const [upi, setUpi] = useState("");
  const AMOUNT = 1400;

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.heading}>Earnings</Text>

      {/* WALLET CARD */}
      <View style={styles.walletCard}>
        <Text style={styles.walletLabel}>Wallet Balance</Text>
        <Text style={styles.walletAmount}>₹2,600</Text>

        <View style={styles.walletRow}>
          <Text style={styles.walletSub}>Available: ₹1400</Text>
          <Text style={styles.walletSub}>Pending: ₹1200</Text>
        </View>
      </View>

      {/* TRANSACTION AREA */}
      {txState === "IDLE" && (
        <TouchableOpacity
          style={styles.withdrawButton}
          onPress={() => setTxState("ENTER_UPI")}
        >
          <Text style={styles.withdrawText}>Withdraw to UPI</Text>
        </TouchableOpacity>
      )}

      {txState === "ENTER_UPI" && (
        <View style={styles.upiBox}>
          <Text style={styles.upiTitle}>Enter UPI ID</Text>

          <TextInput
            style={styles.upiInput}
            placeholder="yourname@upi"
            placeholderTextColor="#9AA3B2"
            value={upi}
            onChangeText={setUpi}
          />

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => {
                setUpi("");
                setTxState("IDLE");
              }}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!upi}
              style={[
                styles.withdrawNowBtn,
                !upi && { opacity: 0.5 },
              ]}
              onPress={() => setTxState("SUCCESS")}
            >
              <Text style={styles.withdrawNowText}>Withdraw Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {txState === "SUCCESS" && (
        <View style={styles.successBox}>
          <Text style={styles.successAmount}>
            ₹{AMOUNT} Sent to your UPI ID
          </Text>
          <Text style={styles.successUpi}>{upi || "8726895960@upi"}</Text>

          <TouchableOpacity
            onPress={() => {
              setUpi("");
              setTxState("IDLE");
            }}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* MONTHLY SUMMARY */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryHeader}>
          <Text style={styles.summaryMonth}>September 2023</Text>
          <Text style={styles.summaryToggle}>Monthly</Text>
        </View>

        <Text style={styles.totalEarnings}>₹12,500</Text>
        <Text style={styles.growth}>+12% from last month</Text>

        <View style={styles.metricsRow}>
          <Metric label="Jobs Completed" value="15" />
          <Metric label="Avg. Daily Rate" value="₹720" />
          <Metric label="Working Days" value="18" />
        </View>
      </View>
    </SafeAreaView>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
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

  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  walletCard: {
    backgroundColor: "#E97C30",
    borderRadius: 16,
    padding: 16,
  },

  walletLabel: {
    color: "#FFF",
    fontSize: 12,
  },

  walletAmount: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
    marginVertical: 6,
  },

  walletRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  walletSub: {
    color: "#FFF",
    fontSize: 11,
  },

  withdrawButton: {
    backgroundColor: "#2B336A",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 14,
  },

  withdrawText: {
    color: "#FFF",
    fontWeight: "600",
  },

  upiBox: {
    backgroundColor: "#2B336A",
    borderRadius: 14,
    padding: 14,
    marginTop: 14,
  },

  upiTitle: {
    color: "#FFF",
    fontSize: 12,
    marginBottom: 8,
  },

  upiInput: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  actionRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 10,
  },

  cancelBtn: {
    flex: 1,
    backgroundColor: "#E2E6EF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },

  cancelText: {
    fontWeight: "600",
  },

  withdrawNowBtn: {
    flex: 1,
    backgroundColor: "#FF7722",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },

  withdrawNowText: {
    color: "#FFF",
    fontWeight: "700",
  },

  successBox: {
    backgroundColor: "#2B336A",
    borderRadius: 16,
    padding: 20,
    marginTop: 14,
    alignItems: "center",
  },

  successAmount: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },

  successUpi: {
    color: "#C8CCFF",
    fontSize: 12,
    marginTop: 6,
  },

  doneText: {
    marginTop: 16,
    color: "#9AA3B2",
    fontWeight: "600",
  },

  summaryCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 18,
  },

  summaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  summaryMonth: {
    fontSize: 13,
    fontWeight: "600",
  },

  summaryToggle: {
    fontSize: 11,
    color: "#777",
  },

  totalEarnings: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 6,
  },

  growth: {
    color: "#14A44D",
    fontSize: 11,
    marginBottom: 12,
  },

  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  metric: {
    flex: 1,
    alignItems: "center",
  },

  metricValue: {
    fontSize: 14,
    fontWeight: "700",
  },

  metricLabel: {
    fontSize: 10,
    color: "#777",
    textAlign: "center",
    marginTop: 2,
  },
});
