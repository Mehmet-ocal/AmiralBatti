import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Navigation hook'unu kullanın

  const handleLogin = () => {
    // Burada giriş işlemlerini yapabilirsiniz
    console.log('Giriş yapıldı:', username, password);
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Register ekranına yönlendirme
  };


  return (
    <View style={styles.container}>
      <Image source={require('../assets/background.jpg')} style={styles.backgroundImage} />

      <View style={styles.loginContainer}>
        <Text style={styles.title}>AMİRAL BATTI</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerButton}>Hesabın yok mu? Hemen Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100, // Alt boşluk
  },
  title: {
    fontSize: 48, // Metin boyutu
    fontWeight: 'bold', // Kalın yazı
    color: '#D9D0C1', // Metin rengi
    textShadowColor: 'rgba(0, 0, 0, 1)', // Gölge rengi
    textShadowOffset: { width: 5, height: 4 }, // Gölge konumu
    textShadowRadius: 5, // Gölge yarıçapı
    marginBottom: 20, // Alttaki boşluk
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold', // Yazıyı kalınlaştırma
    color: 'black', // Input içinde yazı rengi
    borderBottomColor: '#3498db', // Input alt çizgi rengi
    borderBottomWidth: 2, // Input alt çizgi kalınlığı
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  registerButton: {
    marginTop: 10,
    textDecorationLine: 'underline',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 180,
    height: 40,
    backgroundColor: '#82695A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
