import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ParticipantForm({ participants, setParticipants }) {
  const [participantName, setParticipantName] = useState("");

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
            setParticipants([...participants, participantName]);
            setParticipantName("");
          }}>
          <Text style={styles.addButtonText}>add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton}>
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