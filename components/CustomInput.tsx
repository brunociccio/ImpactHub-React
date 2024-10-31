import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChangeText, ...props }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#CCC" 
            value={value}
            onChangeText={onChangeText}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#777', // Borda cinza escuro
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,
        borderRadius: 5,
        color: '#FFF', // Texto branco
        backgroundColor: '#444', // Fundo mais escuro para o input
    },
});

export default CustomInput;
