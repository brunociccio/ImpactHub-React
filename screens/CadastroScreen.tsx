import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CadastroScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = {
    navigation: CadastroScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleCadastro = async () => {
        if (!nomeEmpresa || !cnpj || !email || !endereco || !username || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        // Salvar dados de login no AsyncStorage
        try {
            await AsyncStorage.setItem(
                'userData',
                JSON.stringify({ username, password })
            );
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar os dados');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Empresa</Text>
            <CustomInput
                placeholder="Nome da Empresa"
                value={nomeEmpresa}
                onChangeText={setNomeEmpresa}
            />
            <CustomInput
                placeholder="CNPJ"
                value={cnpj}
                onChangeText={setCnpj}
                keyboardType="numeric"
            />
            <CustomInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Endereço"
                value={endereco}
                onChangeText={setEndereco}
            />
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
            <CustomButton title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default CadastroScreen;

