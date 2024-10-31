import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CadastroCnpjScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const serverUrl = 'http://10.0.2.2:8080'; 

type Props = {
    navigation: CadastroCnpjScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const CadastroCnpjScreen: React.FC<Props> = ({ navigation }) => {
    const [cnpj, setCnpj] = useState('');

    const handleCadastroCnpj = async () => {
        try {
            const response = await fetch(`${serverUrl}/CadastroCNPJ`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cnpj }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'CNPJ cadastrado com sucesso');
                navigation.navigate('Contato'); // Próxima etapa
            } else {
                Alert.alert('Erro', 'Erro ao cadastrar o CNPJ');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro de conexão com o servidor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro CNPJ</Text>
            <CustomInput placeholder="CNPJ" value={cnpj} onChangeText={setCnpj} />
            <CustomButton title="Próximo" onPress={handleCadastroCnpj} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default CadastroCnpjScreen;
