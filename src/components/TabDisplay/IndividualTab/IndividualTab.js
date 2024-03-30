import { useState } from "react";

import styles, { resumeText } from "./styles";

import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';

import TabModal from "./TabModal/TabModal";
import { height } from '../../../support/Dimensions';

export default function IndividualTab({ participant, items }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const total = (items.reduce((acumulator, item) => acumulator + parseFloat(item.participantShare), 0)).toFixed(2);

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={resumeText('left').text}>{participant}</Text>
      <Ionicons name="receipt" size={height * 0.03} color="#ffd700" onPress={() => setModalIsOpen(true)} />
      <Text style={resumeText('right').text}>${total}</Text>
      <Modal
        isVisible={modalIsOpen}
        onBackdropPress={() => setModalIsOpen(false)}
        backdropOpacity={0}
        onBackButtonPress={() => setModalIsOpen(false)}
      >
        <TabModal partipantName={participant} items={items} participantTotal={total} />
      </Modal>
    </View>
  );
}