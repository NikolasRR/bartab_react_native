import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles, { continueButton, continueButtonText } from "./styles";
import { useParticipants } from '../../../contexts/participantContext';

export default function ParticipantForm({ navigation }) {
  const { participants, setParticipants } = useParticipants();

  const [participantName, setParticipantName] = useState("");

  const enoughParticipants = participants.length <= 1;

  const addParticipant = () => {
    if (participants.find(p => p === participantName)) {
      Alert.alert('repeated names are not allowed');
      return;
    }

    setParticipants([participantName, ...participants]);
    setParticipantName("");
  }

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
        <TouchableOpacity disabled={participantName.length < 2} style={styles.addButton} onPress={() => addParticipant()} activeOpacity={1}>
          <Text style={styles.addButtonText}>add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={enoughParticipants}
        style={continueButton(enoughParticipants ? '#959595' : '#ffd700').style}
        onPress={() => navigation.navigate("AddItems")}
        activeOpacity={1}
      >
        <Text style={continueButtonText(enoughParticipants ? '#d0d0d0' : '#8b4513').style}>continue</Text>
      </TouchableOpacity>
    </View>
  );
}