import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExpenseInfo from './components/ExpenseInfo/ExpenseInfo';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'fira-sans': require('./assets/fonts/FiraSans-Light.ttf'),
    'fira-sans-bold': require('./assets/fonts/FiraSans-Bold.ttf')
  });

  return (
    <View style={styles.container}>
     <ExpenseInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D493A',
    padding: 16,
    paddingTop: 50
  },
});
