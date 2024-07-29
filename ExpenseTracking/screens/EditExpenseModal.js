import {View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import {useLayoutEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import EditContext from '../context/EditContext';
import {ExpenseContext} from '../context/ExpenseContext';

export default function EditExpenseModal() {
    const navigation = useNavigation();
    const route = useRoute();
    const {isEditing, setIsEditing} = useContext(EditContext)
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

    function confirmHandler(expenseData){
        if (isEditing){
            console.log(expenseData); 
            expenseContext.updateExpense(editedExpenseId, expenseData)
        } else {
            expenseContext.addExpense(expenseData)
        }
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    return (
            <View style={styles.screenContainer}>
                <ExpenseForm
                    onCancel={cancelHandler} 
                    onSubmit={confirmHandler}
                    defaultValues={selectedExpense}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.primary400,
        paddingTop: 20
    }
});