import { View, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpenseInfoOutput/ExpensesOutput';
import Colors from '../constants/colors';
import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { getDateMinusDays } from '../utils/date';

export default function RecentExpensesScreen() {
  const expensesContext = useContext(ExpenseContext);

  //Filter expenses date, only keeping expenses with date within the last 7 days and less than current date
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const currentDate = new Date();
    const sevenDaysAgoDate = getDateMinusDays(currentDate, 7);
    return new Date(expense.date) >= sevenDaysAgoDate && currentDate >= new Date(expense.date);
  });

  return (
    <View style={styles.container}>
     <ExpensesOutput title="Last 7 Days" expenses={recentExpenses} />
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