import { FlatList, Text, View } from "react-native";
import styles from "./styles";

export default function TabModal({ partipantName, participantTotal, items }) {

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.participant}>{partipantName}</Text>
        <View style={styles.itemsList}>
          <FlatList
            data={items}
            renderItem={({ item }) =>
              <View style={styles.itemBox}>
                <Text style={styles.item} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.item}>${item.participantShare}</Text>
              </View>
            }
          />
        </View>
        <Text style={styles.total}>TOTAL: ${participantTotal}</Text>
      </View>
    </View>
  );
}