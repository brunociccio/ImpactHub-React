import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { DocumentoScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const serverUrl = 'http://10.0.2.2:8080'; // Ajuste conforme o ambiente

type Props = {
    navigation: DocumentoScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const DocumentoScreen: React.FC<Props> = ({ navigation }) => {
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');

    const handleCadastroDocumento = async () => {
        try {
            const response = await fetch(`${serverUrl}/Documento`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tipoDocumento, numeroDocumento }),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Documento cadastrado com sucesso');
                navigation.navigate('CadastroLogin'); // Próxima etapa
            } else {
                Alert.alert('Erro', 'Erro ao cadastrar o documento');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro de conexão com o servidor');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Documento</Text>
            <CustomInput placeholder="Tipo de Documento" value={tipoDocumento} onChangeText={setTipoDocumento} />
            <CustomInput placeholder="Número do Documento" value={numeroDocumento} onChangeText={setNumeroDocumento} />
            <CustomButton title="Próximo" onPress={handleCadastroDocumento} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});

export default DocumentoScreen;
