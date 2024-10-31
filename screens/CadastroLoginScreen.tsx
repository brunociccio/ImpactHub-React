import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CadastroLoginScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const serverUrl = 'http://10.0.2.2:8080'; 

type Props = {
    navigation: CadastroLoginScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const CadastroLoginScreen: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastroLogin = async () => {
        try {
            const response = await fetch(`${serverUrl}/Login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Login cadastrado com sucesso');
                navigation.navigate('Login'); // Retorna ao Login
            } else {
                Alert.alert('Erro', 'Erro ao cadastrar o login');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro de conexão com o servidor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Login</Text>
            <CustomInput placeholder="Usuário" value={username} onChangeText={setUsername} />
            <CustomInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
            <CustomButton title="Concluir" onPress={handleCadastroLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default CadastroLoginScreen;
