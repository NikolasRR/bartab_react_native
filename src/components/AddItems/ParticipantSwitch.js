import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function ParticipantSwitch({ name }) {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Switch onChange={() => setSelected(!selected)} value={selected}></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  }
})