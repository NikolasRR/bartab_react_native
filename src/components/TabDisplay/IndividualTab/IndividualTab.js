import { ScrollView, Text, View } from "react-native";

export default function IndividualTab({ participant, items }) {
  return (
    <View>
      <Text>{participant}</Text>
      <ScrollView>
        {items.map(item => <Text>{item.name} R${item.participantShare}</Text>)}
      </ScrollView>
      <Text>Total: R${(items.reduce((acumulator, item) => acumulator + parseFloat(item.participantShare), 0)).toFixed(2)}</Text>
    </View>
  );
}