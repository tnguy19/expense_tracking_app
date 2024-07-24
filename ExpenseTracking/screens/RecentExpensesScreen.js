import {View, StyleSheet} from 'react-native';
import TotalExpense from '../components/TotalExpense';
import Expense from '../components/ExpenseInfo/Expense';
import Colors from '../constants/colors';
import { useState } from 'react';

export default function RecentExpensesScreen(){
  const [isEditing, setIsEditing] = useState(true);

    return (
        <View style={styles.container}>
        <TotalExpense title="Last 7 Days"/>
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