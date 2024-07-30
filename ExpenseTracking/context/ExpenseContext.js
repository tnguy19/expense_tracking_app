
import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({name, amount, date}) => {},
    setExpenses: (expenses) => {},
    deleteExpense: ({id}) => {},
    updateExpense: (id, {name, amount, date}) => {}
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [{...action.payload}, ...state];
        case 'SET':
            const inverted = action.payload.reverse(); //invert to make sure the order is not modified by Firebase backend
            return inverted;
        case 'UPDATE':
            const updateIndex = state.findIndex( expense => expense.id === action.payload.id);
            const updatedItem = {...state[updateIndex], ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updateIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload);
        default:
            return state;
    }
}

export default function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
    }

    function setExpenses(expenses){
        dispatch({type: 'SET', payload: expenses});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpense(id, expenseData){
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const value = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}
