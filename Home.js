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
     <ScrollView horizontal style={styles.scrollview}>
        <View style={styles.largeSlide}>
            <Text style={styles.activities}>Software Engineer</Text>
        </View>
        <View style={styles.largeSlide}>
            <Text style={styles.activities}>Data Analyst</Text>
        </View>
        <View style={styles.largeSlide}>
            <Text style={styles.activities}>Cleaner</Text>
        </View>
        <View style={styles.largeSlide}>
            <Text style={styles.activities}>Procurement officer</Text>
        </View>
        <View style={styles.largeSlide}>
            <Text style={styles.activities}>Hr Manager</Text>
        </View>
           <View style={styles.largeSlide}>
            <Text style={styles.activities}>Game Designer</Text>
        </View>
          <View style={styles.largeSlide}>
            <Text style={styles.activities}>Head of IT and Business solution</Text>
        </View>
          <View style={styles.largeSlide}>
            <Text style={styles.activities}>Mobile App Developer</Text>
        </View>
      </ScrollView>
       
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
    marginBottom: 40, 
  },
   input: {
    width: 250,
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
    paddingLeft: 15,
     marginBottom: 30,
  },
    jobs: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  largeSlide: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
    width: 200,
    height: 200,
  },
 
 
  

});

