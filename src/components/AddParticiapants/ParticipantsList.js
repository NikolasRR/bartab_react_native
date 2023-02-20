import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ParticipantList({ participants, setParticipants }) {
  const updateParticipants = (index) => {
    let temp = [...participants];
    temp.splice(index, 1);
    setParticipants([...temp]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {participants.map((participant, i) => {
        return (
        <View style={styles.participantContainer} key={i}>
          <Text style={styles.text}>{participant}</Text>
          <Text onPress={() => updateParticipants(i)} style={styles.delX}>x</Text>
        </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    width: 150,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 20,
    marginRight: 10
  },
  delX: {
    fontSize: 25,
    color: 'red',
    width: 30,
    textAlign: 'right'
  }
})