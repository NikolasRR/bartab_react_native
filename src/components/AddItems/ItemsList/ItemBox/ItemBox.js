import { FlatList, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import styles from "./styles";
import Modal from "react-native-modal";

export default function ItemBox({ item, i, updateItems }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <View style={styles.participantContainer} key={i}>
      <Modal
        isVisible={modalIsOpen}
        onBackdropPress={() => setModalIsOpen(false)}
        backdropOpacity={0}
        onBackButtonPress={() => setModalIsOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.name}><Ionicons name="people-sharp" size={24} color="#D2691E" /> {item.name}</Text>
            <FlatList
              style={{ marginTop: 15 }}
              contentContainerStyle={styles.flatList}
              data={item.participants}
              renderItem={({ item }) => <Text style={styles.modalParticipant}>{item}  </Text>}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.amount}>{item.amount}x</Text>
        <Text style={styles.price}>R${item.price}</Text>
        <Ionicons name="people-sharp" size={24} color="#D2691E" onPress={() => setModalIsOpen(true)} />
        <Ionicons name="close" size={30} color="red" onPress={() => updateItems(i)} />
      </View>
    </View>
  );
}