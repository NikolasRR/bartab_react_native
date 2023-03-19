import { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from "./styles";

export default function ParticipantSwitch({ state, name, index, selectedParticipants, setSelectedParticipants }) {
  const [selected, setSelected] = useState(state);

  const updateParticipants = (index) => {
    let temp = [...selectedParticipants];
    const tal = temp.splice(index, 1);
    setSelectedParticipants([...temp]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Switch trackColor={{true: "#ffd700", }} thumbColor={'#8b4513'}
      onChange={() => {
        if (!selected) setSelectedParticipants([...selectedParticipants, name]);
        if (selected) updateParticipants(index);
        setSelected(!selected);
      }} 
      value={selected}
      ></Switch>
    </View>
  );
}