import { ScrollView, Text, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";

export default function ParticipantList({ participants, setParticipants }) {
  const updateParticipants = (index) => {
    let temp = [...participants];
    temp.splice(index, 1);
    setParticipants([...temp]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {participants.map((participant, i) => {
          return (
            <View style={styles.participantContainer} key={i}>
              <Text style={styles.text}>{participant}</Text>
              <Ionicons name="close" size={30} color="red" onPress={() => updateParticipants(i)} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}