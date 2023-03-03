import { Text, View } from "react-native";
import styles from "./styles";

export default function TotalTab ({ items }) {
  const total = items.reduce((acumulator, item) => acumulator + (parseFloat(item.price) * parseFloat(item.amount)), 0)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TOTAL:</Text>
      <Text style={styles.text}>${total}</Text>
    </View>
  );
}