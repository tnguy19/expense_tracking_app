import { View, Text, StyleSheet, Pressable } from 'react-native';
import PriceBox from './PriceBox';
import Colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import EditContext from '../../context/EditContext';
import { useContext } from 'react';
import {getFormattedDate} from '../../utils/date';

export default function Expense({id, name, amount, date}) {
    const navigation = useNavigation();
    const {setIsEditing} = useContext(EditContext)
    console.log(date);
    const dateData = new Date(date);

    function handlePress(){
        setIsEditing(true);
        navigation.navigate('Edit Expense', {
            expenseId: id
        });
    }

    return (
        <Pressable onPress={handlePress}>
        <View style={styles.rootContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>
                    {name}
                </Text>
                <Text style={styles.itemDate}>{getFormattedDate(dateData)}</Text> 
            </View>
            <View style={styles.buttonContainer}>
                <PriceBox value={amount} />
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
        marginBottom: 10
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