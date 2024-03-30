import { StyleSheet, View } from "react-native";

import ParticipantForm from "../components/AddParticiapants/ParticipantFrom/ParticipantForm";
import ParticipantList from "../components/AddParticiapants/ParticipantList/ParticipantsList";

export default function AddParticipants({ navigation }) {

  return (
    <View style={styles.container}>
      <ParticipantList />
      <ParticipantForm navigation={navigation} />
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