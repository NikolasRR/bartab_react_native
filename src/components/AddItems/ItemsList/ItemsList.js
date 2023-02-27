import { ScrollView, Text, View } from "react-native";

import styles from "./styles";
import ItemBox from "./ItemBox/ItemBox";

export default function ItemList({ items, setItems }) {

  const updateItems = (index) => {
    let temp = [...items];
    temp.splice(index, 1);
    setItems([...temp]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {items.map((item, index) => {
          return (
            <ItemBox item={item} i={index} updateItems={updateItems} />
          );
        })}
      </ScrollView>
    </View>
  );
}