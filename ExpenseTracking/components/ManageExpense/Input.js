import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

export default function Input({label, style, textInputConfig, isValid}){

    const inputStyles = [styles.input];

    //If input is configured to be multiline, add multiline styling
    if (textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline);
    }

    if (!isValid){
        inputStyles.push(styles.invalidInput);
    }
    
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, !isValid ? styles.invalidLabel: '']}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    }, 
    label: {
        fontSize: 12,
        color: Colors.primary100,
        marginBottom: 2,
        fontFamily: 'fira-sans-light'
    },
    input: {
        backgroundColor: Colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        fontFamily: 'fira-sans-light',
        marginBottom: 5
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: Colors.error
    },
    invalidInput: {
        backgroundColor: Colors.lightError
    }
});
