import React, { useState } from 'react'
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Pressable,
    ScrollView,
    SafeAreaView,
} from 'react-native'

import Feather, { FeatherIconName } from '@react-native-vector-icons/feather'
import Ionicons from '@react-native-vector-icons/ionicons'
import COLORS from '../../assets/images/theme/colors'
import { useNavigation, useRoute } from '@react-navigation/native';
import LabourHome from './portfolioLabour'

type ViewState = 'CONFIRM' | 'SUCCESS' | 'NONE'

const ORANGE = '#FF7A1A'
const CREAM_BG = '#FFFDF5'

export default function LabourJobNotification() {
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
                
    const [viewState, setViewState] = useState<ViewState>('CONFIRM')

    if (viewState === 'NONE') {
        return null // Or navigate back
    }

    return (
        <View style={styles.root}>
            {/* CONFIRM MODAL - Original Design */}
            <Modal transparent visible={viewState === 'CONFIRM'} animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Confirm Job Acceptance?</Text>
                            <Pressable onPress={() => setViewState('NONE')}>
                                <Text style={styles.close}>✕</Text>
                            </Pressable>
                        </View>

                        <InfoRow icon="credit-card" label="Wage" value="₹700 / day" />
                        <InfoRow icon="map-pin" label="Location" value="Sector 18, Gurugram" />
                        <InfoRow icon="calendar" label="Duration" value="5 day" />
                        <InfoRow icon="clock" label="Start" value="Today, 9:00 AM" />


                        <View style={styles.actions}>
                            <Pressable style={styles.cancelBtn} onPress={() => setViewState('NONE')}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </Pressable>

                            <Pressable
                                style={styles.acceptBtn}
                                onPress={() => setViewState('SUCCESS')}
                            >
                                <Text style={styles.acceptText}>Accept Now</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* JOB CONFIRMED - Full Screen New Design */}
            <Modal visible={viewState === 'SUCCESS'} animationType="slide">
                <SafeAreaView style={styles.successRoot}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>

                        {/* Header Section */}
                        <View style={styles.successHeader}>
                            <View style={styles.checkCircleLarge}>
                                <Feather name="check" size={48} color="#2ECC71" />
                            </View>
                            <Text style={styles.successTitleMain}>Job Confirmed!</Text>
                            <Text style={styles.successSubtitle}>You have successfully applied for this job</Text>
                        </View>

                        {/* Job Details Card */}
                        <View style={styles.detailsCard}>
                            <Text style={styles.cardTitle}>Job Details</Text>

                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Position</Text>
                                <Text style={styles.detailValue}>Construction Helper</Text>
                            </View>

                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Employer</Text>
                                <Text style={styles.detailValue}>Sharma Builders</Text>
                            </View>

                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Daily Wage</Text>
                                <Text style={styles.detailHighlight}>₹700/day</Text>
                            </View>

                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Start Date</Text>
                                <View style={styles.valueWithIcon}>
                                    <Feather name="calendar" size={14} color="#333" style={{ marginRight: 6 }} />
                                    <Text style={styles.detailValue}>15 Sept, 2023</Text>
                                </View>
                            </View>

                            <View style={styles.detailRow}>
                                <Text style={styles.detailLabel}>Timing</Text>
                                <Text style={styles.detailValue}>9:00 AM - 6:00 PM</Text>
                            </View>
                        </View>

                        {/* Contact Card */}
                        <View style={styles.detailsCard}>
                            <Text style={styles.cardTitle}>Contact Employer</Text>
                            <Text style={styles.cardSub}>You can contact the employer for more details</Text>

                            <View style={styles.contactActions}>
                                <Pressable style={styles.contactBtnOutline}>
                                    <Ionicons name="chatbubble-outline" size={20} color={ORANGE} style={{ marginRight: 8 }} />
                                    <Text style={styles.contactBtnTextOutline}>Message</Text>
                                </Pressable>

                                <Pressable style={styles.contactBtnFill}>
                                    <Ionicons name="call-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
                                    <Text style={styles.contactBtnTextFill}>Call</Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={{ height: 30 }} />

                        {/* Bottom Actions */}
                        <Pressable style={styles.homeBtn} onPress={handleLabourHome}>
                            <Text style={styles.homeBtnText}>Go to Home</Text>
                        </Pressable>

                        <Pressable style={styles.findJobsBtn} onPress={handleLabourJobs}>
                            <Text style={styles.findJobsText}>Find More Jobs</Text>
                        </Pressable>

                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

/* ---------- Sub-component ---------- */

function InfoRow({
    icon,
    label,
    value,
}: {
    icon: FeatherIconName
    label: string
    value: string
}) {
    return (
        <View style={styles.row}>
            <View style={styles.iconBox}>
                <Feather name={icon} size={20} color="#0A58FF" />
            </View>

            <View>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    )
}


/* ---------- Styles ---------- */

const styles = StyleSheet.create({
    root: { flex: 1 },

    // Modal Overlay
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Confirm Card
    card: {
        width: '88%',
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    close: {
        fontSize: 18,
        color: '#666',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
    },
    iconBox: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#EEF3FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    label: { fontSize: 12, color: '#888' },
    value: { fontSize: 14, fontWeight: '500' },
    actions: { flexDirection: 'row', marginTop: 20 },
    cancelBtn: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        marginRight: 10,
        alignItems: 'center',
    },
    cancelText: { color: '#555', fontWeight: '500' },
    acceptBtn: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: ORANGE,
        alignItems: 'center',
    },
    acceptText: { color: '#fff', fontWeight: '600' },

    // --- Success Screen Styles ---
    successRoot: {
        flex: 1,
        backgroundColor: CREAM_BG,
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    successHeader: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    checkCircleLarge: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#E6F9EF', // Light green
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#D4F5E2',
    },
    successTitleMain: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    successSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
    },

    // Details Card
    detailsCard: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 16,
    },
    cardSub: {
        fontSize: 13,
        color: '#6B7280',
        marginBottom: 16,
        marginTop: -10,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 14,
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 14,
        color: '#6B7280',
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
    },
    detailHighlight: {
        fontSize: 14,
        fontWeight: '600',
        color: '#22C55E', // Green
    },
    valueWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    // Contact Buttons
    contactActions: {
        flexDirection: 'row',
        gap: 12,
    },
    contactBtnOutline: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: ORANGE,
        backgroundColor: '#fff',
    },
    contactBtnFill: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: ORANGE,
    },
    contactBtnTextOutline: {
        color: ORANGE,
        fontWeight: '600',
        fontSize: 14,
    },
    contactBtnTextFill: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },

    // Bottom Buttons
    homeBtn: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: ORANGE,
        alignItems: 'center',
        marginBottom: 16,
    },
    homeBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    findJobsBtn: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: ORANGE,
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 20,
    },
    findJobsText: {
        color: ORANGE,
        fontSize: 16,
        fontWeight: '600',
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
})
