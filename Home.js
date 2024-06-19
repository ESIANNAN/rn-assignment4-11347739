import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView, FlatList,Image} from 'react-native';



export default function Login() {


   const tasks = [
    { id: '1', title: 'Product Manager',image: require('./assets/facebook.png') },
    { id: '2', title: 'Warehouse Manager',image: require('./assets/amazon.png')  },
    { id: '3', title: 'Head of Marketting',image: require('./assets/melcom.png') },
    { id: '4', title: 'Truck Driver',image: require('./assets/walmart.jpg') },
    { id: '5', title: 'Data Analyst',image: require('./assets/google.png') },
    { id: '6', title: 'Product Manager',image: require('./assets/beats.png') },
    { id: '7', title: 'Jr Executive',image: require('./assets/burger-king.png')},
    { id: '8', title: 'Procurement Officer',image: require('./assets/apple.png')},
    
  ];
  return (
<ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Text style={styles.name}>Philomina</Text>
      <Text style={styles.email}>annanesi875@gmail.com</Text>
  
      <TextInput
        style={styles.input}
        placeholder="Search a for a job"
      />
      <Text style={styles.jobs}>Featured Jobs</Text>
     
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
     <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskBox}>
             <Image source={item.image} style={styles.taskImage} />
              <Text style={styles.task}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 100,
    marginLeft:20,
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
    backgroundColor: '#7CB9E8',
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
    backgroundColor: '#002D62',
    borderRadius: 40,
    padding: 40,
     width: 350,
    height: 270,
  },
    largeSlideThree: {
    marginRight: 15,
    backgroundColor: '#6495ED',
    borderRadius: 40,
    padding: 40,
     width: 350,
    height: 270,
  },
    largeSlideFour: {
    marginRight: 15,
    backgroundColor: '#808080',
    borderRadius: 40,
    padding: 40,
    width: 350,
    height: 270,
  },
   largeSlideFive: {
    marginRight: 15,
    backgroundColor: '#CC0000',
    borderRadius: 40,
    padding: 40,
    width: 350,
    height: 270,
  },
   largeSlideSix: {
    marginRight: 15,
    backgroundColor: '#FFFF66',
    borderRadius: 40,
    padding: 40,
    width: 350,
    height: 270,
  },
    largeSlideSeven: {
    marginRight: 15,
    backgroundColor: '#6495ED',
    borderRadius: 40,
    padding: 40,
    width: 350,
    height: 270,
  },
    largeSlideEight: {
    marginRight: 15,
    backgroundColor: '#7CB9E8',
    borderRadius: 40,
    padding: 40,
     width: 350,
    height: 270,
  },
  taskBox: {
    flexDirection: 'row',
    backgroundColor: '#7CB9E8',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 12,
    padding: 40,
    width: 300,
    Height: 400,
  },
  task: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  taskImage: {
    width: 35,
    height: 35,
    
  },

});

