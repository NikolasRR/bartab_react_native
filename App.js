import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AddParticipants from './src/screens/AddParticipants';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddParticipants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA'
  }
})
