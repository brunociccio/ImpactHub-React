import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { ContatoScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const serverUrl = 'http://10.0.2.2:8080'; 

type Props = {
    navigation: ContatoScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const ContatoScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleCadastroContato = async () => {
        try {
            const response = await fetch(`${serverUrl}/Contato`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, telefone }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Contato cadastrado com sucesso');
                navigation.navigate('Endereco'); // Próxima etapa
            } else {
                Alert.alert('Erro', 'Erro ao cadastrar o contato');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro de conexão com o servidor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Contato</Text>
            <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <CustomInput placeholder="Telefone" value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
            <CustomButton title="Próximo" onPress={handleCadastroContato} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default ContatoScreen;
