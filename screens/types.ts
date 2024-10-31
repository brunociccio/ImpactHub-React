import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    CadastroCnpj: undefined;
    Contato: undefined;
    Endereco: undefined;
    Documento: undefined;
    CadastroLogin: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type CadastroCnpjScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CadastroCnpj'>;
export type ContatoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contato'>;
export type EnderecoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Endereco'>;
export type DocumentoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Documento'>;
export type CadastroLoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CadastroLogin'>;


