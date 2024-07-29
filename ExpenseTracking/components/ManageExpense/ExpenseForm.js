import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import CustomButton from '../CustomButton';
import { useContext } from 'react';
import EditContext from '../../context/EditContext';
import Colors from '../../constants/colors';

export default function ExpenseForm({ onCancel, onSubmit, defaultValues }) {

    const { isEditing } = useContext(EditContext)

    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
            isValid: true
        },
        name: {
            value: defaultValues ? defaultValues.name : '',
            isValid: true
        }
    });  //note: convert all values to strings to be displayed

    function inputChangedHandler(inputIdentifier, enteredValue) {
        //note: enteredAmount provided automatically when use in OnchangeText prop
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value, //the + sign converts string to number!!
            date: new Date(inputs.date.value),
            name: inputs.name.value
        }

        //validate
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = !isNaN(expenseData.date.getTime());
        const nameIsValid = expenseData.name.trim().length > 0; //check non empty name

        if (!amountIsValid || !nameIsValid || !dateIsValid) {
            //Alert.alert('Invalid Input', 'Please check your input values!');
            setInputs((currentInputs) => {
                return {
                    amount: { value: currentInputs.amount.value, isValid: amountIsValid },
                    date: { value: currentInputs.date.value, isValid: dateIsValid },
                    name: { value: currentInputs.name.value, isValid: nameIsValid }
                }
            })
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.name.isValid;

    return (
        <View style={styles.rootContainer}>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label='Amount'
                    isValid={inputs.amount.isValid}
                    textInputConfig={{
                        inputMode: 'decimal',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }} />
                <Input
                    style={styles.rowInput}
                    label='Date'
                    isValid={inputs.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }} />
            </View>
            <Input
                label='Description'
                isValid={inputs.name.isValid}
                textInputConfig={{
                    multiline: true,
                    autoCorrect: false,
                    onChangeText: inputChangedHandler.bind(this, 'name'),
                    value: inputs.name.value
                }}
            />
            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>}
            <View style={styles.buttonContainer}>
                <CustomButton
                    title='Cancel'
                    onPress={onCancel} />
                <CustomButton
                    title={isEditing ? 'Update' : 'Add'}
                    onPress={submitHandler} />
            </View>
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    errorText: {
        textAlign: 'center',
        color: Colors.error,
        alignItems: 'center',
        margin: 10,
        fontFamily: 'fira-sans-light'
    }
});