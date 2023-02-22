import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';


import Header from './src/components/Header';
import AddParticipants from './src/screens/AddParticipants';
import Home from './src/screens/Home';
import AddItems from './src/screens/AddItems';

// import DB from '../database/Database';

const Stack = createNativeStackNavigator();

export default function App() {
  // useEffect(() => {
  //   DB.transaction((tx) => {
  //     tx.executeSql(
  //       `
  //       CREATE TABLE IF NOT EXISTS participants (
  //         id INTEGER PRIMARY KEY AUTOINCREMENT, 
  //         name NOT NULL VARCHAR(10)
  //       );
  //       CREATE TABLE IF NOT EXISTS items (
  //         id INTEGER PRIMARY KEY AUTOINCREMENT, 
  //         name VARCHAR(30)
  //       );
  //       `
  //     );
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddParticipants"
          component={AddParticipants}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="AddItems"
          component={AddItems}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA'
  }
})
