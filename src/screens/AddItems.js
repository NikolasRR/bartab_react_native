import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ItemForm from "../components/AddItems/ItemForm/ItemForm";
import ItemList from "../components/AddItems/ItemsList/ItemsList";

export default function AddItems({ navigation, route }) {
  const [items, setItems] = useState([]);

  return (
    <View style={styles.container}>
      <ItemList items={items} setItems={setItems} />
      <ItemForm participants={route.params.participants} items={items} setItems={setItems}/>
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