import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import ParticipantSelection from "../ParticipantSelection";
import styles, { inputStyles } from "./styles";

export default function ItemForm({ participants, items, setItems, navigation }) {
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const addItem = () => {
    if (name === "" || price === "" || amount === "" || selectedParticipants.length < 1) {
      Alert.alert('check fields');
      return;
    }
    try {
      const item = {
        name: name,
        amount: parseInt(amount),
        price: parseFloat(price).toFixed(2),
        participants: selectedParticipants
      };
      setItems([item, ...items]);
      setName("");
      setAmount("");
      setPrice("");
      setSelectedParticipants([]);
    } catch (error) {
      Alert.alert('check fields');
    }
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
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("TabDisplay", { items: items })}>
        <Text style={styles.continueButtonText}>continue</Text>
      </TouchableOpacity>
    </View>
  );
}