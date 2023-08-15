import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Burada kayıt işlemlerini yapabilirsiniz
    console.log('Kayıt yapıldı:', username, email, password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/background.jpg')} style={styles.backgroundImage} />
      
      <View style={styles.registerContainer}>
        <Text style={styles.title}>Hesap Oluştur</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
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
  registerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#D9D0C1', 
    textShadowColor: 'rgba(0, 0, 0, 1)', // Gölge rengi
    textShadowOffset: { width: 3, height: 3 }, // Gölge konumu
    textShadowRadius: 5, // Gölge yarıçapı
    marginBottom: 20, // Alttaki boşluk
  },
  input: {
    width: 220,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold', 
    color: 'black',
    borderBottomColor: '#3498db', // Input alt çizgi rengi
    borderBottomWidth: 2, // Input alt çizgi kalınlığı
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
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
});

export default Register;
