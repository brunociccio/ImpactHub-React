import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CadastroScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = {
    navigation: CadastroScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleCadastro = async () => {
        const cadastroData = {
            nome,
            dataNascimento,
            cargo,
            senha,
            cadastroCnpj: { cnpj },
            contato: { email, telefone },
            endereco: { endereco }
        };

        try {
            const response = await fetch('http://YOUR_BACKEND_URL/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cadastroData),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
                navigation.navigate('Login');
            } else {
                Alert.alert('Erro', 'Não foi possível realizar o cadastro');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro de conexão com o servidor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Empresa</Text>
            <CustomInput placeholder="Nome" value={nome} onChangeText={setNome} />
            <CustomInput placeholder="Data de Nascimento" value={dataNascimento} onChangeText={setDataNascimento} />
            <CustomInput placeholder="Cargo" value={cargo} onChangeText={setCargo} />
            <CustomInput placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
            <CustomInput placeholder="CNPJ" value={cnpj} onChangeText={setCnpj} />
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
            <CustomInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
            <CustomInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
            <CustomButton title="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default CadastroScreen;
