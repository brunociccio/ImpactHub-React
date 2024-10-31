import React from 'react';
import { Pressable, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#115c01' : '#68d14f' } 
            ]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;
