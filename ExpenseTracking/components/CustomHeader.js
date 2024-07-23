import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AddButton from './AddButton';
import Colors from '../constants/colors';

export default function CustomHeader({ title }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
                <AddButton />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.primary100,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        paddingVertical: 10,
        paddingHorizontal: 22,
    },
    headerTitle: {
        fontSize: 18,
        color: 'black', // Adjust the color as needed
    },
});
