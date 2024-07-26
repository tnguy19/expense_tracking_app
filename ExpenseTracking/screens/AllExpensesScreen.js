import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import TotalExpense from '../components/TotalExpense';
import Expense from '../components/ExpenseInfo/Expense';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpensesOutput from '../components/ExpensesOutput';
export default function AllExpensesScreen(){
    const navigation = useNavigation();
    const expensesContext = useContext(ExpenseContext);
   console.log(expensesContext)
    useLayoutEffect(() => {
      navigation.setOptions({
        title: 'All Expenses', 
      });
    }, [navigation]);

    return (
        <View style={styles.container}>
        <ExpensesOutput 
          title='Total'
          expenses={expensesContext.expenses}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary400,
      padding: 16,
      paddingTop: 20
    },
  });