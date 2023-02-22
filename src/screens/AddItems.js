import { StyleSheet, Text, TextInput, View } from "react-native";
import ItemForm from "../components/AddItems/ItemForm";

export default function AddItems({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ItemForm participants={route.params.participants}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "#EEE8AA"
  }
})