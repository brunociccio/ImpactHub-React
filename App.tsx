import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './screens/types';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import CadastroCnpjScreen from './screens/CadastroCnpjScreen';
import ContatoScreen from './screens/ContatoScreen';
import EnderecoScreen from './screens/EnderecoScreen';
import DocumentoScreen from './screens/DocumentoScreen';
import CadastroLoginScreen from './screens/CadastroLoginScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen 
          name="CadastroCnpj" 
          component={CadastroCnpjScreen} 
          options={{ title: 'Cadastro CNPJ' }}
        />
        <Stack.Screen 
          name="Contato" 
          component={ContatoScreen} 
          options={{ title: 'Cadastro Contato' }}
        />
        <Stack.Screen 
          name="Endereco" 
          component={EnderecoScreen} 
          options={{ title: 'Cadastro Endereço' }}
        />
        <Stack.Screen 
          name="Documento" 
          component={DocumentoScreen} 
          options={{ title: 'Cadastro Documento' }}
        />
        <Stack.Screen 
          name="CadastroLogin" 
          component={CadastroLoginScreen} 
          options={{ title: 'Cadastro Login' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
