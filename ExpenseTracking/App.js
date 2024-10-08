import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AllExpensesScreen from './screens/AllExpensesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import Colors from './constants/colors';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from './components/CustomHeader';
import { getHeaderTitle } from '@react-navigation/elements';
import EditExpenseModal from './screens/EditExpenseModal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import EditContext from './context/EditContext';
import ExpensesContextProvider from './context/ExpenseContext';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        header: ({ route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <CustomHeader title={title} buttonVisible={true} />
        }
      }}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpensesScreen}
        options={{
          tabBarIcon: ({ focused, size }) => <Octicons name="hourglass" size={size} color={focused ? 'black' : '#808080'} />
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ focused, size }) => <Ionicons name="calendar-outline" size={size} color={focused ? 'black' : '#808080'} />
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {

  const [fontsLoaded] = useFonts({
    'fira-sans': require('./assets/fonts/FiraSans-Black.ttf'),
    'fira-sans-bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'fira-sans-light': require('./assets/fonts/FiraSans-Light.ttf')
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <ExpensesContextProvider>
        <EditContext.Provider value={{ isEditing, setIsEditing }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='Expenses Tab'
                component={ExpensesTab}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Edit Expense'
                component={EditExpenseModal}
                options={{
                  presentation: 'modal',
                  header: ({ route, options }) => {
                    const title = getHeaderTitle(options, route.name);
                    return (
                      <CustomHeader
                        title={title}
                        customStyle={{ paddingVertical: 10, justifyContent: 'center' }}
                        buttonVisible={false}
                      />)
                  }
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </EditContext.Provider>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
});
