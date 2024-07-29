import {View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import { useContext, useLayoutEffect, useCallback} from 'react';
import EditContext from '../context/EditContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

export default function EditExpenseModal() {
    const navigation = useNavigation();
    const {isEditing, setIsEditing} = useContext(EditContext)

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

    return (
            <View style={styles.screenContainer}>
                <ExpenseForm />
                <View style={styles.buttonContainer}>
                    <CustomButton title='Cancel' />
                    <CustomButton title={isEditing ? 'Update' : 'Add'}/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.primary400,
        paddingTop: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'center'
    }
});