import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { EnderecoScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const serverUrl = 'http://10.0.2.2:8080'; 

type Props = {
    navigation: EnderecoScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const EnderecoScreen: React.FC<Props> = ({ navigation }) => {
    const [endereco, setEndereco] = useState('');

    const handleCadastroEndereco = async () => {
        try {
            const response = await fetch(`${serverUrl}/Endereco`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ endereco }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Endereço cadastrado com sucesso');
                navigation.navigate('Documento'); // Próxima etapa
            } else {
                Alert.alert('Erro', 'Erro ao cadastrar o endereço');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro de conexão com o servidor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Endereço</Text>
            <CustomInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
            <CustomButton title="Próximo" onPress={handleCadastroEndereco} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default EnderecoScreen;
