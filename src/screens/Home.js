import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={textStyles(29, 'Montserrat').welcome}>Welcome to Bartab!</Text>
        <Text style={textStyles(17, 'Montserrat-medium').welcome}>the app to split the bar tab with your friends</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={textStyles(20, 'Montserrat').welcome}>Here's how it works:</Text>
        <Text style={textStyles(16, 'Montserrat-medium').welcome}>first, add the participants</Text>
        <Text style={textStyles(16, 'Montserrat-medium').welcome}>then, add the items, informing the ones that participated in it</Text>
      <Text style={textStyles(16, 'Montserrat-medium').welcome}>and that's it! the indivual check of every participant will be calculated, as well as the total</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddParticipants")}>
        <Text style={styles.buttonText}>start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textBox: {
    marginTop: 30
  },
  button: {
    backgroundColor: '#ffd700',
    height: 60,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 60
  },
  buttonText: {
    color: '#8b4513',
    fontFamily: 'Montserrat',
    fontSize: 25
  }
});

const textStyles = (size, font) => StyleSheet.create({
  welcome: {
    color: '#D2691E',
    width: 300,
    textAlign: 'center',
    fontFamily: font,
    fontSize: size,
    marginBottom: 10
  },
})