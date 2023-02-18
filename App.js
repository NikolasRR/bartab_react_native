import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: 'blue'
  }
})
