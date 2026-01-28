import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const COLORS = {
    white: '#FFFFFF',
    primary: '#F08A33',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    success: '#16A34A',
    muted: '#9CA3AF',
    border: '#E5E7EB',
};

export interface JobCardProps {
    title: string;
    company: string;
    rating: string;
    pay: string;
    distance: string;
    urgent?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    company,
    rating,
    pay,
    distance,
    urgent,
}) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        {/* Header */}
        <View style={styles.cardHeader}>
            <View>
                <Text style={styles.jobTitle}>{title}</Text>
                <Text style={styles.company}>{company}</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
                {urgent && (
                    <View style={styles.urgent}>
                        <Text style={styles.urgentText}>Urgent</Text>
                    </View>
                )}
                <Text style={styles.pay}>{pay}</Text>
            </View>
        </View>

        {/* Rating & Distance */}
        <View style={styles.metaRow}>
            <Text style={styles.rating}>⭐⭐⭐⭐☆ {rating}</Text>
            <Text style={styles.distance}>📍 {distance}</Text>
        </View>

        {/* Footer */}
        <View style={styles.cardFooter}>
            <Text style={styles.verified}>✅ Verified Employer</Text>
            <Text style={styles.details}>View Details</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    jobTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.textPrimary,
    },
    company: {
        fontSize: 12,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    pay: {
        fontWeight: '700',
        color: COLORS.success,
    },
    urgent: {
        backgroundColor: '#FEE2E2',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        marginBottom: 4,
    },
    urgentText: {
        fontSize: 10,
        color: '#B91C1C',
        fontWeight: '600',
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    rating: {
        fontSize: 12,
        color: COLORS.textPrimary,
    },
    distance: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        paddingTop: 12,
    },
    verified: {
        fontSize: 12,
        color: COLORS.success,
        fontWeight: '500',
    },
    details: {
        fontSize: 12,
        color: COLORS.primary,
        fontWeight: '600',
    },
});

export default JobCard;
