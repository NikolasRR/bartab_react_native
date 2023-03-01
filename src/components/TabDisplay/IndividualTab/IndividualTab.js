import { Text, View } from "react-native";

export default function IndividualTab ({ participant, items }) {
  return (
    <View>
      <Text>{participant}</Text>
      {items.map(item => <Text>{item.name} R${item.participantShare}</Text>)}
    </View>
  );
}