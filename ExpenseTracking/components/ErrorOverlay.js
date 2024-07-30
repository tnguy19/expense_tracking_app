import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import CustomButton from './CustomButton';

export default function ErrorOverlay({message, onConfirm}){
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred</Text>
            <Text style={styles.text}>{message}</Text>
            <CustomButton onPress={onConfirm} title='Okay'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: Colors.primary400
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'white',
        fontFamily: 'fira-sans-light'
    },
    title: {
        fontSize: 20,
        fontFamily: 'fira-sans-bold'
    }
})