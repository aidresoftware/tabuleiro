// App.js (AGORA O GERENCIADOR DE ROTAS PRINCIPAL E DE ABAS)
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Usaremos ícones para as abas

// Importa as Telas
import LoginScreen from './src/screens/Auth/LoginScreen';
import VendasScreen from './src/screens/VendasScreen';
import EstoqueScreen from './src/screens/EstoqueScreen';
import RelatoriosScreen from './src/screens/RelatoriosScreen';

// Objetos Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- NOVO COMPONENTE: Gerencia as Abas da aplicação (Vendas, Estoque, Relatórios) ---
function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Vendas"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // Configura os ícones da barra de navegação inferior
          if (route.name === 'Vendas') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Estoque') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Relatorios') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D44C2B', // Cor vermelha do seu layout
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Vendas" component={VendasScreen} options={{ title: 'Vendas Hoje' }} />
      <Tab.Screen name="Estoque" component={EstoqueScreen} />
      <Tab.Screen name="Relatorios" component={RelatoriosScreen} options={{ title: 'Relatórios' }} />
    </Tab.Navigator>
  );
}
// ---------------------------------------------------------------------------------

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Rota de Autenticação */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        
        {/* Rota Principal (Onde a Home estava) -> Agora é o Gerenciador de Abas */}
        <Stack.Screen 
          name="App" // Mudamos o nome de 'Home' para 'App' (ou MainTabs) para melhor semântica
          component={AppTabs} 
          options={{ headerShown: false }} // O cabeçalho será tratado por cada aba
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}