import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import TotalExpense from '../components/TotalExpense';
import Expense from '../components/ExpenseInfo/Expense';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
export default function AllExpensesScreen(){
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        title: 'All Expenses', 
      });
    }, [navigation]);

    return (
        <View style={styles.container}>
        <TotalExpense title='Total' />
        <Expense />
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