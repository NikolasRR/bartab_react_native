import { ScrollView, Text, View } from "react-native";

import styles from "./styles";
import ItemBox from "./ItemBox/ItemBox";
import { useItems } from '../../../contexts/itemsContext';

export default function ItemList() {
  const { items, setItems } = useItems();

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
            <ItemBox item={item} i={index} key={index} updateItems={updateItems} />
          );
        })}
      </ScrollView>
    </View>
  );
}