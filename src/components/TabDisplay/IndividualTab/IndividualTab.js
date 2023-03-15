import { useRef, useState } from "react";

import styles, { resumeText } from "./styles";

import { Modal, Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import TabModal from "./TabModal/TabModal";

export default function IndividualTab({ participant, items }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const total = (items.reduce((acumulator, item) => acumulator + parseFloat(item.participantShare), 0)).toFixed(2);

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={resumeText('left').text}>{participant}</Text>
      <Ionicons name="receipt" size={24} color="#ffd700" onPress={() => setModalIsOpen(true)} />
      <Text style={resumeText('right').text}>${total}</Text>
      <Modal
        transparent={true}
        visible={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}

      >
          <TabModal partipantName={participant} items={items} participantTotal={total} />
        {/* <Pressable style={styles.modalContainer} onPress={e => e.target === e.currentTarget && setModalIsOpen(false)}>
        </Pressable> */}
      </Modal>
    </View>
  );
}