import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AddButton from './AddButton';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ title, customStyle, buttonVisible }) {
    const navigation = useNavigation();

    function handleAdd(){
        navigation.navigate('Edit Expense');
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.headerContainer, customStyle]}>
                <Text style={styles.headerTitle}>{title}</Text>
                {buttonVisible && <AddButton onPress={handleAdd} />}
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
        color: 'black',
        fontFamily: 'fira-sans'
    },
});
