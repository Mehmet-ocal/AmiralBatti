import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFormik } from "formik"; // useFormik eklemeyi unutmayın
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "*Kullanıcı adı en az 3 karakter olmalıdır.")
    .max(32, "*Kullanıcı adı en fazla 32 karakter olmalıdır.")
    .required("*Kullanıcı adı zorunludur."),
  email: yup
    .string()
    .email("*Geçerli bir e-posta adresi giriniz.")
    .required("*E-posta adresi zorunludur."),
  password: yup
    .string()
    .min(6, "*Şifre en az 6 karakter olmalıdır.")
    .max(32, "*Şifre en fazla 32 karakter olmalıdır.")
    .required("*Şifre zorunludur."),
});

const Register = () => {
  const navigation = useNavigation(); // useNavigation hook'unu ekleyin

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log(values);
      // Kayıt işlemlerini yapabilirsiniz

      // Kayıt işlemi tamamlandığında login ekranına yönlendirin
      navigation.navigate("Login");
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/background.jpg")}
        style={styles.backgroundImage}
      />

      <View style={styles.registerContainer}>
        <Text style={styles.title}>Hesap Oluştur</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
        />
                {formik.touched.username && formik.errors.username ? (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={formik.handleSubmit}
        >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D9D0C1",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  input: {
    width: 220,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "black",
    borderBottomColor: "#3498db",
    borderBottomWidth: 2,
  },
  buttonContainer: {
    width: 180,
    height: 40,
    backgroundColor: "#82695A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default Register;
