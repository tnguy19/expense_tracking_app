import { View, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpenseInfoOutput/ExpensesOutput';
import Colors from '../constants/colors';
import { useContext, useEffect, useState} from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';
import LoadingOverlay from '../components/LoadingOverlay';
import ErrorOverlay from '../components/ErrorOverlay';

export default function RecentExpensesScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesContext = useContext(ExpenseContext);

  useEffect(() => {
      //note: create an async function inside useEffect
     async function getExpenses(){
      setIsFetching(true);

      try{
        const expenses = await fetchExpenses();
        expensesContext.setExpenses(expenses); //set local context with data fetched from backend
      } catch(error){
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }

    getExpenses()
  }, []);

  function errorHandler(){
    setError(null); //reset error to null to clear the error currently raised
  }

  if (error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isFetching){
    return <LoadingOverlay />
  }

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