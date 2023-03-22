import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Header from './src/components/Header';
import AddParticipants from './src/screens/AddParticipants';
import Home from './src/screens/Home';
import AddItems from './src/screens/AddItems';
import TabDisplay from './src/screens/TabDisplay';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    'Righteous': require('./assets/fonts/Righteous-Regular.ttf'),
    'Montserrat': require('./assets/fonts/static/Montserrat-SemiBold.ttf'),
    'Montserrat-medium': require('./assets/fonts/static/Montserrat-Medium.ttf')
  })

  if (!isLoaded) {
    return <View><Text>loading</Text></View>
  }

  return (
    <NavigationContainer>
      <StatusBar translucent={true}/>
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
        <Stack.Screen
          name="TabDisplay"
          component={TabDisplay}
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
