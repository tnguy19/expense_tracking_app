import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

export default function TotalExpense({title, totalAmount}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.totalAmount}>${totalAmount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 22,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#DFD3C3',
    height: 45,
    marginBottom: 10
  },
  label: {
    fontFamily: 'fira-sans-light'
  },
  totalAmount: {
    fontFamily: 'fira-sans-bold',
  }
});
