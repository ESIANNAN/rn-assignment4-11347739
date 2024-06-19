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
        <View style={styles.largeSlideOne}>
            <Text style={styles.activities}>Software Engineer</Text>
            <Text style={styles.smallText}>Facebook</Text>
        </View>
        <View style={styles.largeSlideTwo }>
            <Text style={styles.activities}>Data Analyst</Text>
            <Text style={styles.smallText}>Google</Text>
        </View>
        <View style={styles.largeSlideThree }>
            <Text style={styles.activities}>Cleaner</Text>
            <Text style={styles.smallText}>Melcom</Text>
        </View>
        <View style={styles.largeSlideFour}>
            <Text style={styles.activities}>Procurement officer</Text>
            <Text style={styles.smallText}>Tema Development Company</Text>
        </View>
        <View style={styles.largeSlideFive}>
            <Text style={styles.activities}>Hr Manager</Text>
            <Text style={styles.smallText}>Lesfam Company</Text>
        </View>
          <View style={styles.largeSlideSix}>
            <Text style={styles.activities}>Game Designer</Text>
            <Text style={styles.smallText}>Gaming Company of Ghana</Text>
        </View>
          <View style={styles.largeSlideSeven}>
            <Text style={styles.activities}>Head of IT and Business solution</Text>
            <Text style={styles.smallText}>Lesfam Company Limited</Text>
        </View>
          <View style={styles.largeSlideEight}>
            <Text style={styles.activities}>Mobile App Developer</Text>
            <Text style={styles.smallText}>Apple</Text>
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
  largeSlideOne: {
    marginRight: 15,
    backgroundColor: 'green',
    borderRadius: 40,
    padding: 40,
    width: 350,
    height: 270,
    marginLeft: 20,
  },
  smallText: {
    fontSize: 15,

  },
  activities:{
    fontSize: 20,
    fontWeight: 'bold',
  },
    largeSlideTwo: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
     width: 350,
    height: 270,
  },
    largeSlideThree: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
     width: 350,
    height: 270,
  },
    largeSlideFour: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
    width: 350,
    height: 270,
  },
   largeSlideFive: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
    width: 350,
    height: 270,
  },
   largeSlideSix: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
    width: 350,
    height: 270,
  },
    largeSlideSeven: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
    width: 350,
    height: 270,
  },
    largeSlideEight: {
    marginRight: 15,
    backgroundColor: '#FBF9F7',
    borderRadius: 15,
    padding: 15,
     width: 350,
    height: 270,
  },

});

