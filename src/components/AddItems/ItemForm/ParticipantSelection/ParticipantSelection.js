import { useState } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import ParticipantSwitch from "./ParticipnatSwitch/ParticipantSwitch";
import styles from "./styles";

export default function ParticipantSelection({ participants, selectedParticipants, setSelectedParticipants }) {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.openModalButton} onPress={() => setModelOpen(true)}>
        <Ionicons name={selectedParticipants.length === 0 ? "people-sharp" : "ios-checkmark-sharp"} size={24} color="rgb(255,215,0)" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modelOpen}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.instructionText}>who took part in the item?</Text>
            <FlatList
              data={participants}
              renderItem={({ item }) =>
                <ParticipantSwitch
                  name={item}
                  state={selectedParticipants.find(p => p === item) !== undefined}
                  index={selectedParticipants.findIndex(p => p === item)}
                  selectedParticipants={selectedParticipants}
                  setSelectedParticipants={setSelectedParticipants}
                />
              }
            />
            <TouchableOpacity style={styles.doneButton} onPress={() => setModelOpen(false)}>
              <Text style={styles.doneButtonText}>done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
