import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
      return;
    }

    setLoading(true);
    
    try {
        await auth().signInWithEmailAndPassword(email, password);
        
        Alert.alert('Sucesso', 'Login realizado com sucesso! Bem-vindo(a) de volta.');
        // navigation.navigate('Home'); 
        
    } catch (error) {
        let errorMessage = 'Falha na autenticação.';
        if (error.code === 'auth/invalid-email') {
            errorMessage = 'O formato do e-mail é inválido.';
        } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            errorMessage = 'E-mail ou senha incorretos. Verifique suas credenciais.';
        }
        
        Alert.alert('Erro de Login', errorMessage);
    } finally {
        setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acarajé da Neuza - Acesso</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuário (Email)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
            <ActivityIndicator color="#FFF" />
        ) : (
            <Text style={styles.buttonText}>ENTRAR</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40, color: '#D44C2B' },
  input: { width: '100%', height: 50, backgroundColor: '#F0F0F0', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: '#CCC' },
  button: { width: '100%', height: 50, backgroundColor: '#D44C2B', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default LoginScreen;