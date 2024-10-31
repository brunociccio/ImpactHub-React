import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = {
  navigation: LoginScreenNavigationProp;
  route: RouteProp<{ params?: undefined }, 'params'>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const storedData = await AsyncStorage.getItem('userData');
            const userData = storedData ? JSON.parse(storedData) : null;

            if (userData && userData.username === username && userData.password === password) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Erro', 'Usuário e senha incorretos');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível acessar os dados de login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Impact Hub</Text>
            <CustomInput
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <CustomInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <CustomButton title="Entrar" onPress={handleLogin} />
            <CustomButton title="Cadastrar" onPress={() => navigation.navigate('Cadastro')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default LoginScreen;
