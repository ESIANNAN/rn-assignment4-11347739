import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
     <Text style={styles.welcome}>Welcome Back</Text>
    <Text style={styles.Apply}>Let's login.Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        title="Login"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 22,
     marginBottom: 10,
     marginTop: 140,
    marginLeft: -30,
     fontWeight: 'bold',
    color:'#5072A7',
  },
  input: {
    width: 270,
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 25,
     marginBottom: 5,
    marginLeft: -30,
    fontWeight: 'bold',
  },
  apply: {
    marginLeft: -30,
    marginBottom: 60,
    color: 'grey',
  },
});
