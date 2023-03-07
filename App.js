import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';

import Header from './src/components/Header';
import AddParticipants from './src/screens/AddParticipants';
import Home from './src/screens/Home';
import AddItems from './src/screens/AddItems';
import TabDisplay from './src/screens/TabDisplay';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Righteous_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
