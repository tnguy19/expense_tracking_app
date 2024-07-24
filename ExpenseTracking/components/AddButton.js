import { Pressable, StyleSheet } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function AddButton({onPress}){
    return (
        <Pressable onPress={onPress}>
            <MaterialIcons name="add" size={24} color="black" />
        </Pressable>
    )
}