import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeScreenNavigationProp } from './types';
import { RouteProp } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

type Props = {
    navigation: HomeScreenNavigationProp;
    route: RouteProp<{ params?: undefined }, 'params'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CustomButton title="Sair" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#333333' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#FFF' },
});
export default HomeScreen;
