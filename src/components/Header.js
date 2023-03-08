import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bartab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    height: 70,
    backgroundColor: 'rgb(139,69,19)',
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Righteous',
    color: 'rgb(255,215,0)'
  }
})