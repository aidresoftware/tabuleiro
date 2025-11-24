// src/screens/VendasScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VendasScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo de Vendas</Text>
      <Text>Aqui serão listados os pedidos e o total de vendas do dia.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  }
});

// >>> A LINHA QUE FALTAVA E CAUSAVA O ERRO CRÍTICO:
export default VendasScreen;