import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function EditExpenseModal({isVisible}){
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
         
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {

    }
});