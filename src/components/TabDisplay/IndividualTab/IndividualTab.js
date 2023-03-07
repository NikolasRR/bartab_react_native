import { Modal, ScrollView, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import styles, { resumeText } from "./styles";

export default function IndividualTab({ participant, items }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={resumeText('left').text}>{participant}</Text>
      <Ionicons name="receipt" size={24} color="#ffd700" />
      <Text style={resumeText('right').text}>R${(items.reduce((acumulator, item) => acumulator + parseFloat(item.participantShare), 0)).toFixed(2)}</Text>
      <Modal
        transparent={true}
        visible={false}
      >
        <ScrollView>
          {items.map((item, index) => <Text key={index}>{item.name} R${item.participantShare}</Text>)}
        </ScrollView>
      </Modal>
    </View>
  );
}