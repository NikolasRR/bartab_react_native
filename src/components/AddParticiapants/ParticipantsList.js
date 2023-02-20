import { ScrollView, StyleSheet, Text } from "react-native";



export default function ParticipantList({ participants }) {
  console.log(participants);

  return (
    <ScrollView style={styles.container}>
      {participants.map((participant, i) => <Text key={i}>{participant}</Text>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '60%'
  }
})