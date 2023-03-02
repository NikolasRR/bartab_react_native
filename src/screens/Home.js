import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>nelson</Text>
      <Button title='go' onPress={() => navigation.navigate("AddParticipants")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
