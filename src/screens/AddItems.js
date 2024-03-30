import { StyleSheet, View } from "react-native";

import ItemForm from "../components/AddItems/ItemForm/ItemForm";
import ItemList from "../components/AddItems/ItemsList/ItemsList";

export default function AddItems({ navigation, route }) {

  return (
    <View style={styles.container}>
      <ItemList />
      <ItemForm navigation={navigation}/>
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