import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ParticipantForm from "../components/AddParticiapants/ParticipantForm";
import ParticipantList from "../components/AddParticiapants/ParticipantsList";

export default function AddParticipants() {
  const [participants, setParticipants] = useState([]);

  return (
    <View style={styles.container}>
      <ParticipantList participants={participants} setParticipants={setParticipants}/>
      <ParticipantForm participants={participants} setParticipants={setParticipants}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})