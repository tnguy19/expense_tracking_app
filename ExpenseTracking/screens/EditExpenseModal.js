import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';

export default function EditExpenseModal({ isVisible }) {


    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.buttonContainer}>
                    <CustomButton title='Cancel' />
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.primary400,
        marginTop: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'center'
    }
});