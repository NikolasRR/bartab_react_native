import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// import db from "./../../database/db";

export default function ParticipantForm({ participants, setParticipants, navigation }) {
  const [participantName, setParticipantName] = useState("");

  // const prepareSQLStatement = () => {
  //   let statement = "";
  //   participants.forEach(participant => { statement += `INSERT INTO ` });
  // }

  // useEffect(() => {
  //   db.transaction(function (txn) {
  //     txn.executeSql(
  //       ''
  //     );
  //   })
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          onChangeText={value => setParticipantName(value)}
          value={participantName}
          placeholder="participant name"
        ></TextInput>
        <TouchableOpacity style={styles.addButton} onPress={() => {
          setParticipants([participantName, ...participants]);
          setParticipantName("");
        }}>
          <Text style={styles.addButtonText}>add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={participants.length <= 1}
        style={styles.continueButton}
        onPress={() => navigation.navigate("AddItems", { participants: participants })}
      >
        <Text style={styles.continueButtonText}>continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'blue'
  },
  inputDiv: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: 'white',
    height: 60,
    flex: 2,
    paddingLeft: 10
  },
  addButton: {
    flex: 1,
    backgroundColor: 'rgb(139,69,19)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: 'rgb(255,215,0)',
    fontSize: 25
  },
  continueButton: {
    height: 60,
    backgroundColor: 'rgb(255,215,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueButtonText: {
    color: 'rgb(139,69,19)',
    fontSize: 25,
    fontWeight: '600'
  }
})