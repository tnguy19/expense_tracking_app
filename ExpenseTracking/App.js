import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AllExpensesScreen from './screens/AllExpensesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecentExpensesScreen from './screens/RecentExpensesScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'fira-sans': require('./assets/fonts/FiraSans-Black.ttf'),
    'fira-sans-bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'fira-sans-light': require('./assets/fonts/FiraSans-Light.ttf')
  });

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Recent" component={RecentExpensesScreen} />
          <Tab.Screen name="All Expense" component={AllExpensesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
});
