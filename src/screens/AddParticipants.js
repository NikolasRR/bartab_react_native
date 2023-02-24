import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ParticipantForm from "../components/AddParticiapants/ParticipantForm";
import ParticipantList from "../components/AddParticiapants/ParticipantsList";

export default function AddParticipants({ navigation }) {
  const [participants, setParticipants] = useState([]);

  return (
    <View style={styles.container}>
      <ParticipantList participants={participants} setParticipants={setParticipants} />
      <ParticipantForm participants={participants} setParticipants={setParticipants} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE8AA',
    flex: 1,
    justifyContent: 'flex-end'
  }
})