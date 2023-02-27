import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import ParticipantSwitch from "./ParticipantSwitch";

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
            <ScrollView>
              {participants.map((participant, i) => <ParticipantSwitch
                state={selectedParticipants.find(p => p === participant) !== undefined}
                key={i}
                name={participant}
                index={selectedParticipants.findIndex(p => p === participant)}
                selectedParticipants={selectedParticipants}
                setSelectedParticipants={setSelectedParticipants}
              />)}
            </ScrollView>
            <TouchableOpacity style={styles.doneButton} onPress={() => setModelOpen(false)}>
              <Text style={styles.doneButtonText}>done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    flex: 1
  },
  openModalButton: {
    backgroundColor: '#D2691E',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  openModalButtonText: {
    color: '#EEE8AA',
    fontSize: 20
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: 550,
    width: 250,
    marginTop: 40,
    backgroundColor: '#E0EAF4',
    borderRadius: 20,
    paddingTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'flex-end'
  },
  doneButton: {
    backgroundColor: '#1870D5',
    height: 50,
    width: '100%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  doneButtonText: {
    fontSize: 20,
    color: 'white'
  }
})