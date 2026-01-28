import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import COLORS from '../../assets/images/theme/colors';
/* =======================
   DESIGN TOKENS
   ======================= */


/* =======================
   TYPES & MOCK DATA
   ======================= */
const JOB_DATA = {
    title: 'Construction Helper',
    company: 'Sharma Builders',
    rating: '4.2',
    reviews: '24 reviews',
    location: 'Sector 18, Gurugram',
    distance: '(2.5 km)',
    date: '15 Sept, 2023',
    duration: '5 days',
    time: '9:00 AM - 6:00 PM',
    description:
        'We need a construction helper for our residential building project. Experience in mixing cement, carrying materials, and assisting masons is required. Food and tea provided on site.',
    skills: ['Material Handling', 'Cement Mixing', 'Basic Tools Usage'],
    wage: '₹700 /day',
    paymentTerms: 'Paid daily after work',
};

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

const LabourJobApply: React.FC = () => {
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
    const handleApply = () => {
        Alert.alert('Apply', 'Application flow started');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Job Details</Text>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Card 1: Job Info */}
                    <View style={styles.card}>
                        <View style={styles.jobHeadingRow}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.jobTitle}>{JOB_DATA.title}</Text>
                                <Text style={styles.companyName}>{JOB_DATA.company}</Text>
                            </View>
                            <View style={styles.verifiedBadge}>
                                <Text style={styles.verifiedText}>Verified</Text>
                            </View>
                        </View>

                        <View style={styles.ratingRow}>
                            <Text style={styles.stars}>⭐⭐⭐⭐☆</Text>
                            <Text style={styles.ratingText}>
                                {JOB_DATA.rating} • {JOB_DATA.reviews}
                            </Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.icon}>📍</Text>
                            <Text style={styles.infoText}>
                                {JOB_DATA.location} <Text style={styles.mutedText}>{JOB_DATA.distance}</Text>
                            </Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Text style={styles.icon}>📅</Text>
                            <Text style={styles.infoText}>
                                {JOB_DATA.date} • {JOB_DATA.duration}
                            </Text>
                        </View>

                        <View style={styles.timeRow}>
                            <View style={styles.timeWrapper}>
                                <Text style={styles.icon}>🕒</Text>
                                <Text style={styles.infoText}>{JOB_DATA.time}</Text>
                            </View>
                            <TouchableOpacity style={styles.applyButtonSmall} onPress={handleApply}>
                                <Text style={styles.applyButtonText}>Apply for Job</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Card 2: Description & Skills */}
                    <View style={styles.card}>
                        <Text style={styles.sectionTitle}>Job Description</Text>
                        <Text style={styles.descriptionText}>{JOB_DATA.description}</Text>

                        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Required Skills</Text>
                        <View style={styles.skillsContainer}>
                            {JOB_DATA.skills.map((skill, index) => (
                                <View key={index} style={styles.skillChip}>
                                    <Text style={styles.skillText}>{skill}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Card 3: Wage */}
                    <View style={styles.card}>
                        <View style={styles.wageRow}>
                            <View>
                                <Text style={styles.sectionTitle}>Daily Wage</Text>
                                <Text style={styles.paymentTerms}>{JOB_DATA.paymentTerms}</Text>
                            </View>
                            <Text style={styles.wageAmount}>{JOB_DATA.wage}</Text>
                        </View>
                    </View>

                    {/* Card 4: Safety */}
                    <View style={styles.card}>
                        <View style={styles.safetyHeader}>
                            <Text style={styles.safetyIcon}>🛡️</Text>
                            <Text style={styles.sectionTitle}>Safety Measures</Text>
                        </View>
                        <Text style={styles.safetyText}>
                            This employer provides safety equipment and follows standard safety protocols.
                        </Text>
                        <View style={styles.verifiedByRow}>
                            <Text style={styles.checkIcon}>✓</Text>
                            <Text style={styles.verifiedByText}>Verified by BharatWork</Text>
                        </View>
                    </View>
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
            </View>
        </SafeAreaView>
    );
};

const NavIcon = ({ icon, label, active }: { icon: string; label: string; active?: boolean }) => (
    <View style={styles.navItem}>
        <View style={[styles.navIconContainer, active && styles.navIconActive]}>
            <Text style={[styles.navIcon, active && { color: COLORS.primary }]}>{icon}</Text>
        </View>
        <Text style={[styles.navLabel, active && { color: COLORS.primary }]}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    // Job Info Card Styles
    jobHeadingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    titleContainer: {
        flex: 1,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 4,
    },
    companyName: {
        fontSize: 14,
        color: COLORS.textSecondary,
    },
    verifiedBadge: {
        backgroundColor: COLORS.successBg,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    verifiedText: {
        color: COLORS.success,
        fontSize: 10,
        fontWeight: 'bold',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    stars: {
        fontSize: 14,
        marginRight: 6,
        color: '#FBBF24', // Star yellow
    },
    ratingText: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        fontSize: 16,
        marginRight: 8,
        width: 20,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 14,
        color: COLORS.textPrimary,
    },
    mutedText: {
        color: COLORS.muted,
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    timeWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    applyButtonSmall: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    applyButtonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14,
    },

    // Description Card Styles
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 14,
        color: COLORS.textSecondary,
        lineHeight: 22,
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    skillChip: {
        backgroundColor: COLORS.chipBg,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
    },
    skillText: {
        fontSize: 12,
        color: COLORS.textPrimary,
    },

    // Wage Card Styles
    wageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    paymentTerms: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    wageAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.success,
    },

    // Safety Card Styles
    safetyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    safetyIcon: {
        fontSize: 18,
        marginRight: 8,
        color: '#3B82F6', // Blue shield
    },
    safetyText: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginBottom: 12,
        lineHeight: 20,
    },
    verifiedByRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkIcon: {
        fontSize: 14,
        color: '#3B82F6',
        marginRight: 6,
    },
    verifiedByText: {
        fontSize: 12,
        color: '#3B82F6',
        fontWeight: '500',
    },

    // Nav
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        justifyContent: 'space-around',
    },
    navItem: {
        alignItems: 'center',
    },
    navIconContainer: {
        marginBottom: 4,
    },
    navIconActive: {
        // active state styling
    },
    navIcon: {
        fontSize: 20,
        color: COLORS.muted,
    },
    navLabel: {
        fontSize: 10,
        color: COLORS.muted,
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

export default LabourJobApply;
