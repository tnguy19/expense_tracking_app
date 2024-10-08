import { Pressable, StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

export default function CustomButton({title, onPress}){
    return (
        <Pressable onPress={onPress}>
            <View style={styles.rootContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        height: 40,
        marginHorizontal: 5
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontFamily: 'fira-sans-bold',
        color: Colors.black
    },
});