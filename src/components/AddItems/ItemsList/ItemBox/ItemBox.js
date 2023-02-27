import { Modal, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import styles from "./styles";

export default function ItemBox({ item, i, updateItems }) {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <View style={styles.participantContainer} key={i}>
      <Modal
        animationType="slide"
        visible={modelOpen}
        transparent={true}
        onRequestClose={() => setModelOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {item.participants.map((p, i) => <Text key={i}>{p}</Text>)}
          </View>
        </View>
      </Modal>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.amount}>{item.amount}x</Text>
        <Text style={styles.price}>R${item.price}</Text>
        <Ionicons name="people-sharp" size={24} color="#D2691E" onPress={() => setModelOpen(true)} />
        <Ionicons name="close" size={30} color="red" onPress={() => updateItems(i)} />
      </View>
    </View>
  );
}