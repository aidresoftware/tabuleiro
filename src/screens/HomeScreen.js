// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO(A) AO DASHBOARD!</Text>
      <Text>Login realizado com sucesso. Esta é a próxima tela a ser desenvolvida.</Text>
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

export default HomeScreen;