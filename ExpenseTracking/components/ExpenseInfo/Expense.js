import { View, Text, StyleSheet, Pressable } from 'react-native';
import PriceBox from './PriceBox';
import Colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';


export default function Expense() {
    const navigation = useNavigation();

    function handlePress(){
        navigation.navigate('Edit Modal') //Add more logic here to pass info
    }

    return (
        <Pressable onPress={handlePress}>
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
        </Pressable>
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
        fontFamily: 'fira-sans-bold',
        color: Colors.black
    },
    itemDate:{
        fontFamily: 'fira-sans-light',
        color: Colors.black
    },
    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
    }
});