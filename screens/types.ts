import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
