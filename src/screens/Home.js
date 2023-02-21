import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// import db from "./../../database/db";

export default function Home({ navigation }) {
  // useEffect(() => {
  //   db.transaction(function (txn) {
  //     txn.executeSql(
  //       "SELECT name FROM sqlite_master WHERE type='table' AND name='participants'",
  //       [],
  //       function (tx, res) {
  //         console.log('item:', res.rows.length);
  //         if (res.rows.length === 0) {
  //           txn.executeSql('DROP TABLE IF EXISTS participants', []);
  //           txn.executeSql(
  //             'CREATE TABLE IF NOT EXISTS participants(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
  //             []
  //           );
  //         }
  //       }
  //     );
  //   });
  // }, []);

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
