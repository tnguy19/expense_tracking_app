import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { useLayoutEffect, useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import EditContext from '../context/EditContext';
import { ExpenseContext } from '../context/ExpenseContext';
import ButtonIcon from '../components/ButtonIcon';
import { deleteExpense, storeExpense, updateExpense } from '../utils/http';
import LoadingOverlay from '../components/LoadingOverlay';
import ErrorOverlay from '../components/ErrorOverlay';

export default function EditExpenseModal() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState();
    const navigation = useNavigation();
    const route = useRoute();
    const { isEditing, setIsEditing } = useContext(EditContext)
    const expenseContext = useContext(ExpenseContext);
    const editedExpenseId = route.params?.expenseId;

    //find the selected expense if it already exists/was alr added
    const selectedExpense = expenseContext.expenses.find(expense => expense.id === editedExpenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setIsEditing(false);
            };
        }, [setIsEditing])
    );

    async function deleteExpenseHandler() {
        setIsSubmitting(true);
        try{
            await deleteExpense(editedExpenseId); //update to backend
            expenseContext.deleteExpense(editedExpenseId); //update locally to expense context
            navigation.goBack();
        } catch(error){
            setError('Could not delete expense, please try again later!');
        }
        setIsSubmitting(false);
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true);
        try {
            if (isEditing) {
                //console.log(expenseData);
                expenseContext.updateExpense(editedExpenseId, expenseData); //update locally to expense context
                await updateExpense(editedExpenseId, expenseData); //update to backend
            } else {
                const id = await storeExpense(expenseData);
                expenseContext.addExpense({...expenseData, id: id });
            }
            navigation.goBack();
        } catch (error) {
            setError('Could not save expense, please try again later!');
            setIsSubmitting(false);
        }
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function errorHandler(){
        setError(null); //reset error to null to clear the error currently raised
      }

    if (error && !isSubmitting){
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    if (isSubmitting){
        return <LoadingOverlay/>
    }

    return (
        <View style={styles.screenContainer}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                defaultValues={selectedExpense}
            />
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <ButtonIcon
                        icon="trash"
                        color={Colors.error}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.primary400,
        paddingTop: 20
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: Colors.primary200,
        alignItems: 'center',
      }
});