import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function ParticipantForm({ participants, setParticipants, navigation }) {
  const [participantName, setParticipantName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          onChangeText={value => setParticipantName(value)}
          value={participantName}
          maxLength={20}
          placeholder="participant name"
        ></TextInput>
        <TouchableOpacity style={styles.addButton} onPress={() => {
          if (participants.find(p => p === participantName)) {
            Alert.alert('repeated names not allowed');
            return;
          }
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