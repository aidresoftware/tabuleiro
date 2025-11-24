// src/screens/RelatoriosScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RelatoriosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo de Relatórios</Text>
      <Text>Aqui serão exibidos os gráficos e relatórios de desempenho.</Text>
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
});

export default RelatoriosScreen;