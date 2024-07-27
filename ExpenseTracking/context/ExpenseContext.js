
import { createContext, useReducer } from "react";

const TEST_EXPENSES = [
    // {
    //     id: 'e1',
    //     name: 'Nike Blazer',
    //     amount: 105,
    //     date: new Date('2024-06-01')
    // },
    // {
    //     id: 'e2',
    //     name: 'T-shirt',
    //     amount: 20,
    //     date: new Date('2024-07-01')
    // },
    // {
    //     id: 'e3',
    //     name: 'Gymshark shorts',
    //     amount: 15,
    //     date: new Date('2024-07-25')
    // }
];

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({name, amount, date}) => {},
    deleteExpense: ({id}) => {},
    updateExpense: (id, {name, amount, date}) => {}
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];
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
    const [expensesState, dispatch] = useReducer(expensesReducer, TEST_EXPENSES);

    function addExpense(expenseData){
        dispatch({type: 'ADD', payload: expenseData});
    }

    function deleteExpense(id){
        dispatch({type: 'DELETE', payload: id});
    }

    function updateExpense(id, expenseData){
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }

    const value = {
        expenses: expensesState,
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
