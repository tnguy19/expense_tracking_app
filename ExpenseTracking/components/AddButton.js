import { Pressable, StyleSheet } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export default function AddButton(){
    return (
        <Pressable>
            <MaterialIcons name="add" size={24} color="black" />
        </Pressable>
    )
}