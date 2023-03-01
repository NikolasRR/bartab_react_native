import { StyleSheet, Text, View } from "react-native";
import IndividualTab from "../components/TabDisplay/IndividualTab/IndividualTab";

export default function TabDisplay({ route }) {
  const items = route.params.items;
  let tabs = new Map;
  items.forEach(item => {
    const itemBrief = {
      name: item.name,
      participantShare: ((item.price * item.amount) / item.participants.length).toFixed(2),
    };
    item.participants.forEach(participant => {
      if (tabs.get(participant) === undefined) {
        tabs.set(participant, [itemBrief]);
      } else {
        let array = tabs.get(participant);
        array.push(itemBrief);
        tabs.set(participant, array);
      }
    })
  });

  let individualTabs = [];
  tabs.forEach((value, key) => individualTabs.push({name: key, items: value}))

  return (
    <View style={styles.container}>
      {individualTabs.map((participant, i) => <IndividualTab key={i} participant={participant.name} items={participant.items} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE8AA',
    flex: 1,
  }
})