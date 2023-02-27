import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import ParticipantSelection from "./ParticipantSelection";

export default function ItemForm({ participants, items, setItems }) {
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const addItem = () => {
    if (name === "" || price === "" || amount === "" || selectedParticipants.length < 1) {
      Alert.alert('check fields');
      return;
    }
    const item = {
      name: name,
      amount: parseInt(amount),
      price: parseFloat(price),
      participants: selectedParticipants
    };
    setItems([item, ...items]);
    setName("");
    setAmount("");
    setPrice("");
    setSelectedParticipants([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput value={name} onChangeText={setName} style={inputStyles(3, 3).input} placeholder="name"></TextInput>
        <TextInput value={price} onChangeText={setPrice} style={inputStyles(1, 3).input} placeholder="price" keyboardType="numeric"></TextInput>
        <TextInput value={amount} onChangeText={setAmount} style={inputStyles(1, 3).input} placeholder="amount" keyboardType="numeric"></TextInput>
        <ParticipantSelection participants={participants} selectedParticipants={selectedParticipants} setSelectedParticipants={setSelectedParticipants} />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => addItem()}>
        <Text style={styles.addButtonText}>add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  inputs: {
    flexDirection: 'row'
  },
  addButton: {
    backgroundColor: 'rgb(139,69,19)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  addButtonText: {
    color: 'rgb(255,215,0)',
    fontSize: 25
  },
  continueButton: {
    height: 60,
    backgroundColor: 'rgb(255,215,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueButtonText: {
    color: 'rgb(139,69,19)',
    fontSize: 25,
    fontWeight: '600'
  }
})

const inputStyles = (flex, margin) => StyleSheet.create({
  input: {
    backgroundColor: 'white',
    flex: flex,
    paddingLeft: 5,
    marginRight: margin,
    height: 60
  }
})