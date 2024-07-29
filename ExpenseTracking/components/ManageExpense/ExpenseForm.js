import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import { useState } from 'react';

export default function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        name: ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        //note: enteredAmount provided automatically when use in OnchangeText prop
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label='Amount'
                    textInputConfig={{
                        inputMode: 'decimal',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }} />
                <Input
                    style={styles.rowInput}
                    label='Date'
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date
                    }} />
            </View>
            <Input
                label='Description'
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: inputChangedHandler.bind(this, 'name'),
                    value: inputValues.date
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 20,
        marginTop: 10
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: { //Custom style to be applied only to input and labels in rows
        flex: 1
    }
});