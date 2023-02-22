import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ParticipantSelection from "./ParticipantSelection";

export default function ItemForm({ participants }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput style={inputStyles(3, 3).input} placeholder="name"></TextInput>
        <TextInput style={inputStyles(1, 3).input} placeholder="price" keyboardType="number-pad"></TextInput>
        <TextInput style={inputStyles(1, 0).input} placeholder="amount" keyboardType="decimal-pad"></TextInput>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>add</Text>
        </TouchableOpacity>
      </View>
      <ParticipantSelection participants={participants} />
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
    flex: 1,
    backgroundColor: 'rgb(139,69,19)',
    alignItems: 'center',
    justifyContent: 'center'
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