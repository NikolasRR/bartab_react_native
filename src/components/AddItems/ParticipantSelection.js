import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import ParticipantSwitch from "./ParticipantSwitch";

export default function ParticipantSelection({ participants }) {
  return (
    <ScrollView style={styles.mainContainer}>
      {participants.map((participant, i) => <ParticipantSwitch key={i} name={participant} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 80
  }
  
})