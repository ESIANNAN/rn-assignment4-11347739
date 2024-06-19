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
    marginLeft:-120,
  },
  name: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  
 
 
  

});

