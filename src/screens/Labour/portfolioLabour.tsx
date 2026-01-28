import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Switch,
    Animated,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import COLORS from '../../assets/images/theme/colors';
const Stat = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.stat}>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
    </View>
);

const JobCard = ({
    title,
    company,
    pay,
    distance,
}: {
    title: string;
    company: string;
    pay: string;
    distance: string;
}) => (
    <View style={styles.jobCard}>
        <View>
            <Text style={styles.jobTitle}>{title}</Text>
            <Text style={styles.jobCompany}>{company}</Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.jobPay}>{pay}</Text>
            <Text style={styles.jobDistance}>{distance}</Text>
        </View>
    </View>
);

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


const LabourHome: React.FC = () => {
    
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

    const handleLabourNotifications = () => {
        navigation.replace('LabourJobNotification');
      }
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <SafeAreaView style={styles.safe}>
            <Animated.ScrollView
                contentContainerStyle={styles.container}
                style={{ opacity: fadeAnim }}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.hello}>Hello, Rajesh</Text>
                        <Text style={styles.welcome}>Welcome back!</Text>
                    </View>

                
                    <View style={styles.headerRight}>
                        <Switch value={false} />
                        <TouchableOpacity onPress={handleLabourNotifications}>
                        <Text style={styles.bell}>🔔</Text></TouchableOpacity>
                    </View>
                
                </View>

                {/* Offline Alert */}
                <View style={styles.alert}>
                    <Text style={styles.alertText}>
                        ⚠️ Offline mode active. Job alerts will not arrive via SMS.
                    </Text>
                </View>

                {/* Profile Card */}
                <View style={styles.card}>
                    <View style={styles.profileRow}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                            style={styles.avatar}
                        />

                        <View style={{ flex: 1 }}>
                            <View style={styles.nameRow}>
                                <Text style={styles.name}>Rajesh Kumar</Text>
                                <View style={styles.verified}>
                                    <Text style={styles.verifiedText}>Verified</Text>
                                </View>
                            </View>

                            <Text style={styles.rating}>⭐⭐⭐⭐☆ 4.5</Text>
                            <Text style={styles.skill}>Construction, Electrical</Text>
                        </View>
                    </View>

                    <View style={styles.statsRow}>
                        <Stat label="Daily Wage" value="₹600 - ₹800" />
                        <Stat label="Experience" value="5 years" />
                        <Stat label="Jobs Completed" value="48" />
                    </View>
                </View>

                {/* Jobs Available */}
                <Text style={styles.sectionTitle}>Jobs Available</Text>

                {/* AI Match */}
                <View style={styles.aiCard}>
                    <Text style={styles.aiIcon}>🎤</Text>
                    <View>
                        <Text style={styles.aiTitle}>New AI Job Match!</Text>
                        <Text style={styles.aiSub}>
                            3 new construction jobs near you
                        </Text>
                    </View>
                </View>

                {/* Job Cards */}
                <JobCard
                    title="Construction Helper"
                    company="Sharma Builders"
                    pay="₹700/day"
                    distance="2.5 km away"
                />

                <JobCard
                    title="Electrical Work"
                    company="Green City Apartments"
                    pay="₹800/day"
                    distance="4.1 km away"
                />

                {/* View All */}
                <TouchableOpacity style={styles.viewAll} onPress={handleLabourJobs}>
                    <Text style={styles.viewAllText}>View All Jobs</Text>
                </TouchableOpacity>
            </Animated.ScrollView>

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
};




export default LabourHome;


const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        padding: 16,
        paddingBottom: 100,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hello: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.textPrimary,
    },
    welcome: {
        fontSize: 13,
        color: COLORS.textSecondary,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    bell: {
        fontSize: 18,
    },

    alert: {
        backgroundColor: COLORS.warningBg,
        borderRadius: 10,
        padding: 12,
        marginVertical: 16,
    },
    alertText: {
        fontSize: 12,
        color: COLORS.textPrimary,
    },

    card: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
        padding: 16,
        marginBottom: 20,
    },

    profileRow: {
        flexDirection: 'row',
        gap: 12,
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 27,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    name: {
        fontWeight: '700',
        fontSize: 15,
    },
    verified: {
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 8,
        borderRadius: 10,
    },
    verifiedText: {
        fontSize: 10,
        color: COLORS.success,
    },
    rating: {
        fontSize: 12,
        marginTop: 2,
    },
    skill: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    stat: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 11,
        color: COLORS.textSecondary,
    },
    statValue: {
        fontWeight: '600',
        fontSize: 13,
    },

    sectionTitle: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 12,
    },

    aiCard: {
        flexDirection: 'row',
        gap: 12,
        backgroundColor: COLORS.white,
        borderRadius: 14,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: COLORS.primary,
        marginBottom: 16,
    },
    aiIcon: {
        fontSize: 20,
    },
    aiTitle: {
        fontWeight: '700',
    },
    aiSub: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },

    jobCard: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    jobTitle: {
        fontWeight: '700',
    },
    jobCompany: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    jobPay: {
        fontWeight: '700',
        color: COLORS.success,
    },
    jobDistance: {
        fontSize: 11,
        color: COLORS.textSecondary,
    },

    viewAll: {
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    viewAllText: {
        color: COLORS.primary,
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
});
