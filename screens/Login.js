import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik'; // useFormik eklemeyi unutmayın
import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  username: yup.string().required('*Kullanıcı adı zorunludur.'),
  password: yup.string().required('*Şifre zorunludur.'),
});

const Login = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log('Giriş yapıldı:', values.username, values.password);
      // Burada giriş işlemlerini yapabilirsiniz
    },
  });

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/background.jpg')} style={styles.backgroundImage} />

      <View style={styles.loginContainer}>
        <Text style={styles.title}>AMİRAL BATTI</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
        />
        {formik.touched.username && formik.errors.username ? (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
          ) : null}
        <TouchableOpacity style={styles.buttonContainer} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerButton}>Hesabın yok mu? Hemen Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;


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
    paddingBottom: 100,
  },
  title: {
    fontSize: 48, 
    fontWeight: 'bold', 
    color: '#D9D0C1', 
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 5, height: 4 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold', 
    color: 'black',
    borderBottomColor: '#3498db',
    borderBottomWidth: 2,
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
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

