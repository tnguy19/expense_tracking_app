import { View, Text, StyleSheet } from 'react-native';
import PriceBox from './PriceBox';

export default function Expense() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>
                    A book
                </Text>
                <Text style={styles.itemDate}>22-07-2024</Text>
            </View>
            <View style={styles.buttonContainer}>
                <PriceBox value='18' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        height: 90,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D0B8A8',
        borderRadius: 4,
        paddingHorizontal: 22,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    itemName: {
        fontWeight: 'bold',
        fontFamily: 'fira-sans-bold'
    },
    itemDate:{
        fontFamily: 'fira-sans-light'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
    }
});