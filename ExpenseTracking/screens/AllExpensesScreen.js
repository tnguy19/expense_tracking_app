import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import ExpensesOutput from '../components/ExpenseInfoOutput/ExpensesOutput';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

export default function AllExpensesScreen(){
    const navigation = useNavigation();
    const expensesContext = useContext(ExpenseContext);
   //console.log(expensesContext)

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