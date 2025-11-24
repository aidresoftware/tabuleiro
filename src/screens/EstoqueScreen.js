// src/screens/EstoqueScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EstoqueScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo de Estoque</Text>
      <Text>Aqui será controlada a quantidade de Feijão, Azeite de Dendê, Camarão Seco, etc.</Text>
      <Text style={styles.subtitle}>Baseado no layout da imagem.</Text>
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

export default EstoqueScreen;