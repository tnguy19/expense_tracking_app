import { View, Text, StyleSheet } from "react-native";
import TotalExpense from "./TotalExpense";
import Expense from "../ExpenseInfo/Expense";
import { FlatList } from "react-native";

export default function ExpensesOutput({ title, expenses }) {

    const totalAmount = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    function renderExpenseItem(itemData) {
        console.log(itemData.item)
        return <Expense {...itemData.item} />
    }

    let placeholder = title === 'Last 7 Days' ? 
        <Text style={styles.placeholderText}>No expenses added in the last 7 days!</Text> : 
        <Text style={styles.placeholderText}>No expenses added yet!</Text>;
    
    return (
        <>
            <TotalExpense
                title={title}
                totalAmount={totalAmount.toFixed(2)}
            />
            {
                expenses.length > 0 ?
                        <FlatList
                            data={expenses}
                            renderItem={renderExpenseItem}
                            keyExtractor={item => item.id}
                        />
                    : 
                    <View style={styles.placeholderContainer}>
                         {placeholder}
                    </View>
                   
            }
        </>
    );
}

const styles = StyleSheet.create({
    placeholderContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    placeholderText: {
        color: 'white',
        fontFamily:'fira-sans-light',
    }
});
