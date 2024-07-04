import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

function HomeScreen() {

  const [num, setNum] = useState(0);

  return (
    <View style={styles.cont}>
      <View style={styles.display}>
        <Text style={styles.distxt}>{num}</Text>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 1)}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 2)}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 3)}>3</Text></TouchableOpacity>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 4)}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 5)}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 6)}>6</Text></TouchableOpacity>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 7)}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 8)}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 9)}>9</Text></TouchableOpacity>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt} onPress={() => setNum(num + 0)}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt}>-</Text></TouchableOpacity>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt}>x</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnfrm}><Text style={styles.btntxt}>=</Text></TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.foottxt}>Created by @PasinduMadhumal</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Calculator 2024'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cont:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  display:{
    flex: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10px',
    marginBottom: '10px',

  },

  distxt:{
    borderWidth: 1,
    paddingTop: '10px',
    paddingLeft: '6px',
    paddingRight: '6px',
    paddingBottom: '10px',
    width: '40%',
    textAlign: 'center',
    borderRadius: '12px',
  },

  btns:{
    flex: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  btnfrm:{
    margin: '10px',
    padding: '20px',
    borderWidth: 1,
    borderRadius: '10px',
    backgroundColor: '#4589',
  },

  btntxt:{
    fontSize: '20px',
    fontWeight: 'bold',
  },

  footer:{
    flex: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10px',
  }
})

export default App;