// App.js (AGORA O GERENCIADOR DE ROTAS)
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as telas
import LoginScreen from './src/screens/Auth/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

// Cria o objeto Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Container de Navegação
    <NavigationContainer>
      {/* Gerenciador de Telas */}
      <Stack.Navigator initialRouteName="Login">
        
        {/* Tela de Login */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Remove o cabeçalho padrão
        />
        
        {/* Tela Principal (Dashboard) */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Dashboard Tabuleiro' }} // Título do cabeçalho
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}