import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';



export default function Login() {
  return (
    <View style={styles.container}>
      <Text styles={styles.name}>Philomina</Text>
      <Text style={styles.email}>annanesi875@gmail.com</Text>

     <TextInput
        style={styles.input}
        placeholder="Search a for a job"
      />
     
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 140,
    marginLeft:-60,
  },
  name: {
    fontSize: 30,
    marginBottom: 3,
    fontWeight: 'bold',
  },
   email: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 60, 
  },
   input: {
    width: 250,
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
    paddingLeft: 15,
  },
 
 
  

});

