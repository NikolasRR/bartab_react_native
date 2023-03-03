import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IndividualTab from "../components/TabDisplay/IndividualTab/IndividualTab";
import TotalTab from "../components/TabDisplay/TotalTab/TotalTab";

export default function TabDisplay({ navigation, route }) {
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
      <View style={styles.individualTabs}>
      {individualTabs.map((participant, i) => <IndividualTab key={i} participant={participant.name} items={participant.items} />)}
      </View>
      <TotalTab items={items}/>
      <TouchableOpacity style={styles.restartButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.restartButtonText}>restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE8AA',
    flex: 1,
    justifyContent:'flex-end'
  },
  individualTabs: {
    flex: 1
  },
  restartButton: {
    backgroundColor: 'rgb(255,215,0)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  restartButtonText: {
    color: 'rgb(139,69,19)',
    fontSize: 30
  }
})