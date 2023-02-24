import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function ParticipantSwitch({ name, index, selectedParticipants, setSelectedParticipants }) {
  const [selected, setSelected] = useState(false);

  const updateParticipants = (index) => {
    let temp = [...selectedParticipants];
    temp.splice(index, 1);
    setSelectedParticipants([...temp]);
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Switch 
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: 200,
    // backgroundColor: 'blue',
    // borderStyle: 'solid',
    // borderWidth: 1
  }
})